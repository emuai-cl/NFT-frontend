import React, { FC } from "react"
import styled from "styled-components"

type YoutubeEmbed = {
  embedId: string
}

const VideoContainer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
`
const VideoIframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`

const YoutubeEmbed: FC<YoutubeEmbed> = ({ embedId }) => (
  <VideoContainer>
    <VideoIframe
      loading="lazy"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoContainer>
)

export default YoutubeEmbed
