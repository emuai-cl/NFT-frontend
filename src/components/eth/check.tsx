import React, { Dispatch, FC, SetStateAction } from "react"
import styled from "styled-components"
import tw from "twin.macro"

type CheckProps = {
  agree: boolean
  setAgree: Dispatch<SetStateAction<boolean>>
}
const CheckLabel = styled.label`
  ${tw`flex items-center`};
`
const CheckInput = styled.input.attrs({
  type: "checkbox",
})``
const CheckSpan = styled.span`
  ${tw`ml-2`};
`
const CheckLink = styled.a`
  ${tw`underline`};
`
export const Check: FC<CheckProps> = ({ agree, setAgree }) => {
  return (
    <CheckLabel>
      <CheckInput
        checked={agree}
        onChange={e => setAgree(checked => !checked)}
      />
      <CheckSpan>
        I agree to the{" "}
        <CheckLink href="/terms" target="_blank">
          terms and conditions.
        </CheckLink>
      </CheckSpan>
    </CheckLabel>
  )
}
