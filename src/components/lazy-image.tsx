import React, { FC } from "react"

type ImageUploadModalProps = {
  source: string
}

export const LazyImage: FC<ImageUploadModalProps> = ({ source }) => {
  return (
    <div>
      <img src={source} />
    </div>
  )
}
