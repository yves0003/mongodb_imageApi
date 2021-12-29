import { useEffect, useRef, useState } from "react"

export const useClickAway = (
  initialVal: boolean,
  onClickAwayFunc: Function
) => {
  const refControler = useRef<HTMLDivElement & HTMLButtonElement>(null)
  const refObject = useRef<HTMLDivElement>(null)

  let [open, setOpen] = useState(initialVal)
  const handleClickOutside = (event: MouseEvent) => {
    if (
      refControler.current &&
      !refControler.current.contains(event.target as Node) &&
      refObject.current &&
      !refObject.current.contains(event.target as Node)
    ) {
      setOpen(false)
      onClickAwayFunc()
    }
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (open) {
        setOpen(false)
        onClickAwayFunc()
      }
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true)
    document.addEventListener("keydown", handleKeyPress, true)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true)
      document.removeEventListener("keydown", handleKeyPress, true)
    }
  }, [open])

  return { open, setOpen, refControler, refObject }
}
