import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

export const Container = styled.div`
  ${tw`mx-auto`};
`

export const Controls = ({ currentId }: { currentId: number }) => {
  return (
    <Container>
      {currentId > 1 && <Link to={`/nft?id=${currentId - 1}`}>previous</Link>}
      {currentId < 5940 && <Link to={`/nft?id=${currentId + 1}`}>next</Link>}
    </Container>
  )
}
