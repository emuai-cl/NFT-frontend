import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"
import { PageLink } from "./common"

export const Container = styled.div`
  ${tw`mx-auto`};
`

export const Controls = ({ currentId }: { currentId: number }) => {
  return (
    <Container>
      {currentId > 1 && (
        <PageLink as={Link} to={`/nft?id=${currentId - 1}`}>
          previous
        </PageLink>
      )}
      {currentId < 5940 && (
        <PageLink as={Link} to={`/nft?id=${currentId + 1}`}>
          next
        </PageLink>
      )}
    </Container>
  )
}
