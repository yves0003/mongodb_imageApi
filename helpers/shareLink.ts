import { Dispatch, SetStateAction } from "react"
import { infoSite } from "../infoSite"

const shareLink = (
  setOpen: Dispatch<SetStateAction<boolean>>,
  setDisplayShare: Dispatch<SetStateAction<string>>
) => {
  return () => {
    if (navigator.share) {
      navigator
        .share({
          title: infoSite.title,
          text: infoSite.description,
          url: infoSite.url
        })
        .then(() => {
          console.log("Thanks for sharing!")
        })
        .catch(console.error)
    } else {
      setOpen(true)
      setDisplayShare("share")
    }
  }
}

export default shareLink
