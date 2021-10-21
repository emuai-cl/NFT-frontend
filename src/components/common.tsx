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
export const Button = styled.button`
  ${tw`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white`};
  ${({ theme }) => theme.backgrounds.accent};
  ${({ theme }) => theme.backgrounds.hoverAccent};
  ${({ theme }) => theme.backgrounds.focusAccent};
`

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`

export const GroupContainer = styled.div`
  ${tw`inline-flex w-full`}
`

export const FullButton = styled(Button)`
  ${tw`w-full mx-1`};
`
export const ConfirmButton = styled(FullButton)`
  ${tw`bg-green-500 hover:bg-green-600`};
`
export const CancelButton = styled(FullButton)`
  ${tw`bg-red-500 hover:bg-red-600`};
`

export const Container = styled.div`
  ${tw`grid lg:grid-cols-3 grid-cols-1 mx-4`};
`
export const LetterContainer = styled.div`
  ${tw`grid lg:grid-cols-5 mx-4`};
`
