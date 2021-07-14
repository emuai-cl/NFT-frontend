import React from "react"
import type IPFS from "ipfs-core/src/components"
import { toast } from "react-toastify"

import styled from "styled-components"
import tw from "twin.macro"
import { darken } from "polished"

import {
  CancelButton,
  ConfirmButton,
  FullButton,
  GroupContainer,
} from "./common"

import { useWeb3 } from "../hooks/useWeb3"
import { useSignNFT } from "../hooks/useSignNFT"

import { LazyImage } from "./lazy-image"
import { useHash } from "../hooks/useHash"
import { useSetHash } from "../hooks/useSetHash"
import { useEditing } from "../hooks/useEditing"
import { useSetEditing } from "../hooks/useSetEditing"
import { useCallback } from "react"
import { axiosInstance } from "../helpers/axios"
import { MdEdit } from "react-icons/md"
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

import "react-image-crop/dist/ReactCrop.css"

const NFTCard = styled.div`
  ${tw`shadow-md p-4 bg-white rounded`};
`

const StyledImage = styled(LazyImage)`
  ${tw`mx-auto my-4`};
`
const EditIcon = styled(MdEdit)`
  ${tw`fill-current w-4 h-4 mr-2`};
`
const ConfirmIcon = styled(AiOutlineCheck)`
  ${tw`fill-current w-4 h-4 mr-2`};
`

const CancelIcon = styled(AiOutlineClose)`
  ${tw`fill-current w-4 h-4 mr-2`};
`

const NFTTitle = styled.h2`
  ${tw`text-center font-bold`};
  color: ${({ theme }) => darken(0.2, theme.colors.accent)};
`

type ManageNFTProps = {
  node: IPFS
  id: number
  openModal: () => void
  cid: string
}

export const ManageNFT: React.FC<ManageNFTProps> = ({ id, openModal, cid }) => {
  const web3 = useWeb3()
  const signNFT = useSignNFT(web3)

  const hash = useHash()
  const editingID = useEditing()
  const setEditing = useSetEditing()
  const setHash = useSetHash()

  const onClick = useCallback(async () => {
    try {
      const signature = await signNFT(hash, id)

      const { data } = await axiosInstance.post("/nft/updateNFT", {
        path: hash,
        id,
        signature,
      })

      toast.success(`${JSON.stringify(data)} EMUS Minted`)
    } catch (error) {
      toast.error(`Error: ${error.message}`)
    }
  }, [hash, id])

  const handleEdit = useCallback(() => {
    setEditing(id)
    openModal()
  }, [id])

  const handleCancel = useCallback(() => {
    setEditing(null)
    setHash(null)
  }, [])
  return (
    <NFTCard>
      <NFTTitle>{`EMU: #${id}`}</NFTTitle>
      <StyledImage
        height={150}
        width={150}
        source={`https://ipfs.infura.io:5001/api/v0/cat?arg=${
          editingID === id && hash ? hash : cid
        }`}
      />
      {editingID === id ? (
        <GroupContainer>
          <CancelButton onClick={handleCancel}>
            <CancelIcon /> <span>Cancel</span>
          </CancelButton>
          <ConfirmButton onClick={onClick}>
            <ConfirmIcon />
            <span>Confirm</span>
          </ConfirmButton>
        </GroupContainer>
      ) : (
        <FullButton onClick={handleEdit}>
          <EditIcon />
          <span>Edit</span>
        </FullButton>
      )}
    </NFTCard>
  )
}
