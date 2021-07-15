import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { PageSubtitle } from "./common"

type SubtitleWithLineProps = {
  color?: string
}
const StyledPageSubtitle = styled(PageSubtitle)<SubtitleWithLineProps>`
  ${tw`flex items-center justify-center`};
  color: ${({ color }) => color};
`
const StyledSpan = styled.span<SubtitleWithLineProps>`
  ${tw`h-1 w-20 block mt-2 mx-auto mb-10`}
  background-color: ${({ color }) => color};
`
export const SubtitleWithLine: React.FC<SubtitleWithLineProps> = ({
  children,
  color = "white",
}) => (
  <>
    <StyledPageSubtitle color={color}>{children}</StyledPageSubtitle>
    <StyledSpan color={color} />
  </>
)
