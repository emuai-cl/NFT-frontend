import React, { useMemo } from "react"
import { PageProps } from "gatsby"

import Navbar from "../components/navbar"
import Seo from "../components/seo"
import { HeroTitle } from "../components/HeroTitle"

import { NFTCard } from "../components/NFTCard"

type Location = PageProps["location"]

const useID = (location: Location) => {
  const id = useMemo(() => {
    const searchParams = new URLSearchParams(location.search)
    return Number(searchParams.get("id"))
  }, [location])
  return id
}

const NFTPage = (props: PageProps) => {
  const id = useID(props.location)

  return (
    <>
      <Navbar />
      <Seo title="Home" />
      <HeroTitle>EMU #{id}</HeroTitle>

      {id < 5940 && <NFTCard id={id + 1} hidden />}
      <NFTCard id={id} />
    </>
  )
}
export default NFTPage
