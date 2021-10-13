import React from "react"

import loadable from "@loadable/component"

import Ellipsis from "../../react-spinners-css/ellipsis"
import { theme } from "../../../styles/theme"

const Loadable = loadable(async () => import("./ethereumAnimation"), {
  fallback: <Ellipsis color={theme.colors.accent} />,
})

export default Loadable
