import React from "react"
import Slide from "react-reveal/Slide"
import styled from "styled-components"
import tw from "twin.macro"

import { gradientBackground } from "../styles/gradientBackground"
import { PageTitle } from "./common"
import { theme } from "../styles/theme"

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
export const StyledPageTitle = styled(PageTitle)`
  ${tw`pt-36 text-white text-6xl`};
  color: white;
`

type HeroTitleProps = {
  fill?: string
}

export const HeroTitle: React.FC<HeroTitleProps> = ({
  children,
  fill = theme.backgrounds.page,
}) => (
  <Background>
    <Slide top>
      <StyledPageTitle>{children}</StyledPageTitle>
    </Slide>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
      <path
        fill={fill}
        fillOpacity="1"
        d="M0,256L60,234.7C120,213,240,171,360,181.3C480,192,600,256,720,272C840,288,960,256,1080,224C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </Background>
)
