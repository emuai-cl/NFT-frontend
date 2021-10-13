import React from "react"
import styled from "styled-components"
import { darken } from "polished"

import tw from "twin.macro"

const Container = styled.div`
  ${tw`py-8`};
  background-color: ${({ theme }) => darken(0.1, theme.backgrounds.page)};
`

const SubContainer = styled.div`
  ${tw`container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24`};
`

const SubSubContainer = styled.div`
  ${tw`flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8`};
`

const SuperTitle = styled.p`
  ${tw`ml-2  uppercase`};
  color: ${({ theme }) => theme.colors.accent};
`

const Line = styled.div`
  ${tw`border-2  absolute h-full border`};
  left: 50%;
  border: 2px solid ${({ theme }) => theme.gradients.second};
  border-radius: 1%;
`

const Title = styled.p`
  ${tw`text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2`};
`

const TimelineTitle = styled.p`
  ${tw`mb-3 text-base`};
  color: ${({ theme }) => theme.colors.accent};
`

const Image = styled.img`
  ${tw`mx-auto -mt-36 md:-mt-36`};
`

export const Roadmap: React.FC = () => {
  return (
    <section>
      <Container>
        <SubContainer>
          <SubSubContainer>
            <SuperTitle>Working Process</SuperTitle>
            <Title>Working Process of Fest</Title>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </SubSubContainer>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <Line />
                <Line />
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <TimelineTitle>1-6 May, 2021</TimelineTitle>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. Its that
                      easy :)
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <TimelineTitle>6-9 May, 2021</TimelineTitle>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Participation
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <TimelineTitle> 10 May, 2021</TimelineTitle>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Result Declaration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021 and the resukts will be announced on the
                      whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <TimelineTitle>12 May, 2021</TimelineTitle>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Prize Distribution
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses.
                    </p>
                  </div>
                </div>
              </div>
              <Image src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
          </div>
        </SubContainer>
      </Container>
    </section>
  )
}