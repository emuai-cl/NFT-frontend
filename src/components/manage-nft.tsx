import React, { useEffect, useState } from "react"
import type IPFS from "ipfs-core/src/components"

import styled from "styled-components"
import tw from "twin.macro"

import { Button, PageLink } from "./common"
import Navbar from "./navbar"

import { ImageUpload } from "./image-upload"
import { CustomModal } from "./modal"

import { useContract } from "../hooks/useContract"
import { useConnect } from "../hooks/useConnect"
import { useWeb3 } from "../hooks/useWeb3"
import { useSignNFT } from "../hooks/useSignNFT"

import "react-image-crop/dist/ReactCrop.css"
import { LazyImage } from "./lazy-image"

const Spacer = styled.div`
  padding-bottom: 100px;
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
    <>
      <Navbar />
      <Spacer />

      <Button onClick={openModal}>open modal</Button>
      {hash && (
        <>
          <p>{hash}</p>
          <LazyImage
            source={`https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`}
          />
          <PageLink
            href={`https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`}
            target="_blank"
          >
            see it
          </PageLink>
        </>
      )}
      <Button onClick={onClick}>Confirm</Button>
    </>
  )
}
