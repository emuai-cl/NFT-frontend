import React from "react"

import Lottie from "react-lottie-player"

import lottieJson from "./not-found.json"

const NotFound = props => {
  return (
    <Lottie
      loop={false}
      animationData={lottieJson}
      play
      style={{ width: 400, height: 400 }}
      {...props}
    />
  )
}

export default NotFound
