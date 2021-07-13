import React from "react"

import YouTube from "react-youtube"

import styled from "styled-components"
import tw from "twin.macro"

const Video = styled(YouTube)`
  ${tw`mx-auto`};
`

export const PromotionalVideo: React.FC = () => {
  return <Video videoId="gJSM7a8bU3k" />
}
