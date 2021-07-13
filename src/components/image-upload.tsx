import React, { useCallback, useEffect, useRef, useState } from "react"
import type IPFS from "ipfs-core/src/components"
import ReactCrop from "react-image-crop"
import styled from "styled-components"
import tw from "twin.macro"

import { upload } from "../helpers/resizeCanvas"
import { FileUpload } from "./file-upload"
import {
  Accent,
  Button,
  GroupContainer,
  CancelButton,
  ConfirmButton,
} from "./common"
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

import "react-image-crop/dist/ReactCrop.css"
import { useSetEditing } from "../hooks/useSetEditing"

const StyledReactCrop = styled(ReactCrop)`
  max-height: 100%;
`
const Canvas = styled.canvas`
  height: 100px;
  width: 100px;
`

const Container = styled.div`
  max-width: 45vmin;
  max-height: 45vmin;
`

const ConfirmIcon = styled(AiOutlineCheck)`
  ${tw`fill-current w-4 h-4 mr-2`};
`

const CancelIcon = styled(AiOutlineClose)`
  ${tw`fill-current w-4 h-4 mr-2`};
`

type ImageUploadProps = {
  setHash: (hash: string) => void
  node: IPFS
  onCancel?: () => void
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  setHash,
  node,
  onCancel,
}) => {
  const [upImg, setUpImg] = useState<string | ArrayBuffer>()
  const imgRef = useRef(null)
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 })

  const [completedCrop, setCompletedCrop] = useState(null)
  const setEditing = useSetEditing()

  const onSelectFile: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener("load", () => setUpImg(reader.result))
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const onLoad = useCallback(img => {
    imgRef.current = img
  }, [])

  useEffect(() => {
    const image = imgRef.current
    const canvas = previewCanvasRef.current

    if (!completedCrop || !canvas || !image) {
      return
    }

    const crop = completedCrop

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    const ctx = canvas.getContext("2d")
    const pixelRatio = window.devicePixelRatio

    canvas.width = crop.width * pixelRatio
    canvas.height = crop.height * pixelRatio

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    ctx.imageSmoothingQuality = "high"

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )
  }, [completedCrop])

  const onClick = async () => {
    if (!completedCrop || !previewCanvasRef.current) return
    const hash = await upload(previewCanvasRef.current, node)
    console.log(hash)
    setHash(hash)
  }
  const handleCancel = () => {
    onCancel()
    setHash(null)
    setEditing(null)
  }
  return (
    <>
      <FileUpload onChange={onSelectFile} />
      <Accent>Preview:</Accent>
      <Canvas ref={previewCanvasRef} />
      <Container>
        <StyledReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={setCrop}
          onComplete={setCompletedCrop}
        />
        <GroupContainer>
          <CancelButton onClick={handleCancel}>
            <CancelIcon /> <span>Cancel</span>
          </CancelButton>
          <ConfirmButton
            disabled={!completedCrop?.width || !completedCrop?.height}
            onClick={onClick}
          >
            <ConfirmIcon />
            <span>Confirm</span>
          </ConfirmButton>
        </GroupContainer>
      </Container>
    </>
  )
}
