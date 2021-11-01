import React from "react"
import Slide from "react-reveal/Slide"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Zoom from "react-reveal/Zoom"
import { Footer } from "../components/footer"
import { matchBreakpoint } from "../helpers/breakpoints"

import { lighten } from "polished"

import tw from "twin.macro"

import Navbar from "../components/navbar"
import { PageParagraph, PageLink } from "../components/common"
import { HeroTitle } from "../components/HeroTitle"
import { theme } from "../styles/theme"
import { SubtitleWithLine } from "../components/subtitle-with-line"
import SEO from "../components/seo"

const AboutSection = styled.div`
  ${tw`py-12`};
  background-color: ${({ theme }) => theme.gradients.third};
  &:nth-child(even) {
    background-color: ${({ theme }) => lighten(0.07, theme.gradients.third)};
  }
`

const StyledPageParagraph = styled(PageParagraph)`
  ${tw`mx-auto text-justify w-4/5`};
  color: white;
  font-weight: 600;
`
const StyledPageLink = styled(PageLink)`
  ${tw`text-blue-500 hover:underline`}
`
const ContainerForImage = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-4`};
`
const Image = styled.div`
  ${tw`lg:col-span-1 mx-auto my-auto w-4/5`};
`
const ImageTextContainer = styled(PageParagraph)`
  ${tw`lg:col-span-3`};
  color: white;
  font-weight: 600;
`
const ImageText = styled(PageParagraph)`
  ${tw`text-justify mx-auto w-4/5`};
  color: white;
  font-weight: 600;
`

const About: React.FC = ({}) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/emuai.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  const ImagenLG = () => {
    return (
      <StaticImage
        src="../images/autoPorDentroVertical.jpeg"
        quality={95}
        alt="Car"
        style={{
          marginBottom: `1.45rem`,
        }}
      />
    )
  }
  console.log(matchBreakpoint("lg"))
  const ImagenSM = () => {
    return (
      <StaticImage
        src="../images/autoPorDentro.jpeg"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Car"
        style={{
          marginBottom: `1.45rem`,
        }}
      />
    )
  }
  return (
    <>
      <SEO title="About us" />
      <Navbar />
      <HeroTitle fill={theme.gradients.third}>About</HeroTitle>
      <AboutSection>
        <Slide top>
          <SubtitleWithLine>
            Revolutionizing crowdfunding with an innovative NFT application
          </SubtitleWithLine>
        </Slide>
        <Zoom>
          <StyledPageParagraph>
            {`What would happen if the Red Bull Stratos, the highest skydive in history would have been crowd-funded and the suit and capsule would have been covered by art instead of RedBull logos? How would the narrative have changed and how cool would it have been to own a piece of that suit for the world to see? And how about a Formula One car or a sports team?`}
            <br />
            <br />
            {`Now are the days where this is possible, where the funding for the entertainment industry can come from people like you and me and not only from big corporations. But no one has ever done this kind of crowdfunding before, not until today.`}{" "}
            <br />
            <br />
            {`In EMUAI, we want to sell pieces of our solar car's surface for people to cover with images they find special. Maybe history will remember us as the pioneers, being be the first in this new and better way to get funding. And the best part is that you can be a part in this, all thanks to Cryptocurrencies, Smart Contracts and NFTs.`}
          </StyledPageParagraph>
        </Zoom>
      </AboutSection>
      <AboutSection>
        <Slide top>
          <SubtitleWithLine>History</SubtitleWithLine>
        </Slide>
        <Zoom>
          <StyledPageParagraph>
            {`EMUAI was founded in 2017, born of the initiative of several students from the Faculty of Engineering and Sciences of the Adolfo Ibáñez University (UAI), whose main objective was initially to build a two-seater solar hybrid vehicle that would be able to compete in the most important race in Latin America: the Carrera Solar de Atacama 2018. `}
            <br />
            <br />
            {` 
We made it to this race and, against all expectations, were crowned champions with our first solar car: The Emu-Alpha. `}
            <br />
            <br />
            {` 
Currently we are a multidisciplinary team of students from the UAI dedicated to designing and building solar cars to take them to competitions around the world. Our mission is to motivate and educate young people by promoting the development of sustainable transport, with the vision of generating a space where students can undertake highly complex projects and applied research, to develop, promote, and perfect their professional skills at an early stage of their university careers.`}
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
            {`The Bridgestone World Solar Challenge (BWSC) is known as the most challenging solar race in the world. A unique feature of this race is that all the cars are completely different and designed from scratch, which places particular emphasis on their autonomy and functionality. `}
            <br />
            <br />
            {` 
The weather conditions are extreme, as the race crosses the Australian desert from Darwin to Adelaide, covering more than 3000 kilometers over 7 days. It will take the cars through strong winds and sometimes rain near the coastal cities. Therefore, we can say that the BWSC is more than just a race; it is a challenge. `}
            {` 
The next iteration of this race will take place in October 2023, with three different participant categories: Cruiser, Adventure, and Challenger. We have decided to participate in the Challenger class, focusing mainly on the performance of the vehicle and trying to get from start to finish in the shortest possible time. `}
            <br />
            <br />
            {` 
The Bridgestone World Solar Challenge has sought to promote electromobility for over 30 years, encouraging young people to learn about the technology behind sustainable transportation and to develop cutting-edge vehicles powered solely by solar energy. This race acts as a launchpad for innovation in the field of sustainability. `}
            <br />
            <br />
            {`Before going to the World Solar Challenge, we are goingo to other races. We are looking to compete in Chile in 2022 in an extreme race with the highest radiation on the planet and a height difference of more than 3000 meters. This race has not yet been confirmed, but we are working closely with the organizers and will keep you in touch. `}
            <br />
            <br />
            {` 
On september 2022 in Southafrica, the `}
            <StyledPageLink href="https://www.solarchallenge.org.za/">
              Sasol Solar Challenge
            </StyledPageLink>
            {` takes place. We will also asist to this race in case we have enough funding for it's logistics.`}
          </StyledPageParagraph>
        </Zoom>
      </AboutSection>
      <AboutSection>
        <Slide top>
          <SubtitleWithLine>Our Solar Car</SubtitleWithLine>
        </Slide>
        <ContainerForImage>
          <Image>{matchBreakpoint("lg") ? <ImagenLG /> : <ImagenSM />}</Image>
          <ImageTextContainer>
            <Zoom>
              <ImageText>
                {`Our solar car is a `}
                <StyledPageLink href="https://worldsolarchallenge.org/the-challenge/classes/challenger-class">
                  Challenger class
                </StyledPageLink>
                {` solar car, which means it is extremely efficient. During 2020 we designed the car using the joint knowledge of top-class students, teachers, mentors, consultants, and partners across many different areas and organized the logistics and strategy for a solar car race. We also had our press department publish us on tens of magazines and showing us on television a couple of times. `}
                <br />
                <br />
                {`The vehicle's structure will be made of carbon fiber for it to be light and strong. Green Composites, a composite materials company, is helping us achieve this task as they have vast experience using carbon fiber for building cars. The mechanical parts will be custom made in space-grade aluminum. Our solar panels are going to be curved so that they follow the aerodynamic shape of the car. This will be achieved thanks to the help of Gochermann Solar Technology, "a manufacturer of custom solar arrays with very special features required in solar race events". Our motor will be of the most efficient motors in the planet, at a whopping 95% and our batteries, custom made by our team for our specifications. The car will have no mirrors. Instead, it will have cameras and a screen in order to not interfere with aerodynamics. A second screen on the drive-wheel will show relevant information to the driver during que races.`}
                <br />
                <br />
                {`All of this is just showing you the tip of the iceberg, as every part of the car could be a project by itself. `}
                <br />
                <br />
                {` 

This year we want to bring this design to reality, but it is expensive as you may have realized. This is why we want you to be a part of our project and help us bring it alive.`}
              </ImageText>
            </Zoom>
          </ImageTextContainer>
        </ContainerForImage>
      </AboutSection>
      <Footer />
    </>
  )
}

export default About
