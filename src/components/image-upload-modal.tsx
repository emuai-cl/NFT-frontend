import React, { FC } from "react"
import IPFS from "ipfs-core/src/components"
import { ImageUpload } from "./image-upload"
import { CustomModal } from "./modal"

type ImageUploadModalProps = {
  isOpen: boolean
  closeModal: () => void
  node: IPFS
  setHash: React.Dispatch<React.SetStateAction<string>>
}
export const ImageUploadModal: FC<ImageUploadModalProps> = ({
  isOpen,
  closeModal,
  node,
  setHash,
}) => {
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
