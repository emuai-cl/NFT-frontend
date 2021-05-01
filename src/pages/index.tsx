import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { ToastContainer } from "react-toastify"

import Seo from "../components/seo"
import Car from "../components/car"
import Eth from "../components/eth"
import Hero from "../components/hero"

import Navbar from "../components/navbar"

import "react-toastify/dist/ReactToastify.css"
import { Powered } from "../components/powered"
import { Sale } from "../components/sale"
import { Team } from "../components/team"
import { Footer } from "../components/footer"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <>
    <Navbar />
    <Seo title="Home" />

    <Hero />
    <Sale />

    <Powered />
    <Eth />
    {/* <Car /> */}
    <Team />

    <ToastContainer />
    <Footer buildTime={data.site.buildTime} />
  </>
)

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime
    }
  }
`
