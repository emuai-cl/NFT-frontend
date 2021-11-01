import React, { FC, useEffect, useState } from "react"
import type IPFS from "ipfs-core/src/components"

import type { Contract } from "web3-eth-contract"
import styled from "styled-components"
import tw from "twin.macro"

import { normalize } from "eth-sig-util"

import { ManageNFT } from "./manage-nft"
import { axiosInstance } from "../helpers/axios"

import "react-image-crop/dist/ReactCrop.css"

const Container = styled.div`
  ${tw`grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-center p-4`};
`
const FALLBACK_CID = "QmUwtG6Q1zPLWd4rfk5RyQCE35wJK3CVXXnDWHyiKbNUvA"

type NFTListProps = {
  contract: Contract
  node: IPFS
  setOpen: (open: boolean) => void
}

const loadNFTs = async (contract: Contract) => {
  const totalSupply = await contract.methods.totalSupply().call()
  const account = contract.defaultAccount
  const balanceOf = Number(await contract.methods.balanceOf(account).call())

  const NFTs: number[] = []
  for (let i = 0; i < totalSupply; i++) {
    if (NFTs.length === balanceOf) break
    const id = i + 1
    const owner = await contract.methods.ownerOf(id).call()

    if (normalize(owner) === normalize(account)) NFTs.push(id)
  }
  return NFTs
}

const NFTList: FC<NFTListProps> = ({ contract, node, setOpen }) => {
  const [ids, setIds] = useState<(number | string)[]>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [urls, setUrls] = useState<{ id: string | number; cid: string }[]>(null)

  // load owned nfts
  useEffect(() => {
    loadNFTs(contract)
      .then(val => {
        setIds(val)
        setIsLoading(false)
      })
      .catch(setError)
  }, [])

  // load ipfs CID of owned nfts
  useEffect(() => {
    if (ids) {
      axiosInstance
        .post<{ path: string; id: string }[]>("/nft/getNFTs", {
          ids,
        })
        .then(response => {
          const resolved = ids.map(nft => {
            const cid =
              (response.data ?? []).find(({ id }) => id == nft)?.path ??
              FALLBACK_CID
            return { id: nft, cid }
          })

          setUrls(resolved)
        })
    }
  }, [ids])

  if (error) return <p>error: {JSON.stringify(error)}</p>
  if (isLoading) return <p>loading...</p>

  return (
    <Container>
      {(urls ?? []).map(({ id, cid }) => (
        <ManageNFT
          key={`nft-${id}`}
          node={node}
          id={Number(id)}
          cid={cid}
          openModal={() => setOpen(true)}
        />
      ))}
    </Container>
  )
}

export default NFTList
