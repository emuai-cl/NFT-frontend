import React from "react"
import ReactTypingEffect from "react-typing-effect"
import dayjs from "dayjs"
import styled from "styled-components"
import tw from "twin.macro"

import relativeTime from "dayjs/plugin/relativeTime"

import { SALE_END, SALE_START } from "../helpers/constants"

const H1 = styled(ReactTypingEffect)`
  ${tw`text-gray-700 font-bold text-3xl uppercase text-center `};
`
const Container = styled.div`
  ${tw`flex justify-center mx-auto mb-40`}
`

dayjs.extend(relativeTime)

const startDate = dayjs.unix(SALE_START)
const endDate = dayjs.unix(SALE_END)

export const Sale = () => {
  return (
    <Container>
      <H1
        speed={50}
        text={[
          `Sale starts ${startDate.fromNow()}`,
          `Sale ends ${endDate.fromNow()}`,
        ]}
        //   displayTextRenderer={text => <H1>{text}</H1>}
      />
    </Container>
  )
}
