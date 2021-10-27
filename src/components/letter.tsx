import React from "react"
import styled from "styled-components"
import Slide from "react-reveal/Slide"
import { StaticImage } from "gatsby-plugin-image"

import Collapse from "@geist-ui/react/esm/collapse"
import tw from "twin.macro"

import { SubtitleWithLine } from "./subtitle-with-line"
import { LetterContainer } from "./common"

const Text = styled.p`
  text-align: justify;
`
const Spacer = styled.div`
  padding-top: 4rem;
`
const BiggerDiv = styled.div`
  ${tw`col-start-2 col-span-3 px-10`};
`
const LetterBG = styled.div`
  ${tw`col-start-2 col-span-3 bg-gray-300`};
`
const SignedDiv = styled.div`
  ${tw`grid grid-cols-3 pt-8`};
`
const StampDiv = styled.div`
  ${tw`pl-20`};
`

export const Letter: React.FC = () => {
  return (
    <>
      <Spacer />
      <SubtitleWithLine color="#444">Letter</SubtitleWithLine>
      <LetterContainer>
        <LetterBG>
          <BiggerDiv>
            <Collapse title="Expand letter">
              <div>
                <p>
                  Dear prospective supporter, <br />
                </p>
                <Text>
                  <span>
                    On behalf of the Electromovilidad team of Adolfo Ibáñez
                    University, I would like to thank you for your interest in
                    our project. Our team aims to push the limits of what is
                    possible not only with sustainable transport, but also with
                    NFTs and funding methods, introducing people to our
                    community through our participation in solar car
                    competitions. For these, we create original concept vehicles
                    powered by solar energy, and put them to the test in races
                    through harsh conditions. We have already taken our first
                    step in the 2018 Atacama Solar Race in Chile, where we
                    competed with a hybrid solar car and came out on top. Now
                    it's time to take our second big step: we will compete
                    internationally at the Bridgestone World Solar Challenge
                    with a 100% solar car, capable of crossing the Australian
                    continent with nothing but the sun's energy.
                  </span>
                  <br />
                  <span>
                    We would like to invite you to be part of this challenge and
                    to promote the development of sustainable transport while
                    using the latest NFT technology. Together with your support,
                    we believe that we will become one of the most prestigious
                    solar car teams in Latin America and the world. At the
                    Adolfo Ibáñez University, we are taught teamwork,
                    communication, and critical thinking, elements that are
                    often underestimated in engineering projects. Thanks to
                    these, we were able to build a team that many can only dream
                    of, where the desire to learn and to push clean technology
                    is the driving force behind our dedication and commitment at
                    work. Thanks to these same qualities, we have developed
                    strategic alliances beyond the university that help us where
                    we lack experience. These include mentoring, consultancy,
                    and joint development from various countries such as Canada,
                    Belgium, and Argentina. We are more than a group of
                    individuals; we are a family, and we hope that trough this
                    new way of crowdfunding, you will also join us on this
                    extraordinary journey.
                  </span>
                </Text>
              </div>
              <div>
                <SignedDiv>
                  <div>
                    <span>Best regards,</span>
                    <br />
                    <span>Estivaliz Rosales, Team Manager</span>
                  </div>
                  <div></div>
                  <StampDiv>
                    <StaticImage
                      src="../images/icon2.png"
                      quality={95}
                      alt="Stamp"
                      width={200}
                      height={50}
                      placeholder="blurred"
                    />
                  </StampDiv>
                </SignedDiv>
              </div>
            </Collapse>
          </BiggerDiv>
        </LetterBG>
      </LetterContainer>
    </>
  )
}
