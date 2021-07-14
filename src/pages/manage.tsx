import React, { useEffect, useState } from "react"
import type IPFS from "ipfs-core/src/components"

import styled from "styled-components"

import { Button } from "../components/common"
import Navbar from "../components/navbar"

import { useContract } from "../hooks/useContract"
import { useConnect } from "../hooks/useConnect"
import { useWeb3 } from "../hooks/useWeb3"
import { waitForNode } from "../helpers/waitForNode"

import NFTList from "../components/nft-list"
import { ImageUploadModal } from "../components/image-upload-modal"
import { Footer } from "../components/footer"
import { HeroTitle } from "../components/HeroTitle"

const Spacer = styled.div`
  padding-bottom: 100px;
`

const PageContainer = styled.div`
  min-height: 80vh;
`

const Manage = () => {
  const [isOpen, setOpen] = useState(false)
  const connect = useConnect()
  const contract = useContract()
  const web3 = useWeb3()
  const [node, setNode] = useState<IPFS>()

  useEffect(() => {
    waitForNode().then(setNode)
  }, [])

  const closeModal = () => setOpen(false)

  return (
    <>
      <PageContainer>
        <Navbar />
        <HeroTitle>Manage your NFTs</HeroTitle>

        <Spacer />
        {(!contract || !web3) && (
          <Button onClick={connect}>connect wallet</Button>
        )}

        {contract && (
          <NFTList contract={contract} node={node} setOpen={setOpen} />
        )}
        <ImageUploadModal isOpen={isOpen} closeModal={closeModal} node={node} />
      </PageContainer>
      <Footer />
    </>
  )
}

export default Manage
