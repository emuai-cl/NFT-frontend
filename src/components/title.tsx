import React from "react"

import styled, { keyframes } from "styled-components"

const stroke = keyframes`
  100% {
    stroke-dashoffset: -400;
  }
`
const Svg = styled.svg`
  font: 5em/1 Open Sans, Impact;
  text-transform: uppercase;
`

const UnstyledUse = (props: React.SVGProps<SVGUseElement>) => {
  return <use {...props} />
}

const Use = styled(UnstyledUse)`
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.5));
  fill: none;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-dasharray: 70 330;
  stroke-dashoffset: 0;
  animation: ${stroke} 6s infinite linear;
  &:nth-child(5n + 1) {
    stroke: #2b7fab;
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  &:nth-child(5n + 2) {
    stroke: #27446c;
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }
  &:nth-child(5n + 3) {
    stroke: #2d9cca;
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }
  &:nth-child(5n + 4) {
    stroke: #716b94;
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }
  &:nth-child(5n + 5) {
    stroke: #29628b;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }
`

export const Title = ({ title = "EMUS" }) => {
  return (
    <Svg>
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".35em">
          {title}
        </text>
      </symbol>
      <Use xlinkHref="#s-text" />
      <Use xlinkHref="#s-text" />
      <Use xlinkHref="#s-text" />
      <Use xlinkHref="#s-text" />
      <Use xlinkHref="#s-text" />
    </Svg>
  )
}

export default Title
