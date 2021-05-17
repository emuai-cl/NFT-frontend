import React, { useEffect, useState } from "react"
import type IPFS from "ipfs-core/src/components"

import styled from "styled-components"
import tw from "twin.macro"

import { PageLink } from "../components/common"
import Navbar from "../components/navbar"

import { ImageUpload } from "../components/image-upload"
import { CustomModal } from "../components/modal"

import { useContract } from "../hooks/useContract"
import { useConnect } from "../hooks/useConnect"
import { useWeb3 } from "../hooks/useWeb3"
import { useSignNFT } from "../hooks/useSignNFT"
import { waitForNode } from "../helpers/waitForNode"

import "react-image-crop/dist/ReactCrop.css"

const Spacer = styled.div`
  padding-bottom: 100px;
`

const Button = styled.button`
  ${tw`px-10 py-4 rounded shadow text-white uppercase font-bold`};
  ${({ theme }) => theme.backgrounds.accent};
  ${({ theme }) => theme.backgrounds.hoverAccent};
  ${({ theme }) => theme.backgrounds.focusAccent};
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
    waitForNode().then(setNode)
  }, [])

  const closeModal = () => setOpen(false)

  return (
    <>
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
      <CustomModal isOpen={isOpen} closeModal={closeModal}>
        <ImageUpload
          node={node}
          setHash={hash => {
            setHash(hash)
            closeModal()
          }}
        />
      </CustomModal>
    </>
  )
}

export default Manage
