import React from "react"
import styled from "styled-components"
import { darken } from "polished"
import { theme } from "../styles/theme"
import tw from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  ${tw`py-8 opacity-90`};
  background-color: ${({ theme }) => theme.gradients.first};
`

const SubContainer = styled.div`
  ${tw`container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24`};
`

const SubSubContainer = styled.div`
  ${tw`flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8`};
`

const SuperTitle = styled.p`
  ${tw` uppercase`};
  color: ${({ theme }) => theme.gradients.third};
`

const Line = styled.div`
  ${tw`border-2  absolute h-full border`};
  left: 50%;
  border: 2px solid ${({ theme }) => darken(0.1, theme.gradients.second)};
  border-radius: 1%;
`

const Title = styled.p`
  ${tw`text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-bold text-gray-900 text-opacity-90`};
`

const GoalTitle = styled.h4`
  ${tw`mb-3 font-bold text-lg md:text-2xl text-gray-900 text-opacity-70`};
`

const TimelineTitle = styled.p`
  ${tw`mb-3 text-base px-4`};
  color: ${({ theme }) => darken(0.15, theme.gradients.second)};
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
            <SuperTitle>Car's</SuperTitle>
            <Title>Roadmap</Title>
            <StaticImage
              src="../images/roadmap.png"
              quality={95}
              alt="Stamp"
              width={314}
              height={316}
              placeholder="blurred"
            />
          </SubSubContainer>
          <div tw="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div tw="container mx-auto w-full h-full">
              <div tw="relative  overflow-hidden p-10 h-full">
                <Line />
                <Line />

                <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div tw="order-1 w-5/12"></div>
                  <div tw="order-1 w-5/12 px-1 py-4 text-right">
                    <TimelineTitle>First Half of 2020:</TimelineTitle>
                    <GoalTitle>State of the art and Team Building</GoalTitle>
                    <p tw="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 px-4  ">
                      After fixing our objective as a challenger class for the
                      BWSC, we build the dream team and start studying previous
                      designs, their pros and cons, get mentors and build habits
                      for remote working and designing of a solar car. We get
                      the software and hardware needed for the work.
                    </p>
                  </div>
                </div>

                <div tw="mb-8 flex justify-between items-center w-full">
                  <div tw="order-1 w-5/12"></div>
                  <div tw="order-1  w-5/12 px-1 py-4 text-left">
                    <TimelineTitle>Second Half of 2020:</TimelineTitle>
                    <GoalTitle>General design</GoalTitle>
                    <p tw="text-sm md:text-base leading-snug text-gray-50 text-opacity-100  ">
                      With the dream team ready and with all the knowledge
                      needed, we set the restrictions for our car, based on the
                      car's environment and the competition's rules. We come up
                      with three designs good enough to test and determine the
                      best.
                    </p>
                  </div>
                </div>

                <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full  ">
                  <div tw="order-1 w-5/12"></div>
                  <div tw="order-1 w-5/12 px-1 py-4 text-right">
                    <TimelineTitle>Q1 2021:</TimelineTitle>
                    <GoalTitle>Specific design</GoalTitle>
                    <p tw="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Dive into the really technical aspect of the project and
                      thinking about every possible detail of the car. Also,
                      this is where the strategy team overtakes the
                      decision-making process, giving objective reasoning in
                      design conflicts.
                    </p>
                  </div>
                </div>

                <div tw="mb-8 flex justify-between items-center w-full  ">
                  <div tw="order-1 w-5/12"></div>
                  <div tw="order-1  w-5/12 px-1 py-4">
                    <TimelineTitle>Q2 2021:</TimelineTitle>
                    <GoalTitle>Transition to Manufacturing</GoalTitle>
                    <p tw="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      After having the car fully designed, we need to find the
                      way to bring it to reality. This is, contacting the
                      necessary suppliers, partnering with key manufacturing
                      companies, and fixing possible designing problems with
                      them.
                    </p>
                  </div>
                </div>

                <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full  ">
                  <div tw="order-1 w-5/12"></div>
                  <div tw="order-1 w-5/12 px-1 py-4 text-right">
                    <TimelineTitle>Q3 and Q4 2021:</TimelineTitle>
                    <GoalTitle>Structural Manufacturing</GoalTitle>
                    <p tw="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      We buy key manufacturing materials and start the
                      manufacturing of the carbon-fiber structure. We also buy
                      the electrical components and start manufacturing custom
                      aluminum mechanical parts such as suspension and direction
                      parts.
                    </p>
                  </div>
                </div>

                <div tw="mb-8 flex justify-between items-center w-full  ">
                  <div tw="order-1 w-5/12"></div>
                  <div tw="order-1  w-5/12 px-1 py-4 text-left">
                    <TimelineTitle>First Half 2022:</TimelineTitle>
                    <GoalTitle>Mounting and Testing</GoalTitle>
                    <p tw="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      We finish the carbon-fiber structure of the car and mount
                      the mechanical and electrical parts. We test the vehicle
                      and measure key constants for the strategy. EMUs get
                      printed on the car for the world to admire. We take the
                      car for a ride along the beautiful Chilean landscapes.
                    </p>
                  </div>
                </div>

                <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full  ">
                  <div tw="order-1 w-5/12"></div>
                  <div tw="order-1 w-5/12 px-1 py-4 text-right">
                    <TimelineTitle>Second Half 2021:</TimelineTitle>
                    <GoalTitle>Racing</GoalTitle>
                    <p tw="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      We compete in the Sasol Solar Challenge in South África or
                      in the American Solar Challenge in the United States of
                      América, where millions of people will be watching.
                    </p>
                  </div>
                </div>

                <div tw="mb-8 flex justify-between items-center w-full  ">
                  <div tw="order-1 w-5/12"></div>
                  <div tw="order-1  w-5/12 px-1 py-4">
                    <TimelineTitle>Second half 2022:</TimelineTitle>
                    <GoalTitle>After the first race</GoalTitle>
                    <p tw="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The team looks for another competition before the BWSC
                      2023. Options are in Chile, United Arab Emirates, Europe
                      and/or a race organized by us. Before every race, the EMUs
                      on the car get updated to the current images on the
                      virtual representation.
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
