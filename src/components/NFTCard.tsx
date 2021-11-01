import React, { FC } from "react"
import useSWR from "swr"
import styled from "styled-components"
import tw from "twin.macro"
import { API_URL, CONTRACT_ADDRESS, CONTRACT_CHAIN } from "../helpers/constants"
import { shortenAddress } from "../helpers/shortenAddress"
import { scanBasePath } from "../helpers/scanBasePath"
import { PageLink } from "../components/common"
import { Controls } from "./NFTControls"
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
})

const CardContainer = styled.div`
  ${tw`w-96  bg-white rounded-lg shadow-lg z-0 mx-auto`};
`

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
const NFTDescription = styled.p`
  ${tw`hover:cursor-pointer py-3 text-gray-600 leading-6`};
`

const NFTTextContainer = styled.div`
  ${tw`py-4 px-8`};
`

type NFTCardProps = { id: number; hidden?: boolean }

export const NFTCard: FC<NFTCardProps> = ({ id, hidden }) => {
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

        <NFTTextContainer>
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
          <NFTDescription>
            {data?.description ?? "No description"}
          </NFTDescription>
        </NFTTextContainer>
      </CardContainer>
      <Controls currentId={id} />
    </Container>
  )
}
