import { Dispatch, SetStateAction, useEffect, useState } from "react"

export function useDarkMode(
  defaultVal: string,
  key: string
): [string, Dispatch<SetStateAction<string>>] {
  const [statusDark, setStatusDark] = useState(defaultVal)

  useEffect(() => {
    const doc = document.firstElementChild!
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      )
      //Ecouter les évènements
      darkModeMediaQuery.addEventListener("change", e => {
        const darkModeOn = e.matches
        if (darkModeOn) {
          doc.setAttribute("color-scheme", "dark")
          setStatusDark("true")
          localStorage.setItem("statusDark", "true")
        } else {
          doc.setAttribute("color-scheme", "light")
          setStatusDark("false")
          localStorage.setItem("statusDark", "false")
        }
      })
    }
  }, [])

  useEffect(() => {
    const val = localStorage.getItem(key)
    if (val !== null) {
      setStatusDark(val)
    }
  }, [key])

  useEffect(() => {
    const doc = document.firstElementChild!
    if (statusDark === "true") {
      doc.setAttribute("color-scheme", "dark")
    } else if (statusDark === "false") {
      doc.setAttribute("color-scheme", "light")
    }
  }, [statusDark])

  useEffect(() => {
    window.localStorage.setItem(key, statusDark)
  }, [key, statusDark])

  return [statusDark, setStatusDark]
}
