import { useEffect, useState, useRef, ReactNode } from "react"
import { createPortal } from "react-dom"

const Portal = ({
  children,
  selector,
}: {
  children: ReactNode
  selector: string
}) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [selector])
  return mounted
    ? createPortal(children, document.querySelector(selector)!)
    : null
}

export default Portal