import styled from "styled-components"
import tw from "twin.macro"

export const PageTitle = styled.h1`
  ${tw`font-extrabold text-4xl uppercase text-gray-800 text-center mb-5`};
`
export const PageSubtitle = styled.h2`
  ${tw`font-bold text-2xl text-gray-700 mb-3`};
`
export const PageParagraph = styled.p`
  ${tw`font-normal text-gray-700`};
`
export const PageLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
`

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`
