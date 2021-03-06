import React, { useRef } from "react"
import { PageProps } from "gatsby"

import Seo from "../components/seo"
import Car from "../components/car"
import Sold from "../components/sold"

import Eth from "../components/eth"
import Hero from "../components/hero"

import Navbar from "../components/navbar"

import { Powered } from "../components/powered"
import { Sale } from "../components/sale"
import { Team } from "../components/team"
import { Footer } from "../components/footer"
import { Roadmap } from "../components/roadmap"
import { PromotionalVideo } from "../components/promotional-video"
import { Letter } from "../components/letter"

import "react-toastify/dist/ReactToastify.css"

const IndexPage: React.FC<PageProps> = () => {
  const buyRef = useRef<HTMLDivElement>()

  return (
    <>
      <Navbar />
      <Seo title="Home" />

      <Hero buyRef={buyRef} />
      <Sale />
      <Powered />
      <PromotionalVideo />
      <Letter />
      <Sold />
      <Car />
      <Eth ref={buyRef} />
      <Roadmap />
      <Team />

      <Footer />
    </>
  )
}

export default IndexPage
