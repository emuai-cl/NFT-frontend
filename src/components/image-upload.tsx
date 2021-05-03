import React, { useCallback, useEffect, useRef, useState } from "react"
import type IPFS from "ipfs-core/src/components"
import ReactCrop from "react-image-crop"
import styled from "styled-components"

import { upload } from "../helpers/resizeCanvas"
import { FileUpload } from "./file-upload"

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

type ImageUploadProps = {
  setHash: React.Dispatch<React.SetStateAction<string>>
  node: IPFS
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ setHash, node }) => {
  const [upImg, setUpImg] = useState<string | ArrayBuffer>()
  const imgRef = useRef(null)
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 })

  const [completedCrop, setCompletedCrop] = useState(null)

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

  return (
    <>
      <FileUpload onChange={onSelectFile} />

      <button
        type="button"
        disabled={!completedCrop?.width || !completedCrop?.height}
        onClick={onClick}
      >
        Download cropped image
      </button>
      <Canvas ref={previewCanvasRef} />
      <Container>
        <StyledReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={c => setCrop(c)}
          onComplete={c => setCompletedCrop(c)}
        />
      </Container>
    </>
  )
}