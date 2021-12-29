import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import config from "../../config/config"
import clientPromise from "../../utils/mongodb"

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req
    if (method !== "GET") {
      res.status(400).json({ message: "Not allowed" })
    } else {
      const db = (await clientPromise).db(config.server.dataBase)
      const data = await db
        .collection(config.server.colLinkUrl)
        .find({})
        .toArray()
      res.status(200).json(data)
    }
  } catch (error) {
    console.error(error)
    return res.status(500).end(error)
  }
}
