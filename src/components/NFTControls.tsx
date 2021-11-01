import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"
import { Button } from "./common"

const Container = styled.div`
  ${tw`flex justify-center mx-auto px-16`};
`

const Control = styled(Button)`
  ${tw`px-10 m-4`};
`

export const Controls = ({ currentId }: { currentId: number }) => {
  return (
    <Container>
      {currentId > 1 && (
        <Control as={Link} to={`/nft?id=${currentId - 1}`}>
          previous
        </Control>
      )}
      {currentId < 5940 && (
        <Control as={Link} to={`/nft?id=${currentId + 1}`}>
          next
        </Control>
      )}
    </Container>
  )
}
