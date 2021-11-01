import React from "react"
import loadable from "@loadable/component"
import Ellipsis from "../react-spinners-css/ellipsis"

const Youtube = loadable(() => import("./youtube"), {
  fallback: <Ellipsis />,
})

export default Youtube
