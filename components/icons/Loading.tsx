import React, { FC, InputHTMLAttributes } from "react"
import styled from "styled-components"

interface DivProps extends InputHTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
}

const Svg = styled.svg`
  margin: auto;
  background: transparent;
  display: block;
  shape-rendering: auto;
`

const Div = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const Loading: FC<DivProps> = ({ width, height, ...props }) => {
  return (
    <Div {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          strokeWidth="8"
          stroke="var(--failure)"
          strokeDasharray="50.26548245743669 50.26548245743669"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="23"
          strokeWidth="8"
          stroke="var(--warning)"
          strokeDasharray="36.12831551628262 36.12831551628262"
          strokeDashoffset="36.12831551628262"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;-360 50 50"
          ></animateTransform>
        </circle>
      </Svg>
    </Div>
  )
}

Loading.defaultProps = {
  width: "0.8rem",
  height: "0.8rem"
}

export default Loading
