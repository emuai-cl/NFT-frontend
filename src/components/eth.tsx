import React from "react"

import loadable from "@loadable/component"

export default loadable(async () => {
  if (typeof window != "undefined") return import("./_eth")
  return null
})
