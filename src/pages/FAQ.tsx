import React from "react"
import Slide from "react-reveal/Slide"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import tw from "twin.macro"

import Navbar from "../components/navbar"
import {
  PageTitle,
  PageSubtitle,
  PageParagraph,
  PageLink,
} from "../components/common"

const Container = styled.div`
  ${tw`container mx-auto min-h-screen pt-40`};
`

const StyledPageSubtitle = styled(PageSubtitle)`
  ${tw`flex items-center justify-center`}
`

const StyledPageParagraph = styled(PageParagraph)`
  ${tw`mx-8 flex items-center justify-self-stretch`}
`
const FAQ: React.FC<{}> = () => {
  return (
    <Container>
      <Navbar />
      <Slide top>
        <PageTitle>Frequently Asked Questions</PageTitle>
      </Slide>
    </Container>
  )
}

export default FAQ
