import React, { FC } from "react"
import IPFS from "ipfs-core/src/components"
import { ImageUpload } from "./image-upload"
import { CustomModal } from "./modal"
import { useSetHash } from "../hooks/useSetHash"

type ImageUploadModalProps = {
  isOpen: boolean
  closeModal: () => void
  node: IPFS
}
export const ImageUploadModal: FC<ImageUploadModalProps> = ({
  isOpen,
  closeModal,
  node,
}) => {
  const setHash = useSetHash()
  return (
    <CustomModal isOpen={isOpen} closeModal={closeModal}>
      <ImageUpload
        node={node}
        setHash={hash => {
          setHash(hash)
          closeModal()
        }}
        onCancel={closeModal}
      />
    </CustomModal>
  )
}
