import React, { useState } from "react"
import loadable from "@loadable/component"
import Ellipsis from "./react-spinners-css/ellipsis"
import { theme } from "../styles/theme"

import styled from "styled-components"
import tw from "twin.macro"
import { Button, PageParagraph } from "./common"

const Container = styled.div`
  width: 100vmin;
  height: 80vmin;
  margin: auto;
  ${tw`bg-gray-100`};
  position: relative;
`
const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const CenteredText = styled(PageParagraph)`
  ${tw`text-center`};
`
const FullButton = styled(Button)`
  ${tw`w-full mt-10`};
`
const Loadable = loadable(async () => import("./car"), {
  fallback: (
    <Container>
      <InnerContainer>
        <Ellipsis color={theme.colors.accent} />
      </InnerContainer>
    </Container>
  ),
})

export default () => {
  const [load, setLoad] = useState(false)
  if (load) return <Loadable />

  const onClick = () => setLoad(true)

  return (
    <Container>
      <InnerContainer>
        <CenteredText>
          Click below two preview the car with the currrent NFTs.
        </CenteredText>
        <CenteredText>
          Keep in mind that it is updated every 1 hour.
        </CenteredText>
        <FullButton onClick={onClick}>Load model</FullButton>
      </InnerContainer>
    </Container>
  )
}
