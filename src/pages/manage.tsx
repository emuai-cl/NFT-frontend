import React, { useEffect, useState } from "react"
import type IPFS from "ipfs-core/src/components"

import styled from "styled-components"
import tw from "twin.macro"

import { PageLink } from "../components/common"
import Navbar from "../components/navbar"

import { ImageUpload } from "../components/image-upload"
import { CustomModal } from "../components/modal"

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

  const [node, setNode] = useState<IPFS>()

  useEffect(() => {
    if (!node)
      import("ipfs").then(Ipfs => Ipfs.create().then(node => setNode(node)))

    return () => node?.stop() && null
  }, [node])

  const closeModal = () => setOpen(false)

  return (
    <>
      <Navbar />
      <Spacer />

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
        <ImageUpload node={node} setHash={setHash} />
      </CustomModal>
    </>
  )
}

export default Manage
