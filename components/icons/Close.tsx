import styled from "styled-components"

const Svg = styled.svg`
  fill: var(--text2);
  &:hover {
    fill: var(--brand);
  }
`
const Div = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const Close = ({
  width,
  height,
  ...props
}: {
  width?: string
  height?: string
  [x: string]: any
}) => {
  return (
    <Div {...props}>
      <Svg
        width={width}
        height={height}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 371.23 371.23"
        xmlSpace="preserve"
      >
        <polygon
          points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "
        />
      </Svg>
    </Div>
  )
}

Close.defaultProps = {
  width: "0.8rem",
  height: "0.8rem"
}

export default Close
