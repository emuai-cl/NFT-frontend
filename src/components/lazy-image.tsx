import React, { FC, useState } from "react"
import Skeleton from "react-loading-skeleton"

type ImageUploadModalProps = {
  source: string
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

const FALLBACK_SOURCE =
  "https://github.com/make-github-pseudonymous-again/pixels/raw/main/1x1%23000000.png"

export const LazyImage: FC<ImageUploadModalProps> = ({ source, ...props }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const onError = () => {
    setLoading(false)
    setError(true)
  }

  const onLoad = () => {
    setLoading(false)
  }

  return (
    <div>
      {loading && <Skeleton height={props.height} width={props.width} />}
      <img
        {...props}
        style={loading ? { display: "none" } : props.style ?? {}}
        src={!error ? source : FALLBACK_SOURCE}
        onError={onError}
        onLoad={onLoad}
      />
    </div>
  )
}
