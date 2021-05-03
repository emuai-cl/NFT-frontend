import React from "react"
import loadable from "@loadable/component"

export default loadable(async () => {
  if (typeof window == "undefined") return null

  const { fetchContract } = await import("./fetchContract")
  const { MAX_SUPPLY, TOTAL_SUPPLY } = await fetchContract()
  const { default: Sold } = await import("./sold")

  return {
    default: props => (
      <Sold maxSupply={MAX_SUPPLY} currentSupply={TOTAL_SUPPLY} />
    ),
  }
})
