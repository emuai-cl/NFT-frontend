import React from "react"
import EthereumAnimation from "./lottie/ethereum"

import styled from "styled-components"
import tw from "twin.macro"
import { Accent, PageParagraph, PageSubtitle } from "./common"

const Container = styled.div`
  ${tw`grid lg:grid-cols-3 grid-cols-1`};
`

export const Powered = () => {
  return (
    <Container>
      <div />
      <div>
        <PageSubtitle>
          Powered by <Accent>Ethereum</Accent>
        </PageSubtitle>
        <PageParagraph>
          This Non Fungible Token will fund a real project thanks to the
          Ethereum Blockchain.
        </PageParagraph>
      </div>
      <div>
        <EthereumAnimation />
      </div>
    </Container>
  )
}
