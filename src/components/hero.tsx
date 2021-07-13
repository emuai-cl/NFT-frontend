import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { gradientBackground } from "../styles/gradientBackground"
import { theme } from "../styles/theme"

import { Accent } from "./common"

const Background = styled.div`
  ${gradientBackground};
  width: stretch;
  svg {
    display: block;
    bottom: 0;
  }
  path {
    background: #ffffff;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const Title = styled.h2`
  padding-top: 180px;
  margin-bottom: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Subtitle = styled.h2`
  padding-bottom: 90px;
  margin-top: 10px;
  font-style: normal;
  font-weight: lighter;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;

  color: #f1f1f1;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    .title {
      font-size: 2.7rem;
    }
    .subtitle {
      font-size: 1.7rem;
    }
  }
`

const Button = styled.button`
  ${tw`px-10 py-4 rounded shadow text-white uppercase font-bold`};
  ${({ theme }) => theme.backgrounds.accent};
  ${({ theme }) => theme.backgrounds.hoverAccent};
  ${({ theme }) => theme.backgrounds.focusAccent};
`

type HeroProps = {
  buyRef: React.MutableRefObject<HTMLDivElement>
}

const Hero: React.FC<HeroProps> = ({ buyRef }) => {
  return (
    <Background>
      <Title>EMUS</Title>
      <Subtitle>
        Welcome to the <Accent>first NFT</Accent> racecar crowdfunding in{" "}
        <Accent>history.</Accent>
      </Subtitle>
      <ButtonContainer>
        <Button
          onClick={() =>
            buyRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          Buy now
        </Button>
      </ButtonContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill={theme.backgrounds.page}
          fillOpacity="1"
          d="M0,256L60,234.7C120,213,240,171,360,181.3C480,192,600,256,720,272C840,288,960,256,1080,224C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </Background>
  )
}

export default Hero
