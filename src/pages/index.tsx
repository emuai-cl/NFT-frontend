import React, { useRef } from "react"
import { graphql, PageProps } from "gatsby"
import { ToastContainer } from "react-toastify"

import Seo from "../components/seo"
import Car from "../components/load-car"
import Sold from "../components/sold"

import Eth from "../components/eth"
import Hero from "../components/hero"

import Navbar from "../components/navbar"

import { Powered } from "../components/powered"
import { Sale } from "../components/sale"
import { Team } from "../components/team"
import { Footer } from "../components/footer"

import "react-toastify/dist/ReactToastify.css"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const buyRef = useRef<HTMLDivElement>()

  return (
    <>
      <Navbar />
      <Seo title="Home" />

      <Hero buyRef={buyRef} />
      <Sale />
      <Sold />
      <Powered />
      <Car />
      <Eth ref={buyRef} />

      <Team />

      <ToastContainer />
      <Footer buildTime={data.site.buildTime} />
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime
    }
  }
`
