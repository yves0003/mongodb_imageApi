import styled from "styled-components"

const Container = styled.div`
  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: 1fr 5fr;
    letter-spacing: 0.9px;
  }
  display: grid;
  letter-spacing: 0.9px;
`

const LeftSide = styled.div`
  display: none;
  @media (min-width: 48rem) {
    height: 100vh;
    background-color: var(--surface2);
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    left: 0;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const Button = styled.button`
  width: 80%;
  margin: 0.5rem auto;
  height: 2.5rem;
  border: solid 1px var(--surface2);
  border-radius: 0.25rem;
  background-color: var(--surface3);
  transition: background-color 200ms ease-in;
  &:hover {
    background-color: var(--surface4);
    cursor: pointer;
  }
`

const Space = styled.div`
  margin-top: auto;
`

const BottomDiv = styled.div`
  div {
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    background-color: var(--surface3);
    border-bottom: solid 1px var(--surface2);
    cursor: pointer;
    transition: background-color 200ms ease-in;
    user-select: none;
    &:hover {
      background-color: var(--surface4);
      cursor: pointer;
    }
  }
`

const RigthSide = styled.div`
  > h2 {
    text-align: center;
  }
`

const H2 = styled.h2`
  font-weight: 400;
`
const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`

const BlockImage = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 48rem) {
    grid-template-columns: repeat(6, 1fr);
  }
  gap: 2rem;
`
const ImageWrapper = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 4rem;
`

const NOMODIF = styled.div`
  @media (min-width: 48rem) {
    display: none;
  }
`

export {
  BlockImage,
  BottomDiv,
  Button,
  Container,
  Form,
  LeftSide,
  RigthSide,
  Space,
  H2,
  HeaderNav,
  ImageWrapper,
  Img,
  NOMODIF
}
