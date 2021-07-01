import React from "react"
import type IPFS from "ipfs-core/src/components"

import styled from "styled-components"
import tw from "twin.macro"

import { Button } from "./common"

import { useWeb3 } from "../hooks/useWeb3"
import { useSignNFT } from "../hooks/useSignNFT"

import "react-image-crop/dist/ReactCrop.css"
import { LazyImage } from "./lazy-image"

const NFTCard = styled.div`
  ${tw`shadow-md p-4 bg-white rounded`};
`

type ManageNFTProps = {
  node: IPFS
  id: number
  openModal: () => void
  hash: string
}

export const ManageNFT: React.FC<ManageNFTProps> = ({
  node,
  id,
  openModal,
  hash,
}) => {
  const web3 = useWeb3()
  const signNFT = useSignNFT(web3)

  const onClick = async () => {
    const signature = await signNFT(hash, id)
  }

  return (
    <NFTCard>
      <LazyImage
        height={150}
        width={150}
        source={`https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`}
      />
      <Button onClick={openModal}>open modal</Button>

      <Button onClick={onClick}>Confirm</Button>
    </NFTCard>
  )
}
