import { MouseEvent } from "react"
import { darkModeFunc } from "./darkModeFunc"

export function toggleButton(e: MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  if (e.currentTarget.dataset) {
    let toggle = e.currentTarget.dataset.toggle
    if (toggle === "light" || toggle === "dark") {
      let statusDark = toggle === "light" ? "true" : "false"
      return darkModeFunc(statusDark)
    }
    if (e.currentTarget.dataset.toggle === "lang") {
      console.log(e.currentTarget.dataset.toggle, "yes")
    }
    if (e.currentTarget.dataset.toggle === "search") {
      console.log(e.currentTarget.dataset.toggle, "yes")
    }
  }
}