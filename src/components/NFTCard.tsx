import React from "react"
import useSWR from "swr"
import styled from "styled-components"
import tw from "twin.macro"
import { API_URL, CONTRACT_ADDRESS, CONTRACT_CHAIN } from "../helpers/constants"
import { shortenAddress } from "../helpers/shortenAddress"
import { scanBasePath } from "../helpers/scanBasePath"
import { PageLink } from "../components/common"
import { Controls } from "./NFTControls"
import axios from "axios"

const CardContainer = styled.div`
  ${tw`w-96  bg-white rounded-lg shadow-lg z-0 mx-auto`};
`

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
})

const Container = styled.div`
  ${tw`mx-auto`};
`
const NFTImage = styled.img`
  ${tw`rounded-t-lg w-96 h-96`};
`

const NFTTitle = styled.h1`
  ${tw`hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight`};
`

const NFTOwner = styled.p`
  ${tw`hover:cursor-pointer py-3 text-gray-600 leading-6 font-bold`};
`
export const NFTCard = ({ id, hidden }: { id: number; hidden?: boolean }) => {
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
          <NFTTitle>EMU #{id}</NFTTitle>
          <NFTOwner>
            Owner:{" "}
            <PageLink
              href={`${scanBasePath(CONTRACT_CHAIN)}/${CONTRACT_ADDRESS}?a=${
                data?.owner
              }`}
              target="_blank"
            >
              {shortenAddress(data?.owner) ?? "No description"}
            </PageLink>
          </NFTOwner>
          <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
            {data?.description ?? "No description"}
          </p>
        </div>
      </CardContainer>
      <Controls currentId={id} />
    </Container>
  )
}
