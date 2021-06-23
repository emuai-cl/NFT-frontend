import React, { FC, useEffect, useMemo, useState } from "react"
import type IPFS from "ipfs-core/src/components"

import type { Contract } from "web3-eth-contract"
import styled from "styled-components"
import tw from "twin.macro"

import { normalize } from "eth-sig-util"

import { waitForNode } from "../helpers/waitForNode"

import "react-image-crop/dist/ReactCrop.css"
import { useQuery } from "react-query"
import { ManageNFT } from "./manage-nft"
import { axiosInstance } from "../helpers/axios"

const Spacer = styled.div`
  padding-bottom: 100px;
`

type NFTListProps = {
  contract: Contract
  node: IPFS
  hash: string
  setOpen: (open: boolean) => void
}

const loadNFTs = async (contract: Contract) => {
  const totalSupply = await contract.methods.totalSupply().call()
  const account = contract.defaultAccount
  const balanceOf = Number(await contract.methods.balanceOf(account).call())
  console.log(totalSupply, account, balanceOf)
  //   if (balanceOf == 0) return []

  const NFTs: number[] = []
  for (let i = 0; i < totalSupply; i++) {
    const id = i + 1
    const owner = await contract.methods.ownerOf(id).call()
    console.log("a", owner)

    if (normalize(owner) === normalize(account)) NFTs.push(id)

    if (NFTs.length === balanceOf) break
  }
  return NFTs
}

const NFTList: FC<NFTListProps> = ({ contract, node, setOpen, hash }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [urls, setUrls] = useState<string[]>([])

  // load owned nfts
  useEffect(() => {
    loadNFTs(contract)
      .then(val => {
        setData(val)
        setIsLoading(false)
      })
      .catch(setError)
  }, [])

  // load ipfs CID of owned nfts
  useEffect(() => {
    if (data) {
      axiosInstance
        .post<{ path: string; id: string }[]>("/nft/getNFTs", { ids: data })
        .then(response => setUrls(response.data.map(({ path, id }) => id)))
    }
  }, [data])

  if (isLoading) return <p>loading...</p>
  if (error) return <p>error...</p>
  console.log(data, urls)

  return (
    <>
      {data.map(id => (
        <ManageNFT
          key={`nft-${id}`}
          node={node}
          id={id}
          hash={hash}
          openModal={() => setOpen(true)}
        />
      ))}
    </>
  )
}

export default NFTList
