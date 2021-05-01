import React from "react"

import dayjs from "dayjs"
import styled from "styled-components"
import tw from "twin.macro"

const FooterContainer = styled.div`
  ${tw`w-full py-2 mb-0 text-white text-center`};
  ${({ theme }) => theme.backgrounds.accent};
`

type FooterProps = {
  buildTime: string
}

export const Footer: React.FC<FooterProps> = ({ buildTime }) => {
  return (
    <FooterContainer>
      Updated on {dayjs(buildTime).format("MMMM D, YYYY")}
    </FooterContainer>
  )
}
