import React from "react"
import Slide from "react-reveal/Slide"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`container mx-auto min-h-screen`};
`

const PageTitle = styled.h1`
  ${tw`font-extrabold text-4xl uppercase text-gray-800 text-center mb-5`};
`
const PageSubtitle = styled.h2`
  ${tw`font-bold text-2xl text-gray-600 mb-3`};
`

const PageParagraph = styled.p`
  ${tw`font-normal text-gray-700`};
`

const PageLink = styled.a`
  ${tw`text-pink-500`}
`

const AboutSection = styled.div`
  ${tw`my-12`}
`

const About: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/emuai.jpeg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Slide top>
        <PageTitle>About</PageTitle>
      </Slide>
      <Slide left>
        <AboutSection>
          <PageSubtitle>History</PageSubtitle>
          <PageParagraph>
            {`EMUAI was founded in 2017, born of the initiative of several students from the Faculty of Engineering and Sciences of the Adolfo Ibáñez University (UAI), whose main objective was to build a two-seater solar hybrid vehicle that would be able to compete in the most important race in Latin America, the Carrera Solar de Atacama 2018. In this race, we were crowned champions with our first solar car: The Emu-Alpha.
Currently we are a multidisciplinary team of students from the UAI, which is dedicated to designing and building solar cars and then taking them to competitions around the world. Our mission is to motivate and educate young people by promoting the development of sustainable transport, with the vision of generating a space where students can undertake highly complex projects and applied research, to develop, promote, and perfect their professional skills at an early stage of their university careers. `}
          </PageParagraph>
        </AboutSection>
      </Slide>
      <Slide right>
        <AboutSection>
          <PageSubtitle>What has this to do with emus?</PageSubtitle>
          <PageParagraph>
            {`We like emus. They are fast, cool and they won a war against the australians and Australia is where the World Solar Challenge takes place and where we want to win.
Also, we are called EMUAI wich has an "emu" in it. EMUAI comes from Electromovilidad Universidad Adolfo Ibáñez or Electromobility of the Adolfo Ibáñez University.`}
          </PageParagraph>
        </AboutSection>
      </Slide>
      <Slide left>
        <AboutSection>
          <PageSubtitle>"NOMBRE DEL AUTO" COMPETITIONS:</PageSubtitle>
          <PageParagraph>
            {`The Bridgestone World Solar Challenge (BWSC) is known as the most challenging solar race in the world. A unique feature of this race is that all of the cars are completely different and designed from scratch, which places particular emphasis on their autonomy and functionality.
The weather conditions are extreme, as the race crosses the Australian desert from Darwin to Adelaide, covering more than 3000 kilometres over 7 days. It will take the cars through strong winds and sometimes rain near the coastal cities. This is why we can say that the BWSC is more than just a race; it is a challenge.
The next iteration of this race will take place in October 2023, with three different participant categories: Cruiser, Adventure, and Challenger. We have decided to participate in the Challenger class, focusing mainly on the performance of the vehicle and trying to get from start to finish in the shortest possible time.
The Bridgestone World Solar Challenge has sought to promote electromobility for over 30 years, encouraging young people to learn about the technology behind sustainable transportation and to develop cutting-edge vehicles powered solely by solar energy. This race acts as a launchpad for innovation in the field of sustainanility.

As the 2021 edition of this race was cancelled, a new competition took it's place in the form of a "Telemetry Race" in wich the teams compete globally and send their telemetry data to a server, making it public for everyone to analize. This race would take place in October 2021, organized by the BWSC.

But this is not all. We are looking to compete in Chile in 2022 in an extreme race with the highest radiation on the planet and a hight difference of more than 3000 meters. This race has not yet been confirmed, but we are working closely with the organizers and will keep you in touch. `}
          </PageParagraph>
        </AboutSection>
      </Slide>

      <Slide right>
        <AboutSection>
          <PageSubtitle>Our team</PageSubtitle>
          <StaticImage
            src="../images/emuai.jpeg"
            width={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </AboutSection>
      </Slide>
      <Slide left>
        <AboutSection>
          <PageSubtitle>Our Solar Car</PageSubtitle>

          <PageParagraph>
            {`Our solar car is a `}
            <PageLink href="https://worldsolarchallenge.org/the-challenge/classes/challenger-class">
              Challenger class
            </PageLink>
            {` solar car, wich means it is extremely effiecient. During 2020 we designed the car using the joint knowledge of top class students, teachers, mentors, consultants and partners across many different areas and organized the logistics and strategy for a solar car race. We also had our press department publish us on tens of magazines and showing us on television a couple of times.

The vehicle's structure will be made out of carbon fiber in order for it to be light and strong. Green Composites, a composite materials company, is helping us achieve this task as they have vast experience using carbon fiber for building cars. 

This year we want to bring this design to reality...`}
          </PageParagraph>
        </AboutSection>
      </Slide>
    </Container>
  )
}

export default About