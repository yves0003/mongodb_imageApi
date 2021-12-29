import type { NextPage } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"
import ButtonLight from "../components/ButtonToggleDarkMode"
import * as icon from "../components/icons"
import Input from "../components/Input"
import ModalContainer from "../components/ModalContainer"
import ModalDiv from "../components/ModalDiv"
import shareLink from "../helpers/shareLink"
import { useClickAway } from "../hooks/useClickAway"
import { useDarkMode } from "../hooks/useDarkMode"
import useGetImages from "../hooks/useGetImages"
import {
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
} from "../styles/Pages"
import { saveImage } from "../utils/saveImage"

const Home: NextPage = () => {
  const [url, setUrl] = useState("")
  const [currency, setCurrency] = useState("")
  const [code, setCode] = useState("")
  const [displayShare, setDisplayShare] = useState("")
  const [statusSave, setStatusSave] = useState("")
  let { open, setOpen, refControler, refObject } = useClickAway(false, () => {
    setStatusSave("")
    setDisplayShare("")
    setUrl("")
    setCode("")
    setCurrency("")
  })
  let [statusDark, setStatusDark] = useDarkMode("", "statusDark")
  const { data, error } = useGetImages()
  const [allImages, setAllImages] = useState<any[]>([])

  useEffect(() => {
    if (data && allImages.length === 0) {
      setAllImages(data)
    }
  }, [allImages, data])

  return (
    <>
      <Container>
        <LeftSide>
          <Form
            onSubmit={saveImage(
              url,
              currency,
              code,
              setOpen,
              setStatusSave,
              setAllImages
            )}
          >
            <Input
              name="url"
              label="Image Link"
              type="text"
              placeholder=" "
              value={url}
              onChange={e => setUrl(e.target.value)}
              autoComplete="off"
              required
            />
            <Input
              name="currency"
              label="Currency name"
              type="text"
              placeholder=" "
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              autoComplete="off"
              required
            />
            <Input
              name="currency_code"
              label="Currency code"
              type="text"
              placeholder=" "
              value={code}
              onChange={e => setCode(e.target.value)}
              autoComplete="off"
              required
            />
            <Button type="submit">save</Button>
          </Form>
          <Space />
          <BottomDiv>
            <Link href="/api/listCryptoLogo">
              <a target="_blank" rel="noopener noreferrer">
                <div>API EndPoint</div>
              </a>
            </Link>

            <a href="https://github.com/yves0003/mongodb_imageApi">
              <div>Tutorial</div>
            </a>
          </BottomDiv>
        </LeftSide>
        <RigthSide className="container">
          <HeaderNav>
            <icon.LinkIco
              width="1.2rem"
              height="1.2rem"
              onClick={shareLink(setOpen, setDisplayShare)}
              className="m-3"
            />
            <H2>Crypto Logo Api</H2>
            <ButtonLight
              className="m-3 br-4 button p-1"
              statusDark={statusDark}
              setStatusDark={setStatusDark}
            />
          </HeaderNav>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            All links are available through the Api EndPoint
          </div>
          <div
            style={{ textAlign: "center" }}
          >{`(${allImages.length} logos)`}</div>
          <NOMODIF style={{ textAlign: "center" }}>
            <p>
              <b>NO MODIF ON SMALL SCREEN</b>
            </p>
          </NOMODIF>
          <BlockImage id="idBlockImage">
            {allImages.length !== 0 ? (
              allImages.map((crypto: any, index: number) => (
                <ImageWrapper key={index}>
                  <Img src={crypto.link} />
                  <div style={{ fontWeight: "500" }}>
                    {crypto.currency_long}
                  </div>
                </ImageWrapper>
              ))
            ) : (
              <div style={{ textAlign: "center" }}>Loading...........</div>
            )}
          </BlockImage>
        </RigthSide>
      </Container>
      <ModalContainer
        isOpen={open}
        closeFunc={() => {
          setOpen(false)
          setStatusSave("")
          setDisplayShare("")
          setUrl("")
          setCode("")
          setCurrency("")
        }}
        refObject={refObject}
        refControler={refControler}
        isBlur
        opacityBackground={0.2}
      >
        <ModalDiv param={displayShare} statusSave={statusSave} />
      </ModalContainer>
    </>
  )
}

export default Home
