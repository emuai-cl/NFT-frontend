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
          We are a Solar Racecar Team that wants to change how funding is done.
          We give you the opportunity to buy space on our solar car's surface where
          you can put an image of your choice. Each 1.5 x 1.5 cm square will be an {" "}
          <PageLink
            href="https://eips.ethereum.org/EIPS/eip-721"
            target="_blank"
          >
            ERC-721
          </PageLink>{" "}
          Non Fungible Token (NFT) that will directly fund our solar car.
          Moreover, each NFT owner will have the ability to add any 100x100
          picture he likes directly on our car!
        </PageParagraph>
      </div>
      <div>
        <EthereumAnimation />
      </div>
    </Container>
  )
}
