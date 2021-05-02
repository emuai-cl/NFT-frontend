import React, { useEffect, useRef } from "react"

import ldBar from "@loadingio/loading-bar/lib/loading-bar"
import styled from "styled-components"
import { darken } from "polished"

import { theme } from "../../styles/theme"

const Car = styled.div`
  display: inline-block;
  position: relative;
  max-width: 95% !important;
`

type SoldProps = {
  maxSupply: number
  currentSupply: number
}

const Sold: React.FC<SoldProps> = ({ maxSupply, currentSupply }) => {
  console.log(maxSupply, currentSupply)
  const carRef = useRef<HTMLDivElement>()
  useEffect(() => {
    if (carRef.current) {
      new ldBar("#ldBar", {
        type: "fill",
        "fill-dir": "ltr",
        fill: `data:ldbar/res,gradient(45,2,${theme.colors.accent}, ${darken(
          0.04,
          theme.colors.accent
        )})`,
        path:
          "M579.6,46.16C624.52,10.59,678.69,1.66,701.27.65c27.84-1.24,72,5.32,122.62,19.59a10.61,10.61,0,0,0,3.63,0c-1.28,32.55,5.47,43.64,12.7,47.16,8.27,4,16.35-2.26,35.91.36a87.13,87.13,0,0,1,23.58,6.9c14.42,5.88,45.44,14.52,117.55,26.84-113.19-6.6-146.21-4-147.21.12-5,20.58-10.34,45.6-34.93,66.55-4.81,4.09-11.36,5.88-24.67,10.21-29.33,9.53-136.74,9.9-198.59,6.12a9.53,9.53,0,0,0-2.94.48c-.89,7.13-3.51,17.15-11.56,23.86-.57.47-1.14.91-1.73,1.33q-123.18,5.72-248,5.8h-4.3V178.09l-4.44-5H304.21l-2.7-43.16L.59,121.67,5.66,92.13c2.74-.44,6.91-1.09,12-1.88,50-7.73,171.66-25.44,333.42-35.87C413,50.39,490.22,46.85,579.6,46.16Z",
        value: 60,
      })
    }
  }, [carRef])
  return <Car ref={carRef} id="ldBar" />
}

export default Sold
