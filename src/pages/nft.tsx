import React, { useMemo } from "react"
import { Link, PageProps } from "gatsby"

import useSWR from "swr"

import Navbar from "../components/navbar"
import Seo from "../components/seo"
import { HeroTitle } from "../components/HeroTitle"
import styled from "styled-components"
import tw from "twin.macro"
import axios from "axios"
import { API_URL, CONTRACT_ADDRESS, CONTRACT_CHAIN } from "../helpers/constants"
import { shortenAddress } from "../helpers/shortenAddress"
import { scanBasePath } from "../helpers/scanBasePath"
import { PageLink } from "../components/common"

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

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
})

const NFTImage = styled.img`
  ${tw`rounded-t-lg w-96 h-96`};
`

const NFTCard = ({ id, hidden }: { id: number; hidden?: boolean }) => {
  const { data, error } = useSWR(["nft/metadata", id], async (url, id) => {
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
        <NFTImage
          src={`https://ipfs.io/ipfs/${data?.path}`}
          alt={`EMU #${id}`}
        />

        <div className="py-4 px-8">
          <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
            EMU #{id}
          </h1>
          <p className="hover:cursor-pointer py-3 text-gray-600 leading-6 font-bold">
            Owner:{" "}
            <PageLink
              href={`${scanBasePath(CONTRACT_CHAIN)}/${CONTRACT_ADDRESS}?a=${
                data?.owner
              }`}
              target="_blank"
            >
              {shortenAddress(data?.owner) ?? "No description"}
            </PageLink>
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
