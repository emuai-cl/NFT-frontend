import React from "react"

import styled from "styled-components"
import tw from "twin.macro"
import { SubtitleWithLine } from "./subtitle-with-line"
import YoutubeEmbed from "./youtube"

const VideoContainer = styled.div`
  ${tw`w-96 lg:w-2/4 mx-auto`};
`

export const PromotionalVideo: React.FC = () => {
  return (
    <>
      <SubtitleWithLine color="#444">Promotional video</SubtitleWithLine>
      <VideoContainer>
        <YoutubeEmbed embedId="gJSM7a8bU3k" />
      </VideoContainer>
    </>
  )
}
