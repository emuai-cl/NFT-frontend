import React from "react"

import Lottie from "react-lottie-player"

import lottieJson from "./ethereum.json"

const EthereumAnimation = props => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 300 }}
      {...props}
    />
  )
}

export default EthereumAnimation
