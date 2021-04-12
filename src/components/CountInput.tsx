import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`h-10 w-32 my-5`};
`
const Label = styled.label`
  ${tw`w-full text-gray-700 text-sm font-semibold`};
`

const ButtonGroup = styled.div`
  ${tw`flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1`};
`

const Button = styled.button`
  ${tw`bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none`};
`

const Span = styled.span`
  ${tw`m-auto text-2xl font-thin`}
`

const Input = styled.input`
  ${tw`outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold hover:text-black focus:text-black   flex items-center text-gray-700  outline-none`}
`

type CountInputProps = {
  value: number
  onDecrement: () => void
  onIncrement: () => void
}

const CountInput: React.FC<CountInputProps> = ({
  onDecrement,
  onIncrement,
  value,
}) => {
  return (
    <Container>
      <Label htmlFor="custom-input-number">Tokens</Label>
      <ButtonGroup>
        <Button onClick={onDecrement}>
          <Span>−</Span>
        </Button>
        <Input type="number" name="custom-input-number" value={value || 0} />
        <Button onClick={onIncrement}>
          <Span>+</Span>
        </Button>
      </ButtonGroup>
    </Container>
  )
}
export default CountInput
