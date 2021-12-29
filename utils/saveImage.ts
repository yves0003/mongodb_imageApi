import axios from "axios"
import { Dispatch, FormEvent, SetStateAction } from "react"
import { hasImageExtension } from "../helpers/HasImageExtension"
import { imgUrlToDataString } from "../helpers/ImgUrlToDataString"
import { validURL } from "../helpers/ValidUrl"

export const saveImage = (
  url: string,
  currency: string,
  code: string,
  setOpen: Dispatch<SetStateAction<boolean>>,
  setStatusSave: Dispatch<SetStateAction<string>>,
  setAllImages: Dispatch<SetStateAction<any[]>>
) => {
  return async (e: FormEvent) => {
    e.preventDefault()
    setOpen(true)

    if (validURL(url)) {
      if (hasImageExtension(url)) {
        let dataImgString = "no image"
        try {
          dataImgString = await imgUrlToDataString(url)
          const { data } = await axios({
            method: "POST",
            url: `/api/uploadImageCloudi`,
            data: { dataString: dataImgString, filename: currency, code },
            headers: {
              "Content-Type": "application/json"
            }
          })
          setStatusSave("Image saved")
          setAllImages(prev => {
            let newList = JSON.parse(JSON.stringify(prev))
            newList.push(data.insertFile as any)
            return newList
          })
        } catch (error) {
          dataImgString = "Error: " + "file does not exist"
          setStatusSave(dataImgString)
        }
      } else {
        setStatusSave(
          "Error: provide a file with theses extensions : JPEG, JPG, PNG)"
        )
      }
    } else {
      setStatusSave("Error: provide a correct link")
    }
  }
}
