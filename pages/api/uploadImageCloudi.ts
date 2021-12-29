import { NextApiRequest, NextApiResponse } from "next"
import cloudinary from "cloudinary"
import config from "../../config/config"
import clientPromise from "../../utils/mongodb"

cloudinary.v2.config({
  cloud_name: config.server.cloudinary_name,
  api_secret: config.server.cloudinary_api_secret,
  api_key: config.server.cloudinary_api_key
})
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req
    if (method !== "POST") {
      res.status(400).json({ message: "Not allowed" })
    } else {
      const { dataString, filename, code } = req.body

      const result = await cloudinary.v2.uploader.upload(dataString, {
        upload_preset: `krakendata_logo`,
        public_id: filename.toLowerCase().replaceAll(" ", "-")
      })
      //save in db
      let date = new Date().toISOString()
      const db = (await clientPromise).db(config.server.dataBase)

      const data = await db.collection(config.server.colLinkUrl).updateOne(
        { currency_long: filename },
        {
          $set: {
            currency_code: code,
            currency_long_strip: filename.toLowerCase().replaceAll(" ", "-"),
            link: `https://res.cloudinary.com/${config.server.cloudinary_name}/image/upload/${result.public_id}`,
            addedAt: date
          }
        },
        {
          upsert: true
        }
      )

      const newFile = {
        currency_code: code,
        currency_long_strip: filename.toLowerCase().replaceAll(" ", "-"),
        link: `https://res.cloudinary.com/${config.server.cloudinary_name}/image/upload/${result.public_id}`,
        addedAt: date,
        currency_long: filename
      }

      res.status(200).json({
        message: "Insert succeed",
        link: result.public_id,
        url: `https://res.cloudinary.com/${config.server.cloudinary_name}/image/upload/${result.public_id}`,
        insertFile: newFile
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).end(error)
  }
}
