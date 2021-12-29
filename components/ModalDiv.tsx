import { Loading } from "./icons"
import { ShareDialog } from "./ShareDialog"

const ModalDiv = ({
  param,
  statusSave
}: {
  param: string
  statusSave: string
}) => {
  switch (param) {
    case "share":
      return <ShareDialog />
    default:
      return (
        <div style={{ textAlign: "center" }}>
          {statusSave === "" ? (
            <Loading width="2rem" height="2rem" />
          ) : (
            statusSave
          )}
        </div>
      )
  }
}

export default ModalDiv
