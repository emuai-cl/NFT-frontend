import React from "react"
import Slide from "react-reveal/Slide"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Zoom from "react-reveal/Zoom"
import { Footer } from "../components/footer"

import { darken, lighten } from "polished"
import { theme } from "../styles/theme"

import tw from "twin.macro"

import Navbar from "../components/navbar"
import {
  PageTitle,
  PageSubtitle,
  PageParagraph,
  PageLink,
} from "../components/common"

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const Background = styled.div`
  background: ${({ theme }) => theme.gradients.main};
  background-size: 200% 200%;
  animation: ${gradient} 15s ease infinite;
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

const AboutSection = styled.div`
  ${tw`py-12`};
  background-color: ${({ theme }) => theme.gradients.third};
  &:nth-child(even) {
    background-color: ${({ theme }) => lighten(0.07, theme.gradients.third)};
  }
`

const StyledPageTitle = styled(PageTitle)`
  ${tw`pt-24 text-white text-6xl`};
  color: white;
`

const StyledSpan = styled.span`
  ${tw`bg-white h-1 w-20 block mt-2 mx-auto mb-10`}
`

const StyledPageSubtitle = styled(PageSubtitle)`
  ${tw`flex items-center justify-center`};
  color: white;
`

const StyledPageParagraph = styled(PageParagraph)`
  ${tw`mx-auto text-justify w-4/5`};
  color: white;
  font-weight: 600;
`
const StyledPageLink = styled(PageLink)`
  ${tw`text-blue-500 hover:underline`}
`

const SubtitleWithLine = props => (
  <>
    <StyledPageSubtitle>{props.children}</StyledPageSubtitle>
    <StyledSpan />
  </>
)

const About: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/emuai.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  return (
    <>
      <Navbar />
      <Background>
        <Slide top>
          <StyledPageTitle>About</StyledPageTitle>
        </Slide>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill={theme.gradients.third}
            fillOpacity="1"
            d="M0,256L60,234.7C120,213,240,171,360,181.3C480,192,600,256,720,272C840,288,960,256,1080,224C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Background>
      <AboutSection>
        <Slide top>
          <SubtitleWithLine>
            Revolutionizing crowdfunding with an innovative NFT application
          </SubtitleWithLine>
        </Slide>
        <Zoom>
          <StyledPageParagraph>
            {`What would happen if the Red Bull Stratos, the highest skydive in history would have been crowd-funded and the suit and capsule would have been covered by art instead of RedBull logos? How would the narrative have changed and how cool would it have been to own a piece of that suit for the world to see? And how about a Formula One car or a sports team? Now are the days where this is possible, where the funding for the entertainment industry can come from people like you and me and not only from big corporations. But no one has ever done this kind of crowdfunding before, not until today.

In EMUAI, we want to sell pieces of our solar car's surface for people to cover with images they find special. Maybe history will remember us as the pioneers, being be the first in this new and better way to get funding. And the best part is that you can be a part in this, all thanks to Cryptocurrencies, Smart Contracts and NFTs.`}
          </StyledPageParagraph>
        </Zoom>
      </AboutSection>
      <AboutSection>
        <Slide top>
          <SubtitleWithLine>History</SubtitleWithLine>
        </Slide>
        <Zoom>
          <StyledPageParagraph>
            {`EMUAI was founded in 2017, born of the initiative of several students from the Faculty of Engineering and Sciences of the Adolfo Ibáñez University (UAI), whose main objective was initially to build a two-seater solar hybrid vehicle that would be able to compete in the most important race in Latin America: the Carrera Solar de Atacama 2018. We made it to this race and, against all expectations, were crowned champions with our first solar car: The Emu-Alpha. Currently we are a multidisciplinary team of students from the UAI dedicated to designing and building solar cars to take them to competitions around the world. Our mission is to motivate and educate young people by promoting the development of sustainable transport, with the vision of generating a space where students can undertake highly complex projects and applied research, to develop, promote, and perfect their professional skills at an early stage of their university careers.`}
          </StyledPageParagraph>
        </Zoom>
      </AboutSection>
      <AboutSection>
        <Slide top>
          <SubtitleWithLine>
            What does this have to do with emus?
          </SubtitleWithLine>
        </Slide>
        <Zoom>
          <StyledPageParagraph>
            {`We like emus. They are fast, cool and they won a war against Australia, which is where the World Solar Challenge takes place and where we want to win. Also, we are called EMUAI which has "emu" in it. EMUAI comes from Electromovilidad Universidad Adolfo Ibáñez or Electromobility of the Adolfo Ibáñez University.`}
          </StyledPageParagraph>
        </Zoom>
      </AboutSection>
      <AboutSection>
        <Slide top>
          <SubtitleWithLine>Sunroad's next competitions </SubtitleWithLine>
        </Slide>
        <Zoom>
          <StyledPageParagraph>
            {`The Bridgestone World Solar Challenge (BWSC) is known as the most challenging solar race in the world. A unique feature of this race is that all the cars are completely different and designed from scratch, which places particular emphasis on their autonomy and functionality. The weather conditions are extreme, as the race crosses the Australian desert from Darwin to Adelaide, covering more than 3000 kilometers over 7 days. It will take the cars through strong winds and sometimes rain near the coastal cities. Therefore, we can say that the BWSC is more than just a race; it is a challenge. The next iteration of this race will take place in October 2023, with three different participant categories: Cruiser, Adventure, and Challenger. We have decided to participate in the Challenger class, focusing mainly on the performance of the vehicle and trying to get from start to finish in the shortest possible time. The Bridgestone World Solar Challenge has sought to promote electromobility for over 30 years, encouraging young people to learn about the technology behind sustainable transportation and to develop cutting-edge vehicles powered solely by solar energy. This race acts as a launchpad for innovation in the field of sustainability.

As the 2021 edition of this race was cancelled, a new competition took it's place in the form of a `}
            <StyledPageLink href="https://www.worldsolarchallenge.org/2021-virtual-program/telemetry-challenge">
              "Telemetry Challenge"
            </StyledPageLink>
            {` in which the teams compete globally and send their telemetry data to a server, making it public for every team to analyze. This race would take place in October 2021, organized by the BWSC.

But this is not all. We are looking to compete in Chile in 2022 in an extreme race with the highest radiation on the planet and a height difference of more than 3000 meters. This race has not yet been confirmed, but we are working closely with the organizers and will keep you in touch.

In January 2022, we are planning on going to the `}
            <StyledPageLink href="https://www.unitedsolarchallenge.org/index.html">
              United Solar Challenge
            </StyledPageLink>
            {` in Abu Dhabi, United Arab Emirates, where the World Expo will be taking place, attracting hundreds of thousands of people.

On september 2022 in Suthafrica, the `}
            <StyledPageLink href="https://www.solarchallenge.org.za/">
              Sasol Solar Challenge
            </StyledPageLink>
            {` takes place. If we have enough funding, we will also asist to this race.`}
          </StyledPageParagraph>
        </Zoom>
      </AboutSection>
      <AboutSection>
        <Slide top>
          <SubtitleWithLine>Our Solar Car</SubtitleWithLine>
        </Slide>
        <Zoom>
          <StyledPageParagraph>
            {`Our solar car is a `}
            <StyledPageLink href="https://worldsolarchallenge.org/the-challenge/classes/challenger-class">
              Challenger class
            </StyledPageLink>
            {` solar car, which means it is extremely efficient. During 2020 we designed the car using the joint knowledge of top-class students, teachers, mentors, consultants, and partners across many different areas and organized the logistics and strategy for a solar car race. We also had our press department publish us on tens of magazines and showing us on television a couple of times.

The vehicle's structure will be made of carbon fiber for it to be light and strong. Green Composites, a composite materials company, is helping us achieve this task as they have vast experience using carbon fiber for building cars. The mechanical parts will be custom made in space-grade aluminum. Our solar panels are going to be curved so that they follow the aerodynamic shape of the car. This will be achieved thanks to the help of Gochermann Solar Technology, "a manufacturer of custom solar arrays with very special features required in solar race events". Our motor will be of the most efficient motors in the planet, at a whopping 95% and our batteries, custom made by our team for our specifications. The car will have no mirrors. Instead, it will have cameras and a screen in order to not interfere with aerodynamics. A second screen on the drive-wheel will show relevant information to the driver during que races.

All of this is just showing you the tip of the iceberg, as every part of the car could be a project by itself.

This year we want to bring this design to reality, but it is expensive as you may have realized. This is why we want you to be a part of our project and help us bring it alive.`}
          </StyledPageParagraph>
        </Zoom>
      </AboutSection>
      <Footer />
    </>
  )
}

export default About
