import * as React from "react"

import styled from "styled-components"
import tw from "twin.macro"

import SEO from "../components/seo"
import NotFound from "../components/lottie/404"
import Navbar from "../components/navbar"
import { Footer } from "../components/footer"

const Container = styled.div`
  ${tw`p-10 shadow-lg w-min mx-auto my-10`};
`

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />

    <Navbar />
    <Container>
      <NotFound />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
    <Footer />
  </>
)

export default NotFoundPage
