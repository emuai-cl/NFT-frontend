import React, { useEffect, useMemo, useState } from "react"
import type IPFS from "ipfs-core/src/components"

import styled from "styled-components"
import tw from "twin.macro"

import { Button, PageLink } from "../components/common"
import Navbar from "../components/navbar"

import { ManageNFT } from "../components/manage-nft"

import { useContract } from "../hooks/useContract"
import { useConnect } from "../hooks/useConnect"
import { useWeb3 } from "../hooks/useWeb3"
import { useSignNFT } from "../hooks/useSignNFT"
import { waitForNode } from "../helpers/waitForNode"

import NFTList from "../components/nft-list"
import { ImageUploadModal } from "../components/image-upload-modal"

const Spacer = styled.div`
  padding-bottom: 100px;
`

const PageContainer = styled.div`
  height: 100%;
`

const Manage = () => {
  const [hash, setHash] = useState<string>()
  const [isOpen, setOpen] = useState(false)
  const connect = useConnect()
  const contract = useContract()
  const web3 = useWeb3()
  const signNFT = useSignNFT(web3)
  const [node, setNode] = useState<IPFS>()

  useEffect(() => {
    const init = async () => {
      if (contract) {
        const TOTAL_SUPPLY = Number(await contract.methods.totalSupply().call())
        const balanceOf = Number(
          await contract.methods.balanceOf(contract.defaultAccount).call()
        )

        console.log(TOTAL_SUPPLY, balanceOf)
      }
    }
    init()
  }, [contract == undefined])

  useEffect(() => {
    waitForNode().then(setNode)
  }, [])

  const closeModal = () => setOpen(false)

  return (
    <PageContainer>
      <Navbar />
      <Spacer />
      {contract && web3 ? (
        <>
          <p>{contract.defaultAccount}</p>
          <button
            onClick={async () => {
              const hola = await signNFT("hola", 2)
              console.log(hola)
            }}
          >
            sign
          </button>
        </>
      ) : (
        <button onClick={connect}>connect</button>
      )}
      <Button onClick={() => setOpen(true)}>open modal</Button>
      {hash && (
        <>
          <p>{hash}</p>
          <PageLink
            href={`https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`}
            target="_blank"
          >
            see it
          </PageLink>
        </>
      )}
      {contract && (
        <NFTList
          contract={contract}
          node={node}
          setOpen={setOpen}
          hash={hash}
        />
      )}
      <ImageUploadModal
        isOpen={isOpen}
        closeModal={closeModal}
        node={node}
        setHash={setHash}
      />
    </PageContainer>
  )
}

export default Manage
