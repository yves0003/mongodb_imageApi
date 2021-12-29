import styled from "styled-components"
import { infoSite } from "../infoSite"

const ShareDialogDiv = styled.div`
  width: 100%;
  max-width: 500px;
  z-index: -1;
  & .isOpen {
    display: block;
    z-index: 2;
  }
  & svg {
    width: 20px;
    height: 20px;
    margin-right: 7px;
  }
  button {
    display: "inline-flex";
    align-items: "center";
    justify-content: "center";
    height: "auto";
    padding-top: "8px";
    padding-bottom: "8px";
    color: "#777";
    text-align: "center";
    font-size: "14px";
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: 2px;
    text-transform: capitalize;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 4px;
    border: 1px solid #ddd;
    cursor: pointer;
    &:hover {
      border-color: #cdd;
    }
  }
`

const Target = styled.div`
  display: Grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
`

const LinkA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: var(--surface3);
  &:hover {
    background-color: var(--surface2);
  }
  cursor: pointer;
`

const PenUrl = styled.div`
  margin-right: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: none;
`

const CopyLink = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  background-color: transparent;
`

const HiddenSVG = styled.svg`
  display: none;
`

const ButtonA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding-top: 8px;
  padding-bottom: 8px;
  color: var(--text2);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 2px;
  text-transform: capitalize;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid var(--surface3);
  cursor: pointer;
  &:hover {
    border-color: #cdd;
  }
`

export const ShareDialog = () => {
  const copyLinkFunc = () => {
    if (!navigator.clipboard) {
      const range = document.createRange()
      // to select text
      range.selectNode(document.getElementById("linkToCopy")!)
      console.log(window.getSelection()?.addRange(range))
      window.getSelection()?.removeAllRanges() // clear current selection
      window.getSelection()?.addRange(range)
      document.execCommand("copy")
      // use old commandExec() way
    } else {
      navigator.clipboard
        .writeText(document.getElementById("linkToCopy")?.innerHTML!)
        .then(function () {
          //alert("yeah!") // success
          console.log("copy done")
        })
        .catch(function () {
          alert("err") // error
        })
    }

    window.getSelection()?.removeAllRanges() // to deselect
  }
  return (
    <>
      <ShareDialogDiv id="share-dialog">
        <Target>
          <ButtonA
            href={`https://www.facebook.com/sharer.php?u=${infoSite.urlShare}`}
            title="Envoyer le lien par facebook"
          >
            <svg>
              <use href="#facebook"></use>
            </svg>
            <span>Facebook</span>
          </ButtonA>

          <ButtonA
            href={`https://twitter.com/intent/tweet?url=${infoSite.urlShare}&text=${infoSite.descriptionShare}&hasshtags=Gospel,music`}
            title="Envoyer le lien par twitter"
          >
            <svg>
              <use href="#twitter"></use>
            </svg>
            <span>Twitter</span>
          </ButtonA>

          <ButtonA
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${infoSite.urlShare}`}
            title="Envoyer le lien par Email"
          >
            <svg>
              <use href="#linkedin"></use>
            </svg>
            <span>LinkedIn</span>
          </ButtonA>

          <ButtonA
            href={`mailto:?subject=${infoSite.title}&body=${encodeURIComponent(
              infoSite.bodyMail
            )}  ${infoSite.url}`}
            title="Envoyer le lien par email"
          >
            <svg>
              <use href="#email"></use>
            </svg>
            <span>Email</span>
          </ButtonA>
        </Target>
        <PenUrl id="linkToCopy">{infoSite.url}</PenUrl>
        <LinkA>
          <CopyLink
            onClick={copyLinkFunc}
            style={{ border: "none" }}
            title="Copier le lien"
          >
            Copier le lien
          </CopyLink>
        </LinkA>
      </ShareDialogDiv>
      <HiddenSVG>
        <defs>
          <symbol
            id="share-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-share"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </symbol>

          <symbol
            id="facebook"
            viewBox="0 0 24 24"
            fill="#3b5998"
            stroke="#3b5998"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </symbol>

          <symbol
            id="twitter"
            viewBox="0 0 24 24"
            fill="#1da1f2"
            stroke="#1da1f2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-twitter"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </symbol>

          <symbol
            id="email"
            viewBox="0 0 24 24"
            fill="#777"
            stroke="#fafafa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </symbol>

          <symbol
            id="linkedin"
            viewBox="0 0 24 24"
            fill="#0077B5"
            stroke="#0077B5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </symbol>

          <symbol
            id="close"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x-square"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="15"></line>
            <line x1="15" y1="9" x2="9" y2="15"></line>
          </symbol>
        </defs>
      </HiddenSVG>
    </>
  )
}
