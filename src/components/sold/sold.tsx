import React, { useEffect, useRef } from "react"

import ldBar from "@loadingio/loading-bar/lib/loading-bar"
import styled from "styled-components"
import tw from "twin.macro"
import { darken } from "polished"

import { theme } from "../../styles/theme"
import { PageParagraph } from "../common"
import { CAR_PATH } from "../../constants/car.path"

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
        path: CAR_PATH,
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
