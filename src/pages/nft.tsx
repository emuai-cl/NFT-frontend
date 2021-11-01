import React, { useMemo } from "react"
import { Link, PageProps } from "gatsby"

import useSWR from "swr"
import { axiosInstance } from "../helpers/axios"

import Navbar from "../components/navbar"
import Seo from "../components/seo"
import { HeroTitle } from "../components/HeroTitle"
import styled from "styled-components"
import tw from "twin.macro"

type Location = PageProps["location"]

const useID = (location: Location) => {
  const id = useMemo(() => {
    const searchParams = new URLSearchParams(location.search)
    return Number(searchParams.get("id"))
  }, [location])
  return id
}

const CardContainer = styled.div`
  ${tw`w-96  bg-white rounded-lg shadow-lg z-0 mx-auto`};
`

const Container = styled.div`
  ${tw`mx-auto`};
`

const Controls = ({ currentId }: { currentId: number }) => {
  return (
    <Container>
      {currentId > 1 && <Link to={`/nft?id=${currentId - 1}`}>previous</Link>}
      {currentId < 5940 && <Link to={`/nft?id=${currentId + 1}`}>next</Link>}
    </Container>
  )
}

const NFTCard = ({ id, hidden }: { id: number; hidden?: boolean }) => {
  const { data, error } = useSWR(["nft/metadata", id], async (url, key) => {
    const response = await axiosInstance.get(`${url}/${id}`)
    return response?.data
  })

  if (hidden) return null

  if (error)
    return (
      <CardContainer>
        <h1>NFT not found</h1>
      </CardContainer>
    )

  return (
    <Container>
      <CardContainer>
        <img
          className="rounded-t-lg w-96 h-64"
          src={`https://ipfs.io/ipfs/${data?.path}`}
          alt={`EMU #${id}`}
        />

        <div className="py-4 px-8">
          <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
            EMU #{id}
          </h1>
          <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
            {data?.owner ?? "No description"}
          </p>
          <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
            {data?.description ?? "No description"}
          </p>
        </div>
      </CardContainer>
      <Controls currentId={id} />
    </Container>
  )
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
