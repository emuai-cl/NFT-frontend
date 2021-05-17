import React from "react"
import styled, { keyframes } from "styled-components"

type EllipsisProps = {
  /** hex color */
  color?: string
  /** size in pixel */
  size?: number
} & React.HTMLAttributes<HTMLDivElement>

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(184.61%, 0);
  }
`
const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const EllipsisContainer = styled.div`
  display: inline-block;
  position: relative;

  & div {
    position: absolute;
    top: 41.25%;
    width: 16.25%;
    height: 16.25%;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 10%;
    animation: ${ellipsis1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 10%;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 40%;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 70%;
    animation: ${ellipsis3} 0.6s infinite;
  }
`
const Ellipsis: React.FC<EllipsisProps> = ({
  color = "#7f58af",
  size = 80,
  style,
  ...rest
}) => {
  const circles = [...Array(4)].map((_, index) => (
    <div key={index} style={{ background: `${color}` }} />
  ))

  return (
    <EllipsisContainer
      style={{ ...style, width: size, height: size }}
      {...rest}
    >
      {circles}
    </EllipsisContainer>
  )
}

export default Ellipsis
