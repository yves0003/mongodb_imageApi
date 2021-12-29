import { Dispatch, SetStateAction } from "react"

export const darkModeFunc = (statusDark: string) =>
  function darkModeFunc(setStatusDark: Dispatch<SetStateAction<string>>) {
    let doc = document.firstElementChild!
    if (statusDark === "true") {
      doc.setAttribute("color-scheme", "light")
      setStatusDark("false")
      localStorage.setItem("statusDark", "false")
    } else {
      doc.setAttribute("color-scheme", "dark")
      setStatusDark("true")
      localStorage.setItem("statusDark", "true")
    }
  }
