import React, { useEffect, useRef } from "react"

import ldBar from "@loadingio/loading-bar/lib/loading-bar"
import styled from "styled-components"
import tw from "twin.macro"
import { darken } from "polished"

import { theme } from "../../styles/theme"
import { PageParagraph } from "../common"

const Car = styled.div`
  display: inline-block;
  position: relative;
  max-width: 95% !important;
  .ldBar-label {
    display: none;
  }
`
const Container = styled.div`
  ${tw`mt-5 md:col-span-2 w-3/5 mx-auto p-4 mb-5 rounded text-center`};
`

const Span = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`

type SoldProps = {
  maxSupply: number
  currentSupply: number
}

const Sold: React.FC<SoldProps> = ({ maxSupply, currentSupply }) => {
  const carRef = useRef<HTMLDivElement>()
  const percentage = (currentSupply / maxSupply) * 100
  useEffect(() => {
    if (carRef.current) {
      new ldBar(carRef.current, {
        type: "fill",
        "fill-dir": "ltr",
        fill: `data:ldbar/res,gradient(45,2,${theme.colors.accent}, ${darken(
          0.04,
          theme.colors.accent
        )})`,
        path:
          "M236.68,87.79,386,87V67A3.86,3.86,0,0,1,386,65c.45-1.76,2.22-3.1,4.48-3.5l44.11.33V55.48q23.91.65,24-.53.18-2.37-97.52-12.2l-31.58-27.1C322.19,9.38,310.4,3.79,297.34,1.41,267.26-4,241.21,16.6,234.24,22.51L218.61,33.59c-12.9.19-31.52.61-53.93,1.58C103.27,37.84.46,45.26.5,52.71.51,55.3,13,58.88,70.39,63a62.79,62.79,0,0,1,1.85,13.59,62.49,62.49,0,0,1-1.19,13.71l165.63,2.64Z",
        value: percentage,
      })
    }
  }, [carRef])
  return (
    <Container>
      <Car ref={carRef} />
      <PageParagraph>
        <Span>{((percentage * 10) | 0) / 10}%</Span> already sold.
      </PageParagraph>
    </Container>
  )
}

export default Sold
