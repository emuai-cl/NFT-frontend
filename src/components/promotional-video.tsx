import React from "react"

import YouTube from "react-youtube"

import styled from "styled-components"
import tw from "twin.macro"
import { SubtitleWithLine } from "./subtitle-with-line"

const Video = styled(YouTube)`
  ${tw`mx-auto`};
`

export const PromotionalVideo: React.FC = () => {
  return (
    <>
      <SubtitleWithLine color="#444">Promotional video</SubtitleWithLine>
      <Video videoId="gJSM7a8bU3k" />
    </>
  )
}
