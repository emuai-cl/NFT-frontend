import React from "react"
import EthereumAnimation from "./lottie/ethereum"

import styled from "styled-components"
import tw from "twin.macro"
import {
  Accent,
  PageLink,
  PageParagraph,
  PageSubtitle,
  Container,
} from "./common"

export const Powered = () => {
  return (
    <Container>
      <div />
      <div>
        <PageSubtitle>
          Powered by <Accent>Ethereum</Accent>
        </PageSubtitle>
        <PageParagraph>
          This an{" "}
          <PageLink
            href="https://eips.ethereum.org/EIPS/eip-721"
            target="_blank"
          >
            ERC-721
          </PageLink>{" "}
          Non Fungible Token (NFT) that will directly fund the our solar car.
          Moreover, each NFT owner will have the ability to add any 100x100
          picture he likes directly on our car!.
        </PageParagraph>
      </div>
      <div>
        <EthereumAnimation />
      </div>
    </Container>
  )
}
