import React, { useRef } from "react"
import { PageProps } from "gatsby"
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
import { Roadmap } from "../components/roadmap"

import "react-toastify/dist/ReactToastify.css"

const IndexPage: React.FC<PageProps> = () => {
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
      <Roadmap />
      <Team />

      <ToastContainer />
      <Footer />
    </>
  )
}

export default IndexPage
