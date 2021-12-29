import { RefObject, ReactNode } from "react"
import styled from "styled-components"
import Portal from "./HOC/Portal"
import * as icon from "./icons"


const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  padding-top: 10rem;
  overflow-y: hidden;
  background-color: ${props =>
    props.theme.isBlur
      ? `hsla(var(--brand-h), var(--brand-s), var(--brand-l), ${props.theme.opacityBackground})`
      : "hsla(var(--text1-hsl))"};
  backdrop-filter: ${props =>
    props.theme.isBlur ? `blur(${props.theme.valBlur})` : ""};
`
const ModalBox = styled.div`
  background-color: var(--surface1);
  margin: auto;
  padding: 10px;
  border: 1px solid var(--surface3);
  width: 18rem;
  border-radius: 1rem;
`
const CloseDiv = styled.div`
  text-align: right;
`

const ModalContainer = ({
  isOpen,
  closeFunc,
  isBlur,
  valBlur,
  refObject,
  refControler,
  children,
  opacityBackground,
}: {
  isOpen: boolean
  isBlur?: boolean
  valBlur?: string

  closeFunc: Function
  refObject: RefObject<HTMLDivElement>
  refControler: RefObject<HTMLDivElement>
  children: ReactNode
  opacityBackground?: number
}) => {
  if (!isOpen) return null
  return (
    <Portal selector="#portal-root">
      <Background theme={{ isBlur, valBlur, opacityBackground }}>
        <ModalBox ref={refObject} aria-label="Modal">
          <CloseDiv ref={refControler} onClick={() => closeFunc()}>
            <icon.Close />
          </CloseDiv>
          {children}
        </ModalBox>
      </Background>
    </Portal>
  )
}

ModalContainer.defaultProps = {
  isBlur: false,
  valBlur: "4px",
  opacityBackground: 0.5,
}

export default ModalContainer
