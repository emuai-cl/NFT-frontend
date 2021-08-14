import React from "react"
import useTeamImages from "../hooks/useTeamImages"
import TeamCard from "./team-card"

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`container mx-auto py-10 flex flex-col justify-center items-center`};
`
const Title = styled.h3`
  ${tw`flex flex-col text-4xl font-bold mb-6`};
`

const Grid = styled.div`
  ${tw`grid lg:grid-cols-3 grid-cols-1 gap-8 align-middle w-4/5 mx-auto`};
`

export const Team = () => {
  const { oliver, gabriel, benjamin } = useTeamImages()
  return (
    <Container id="equipo">
      <Title>Team</Title>
      <Grid>
        <TeamCard
          name="Oliver Stehr "
          position="Team Manager"
          description="Computer Sciences student in Adolfo Ibáñez University. I want to participate in the formation of a space where students can create highly complex projects."
          img={oliver}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/oliver-stehr/",
            },
          ]}
        />

        <TeamCard
          name="Gabriel Pérez"
          position="Developer"
          description="NO DESCRIPTION"
          img={gabriel}
          socialNetworks={[
            {
              name: "github",
              link: "https://www.github.com/Yhozen",
            },
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/gabrielperezaguirre/",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/gabrieeelperez/",
            },
          ]}
        />

        <TeamCard
          name="Benjamín Gutiérrez"
          position="Multimedia"
          description="NO DESCRIPTION"
          img={benjamin}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/gabrielperezaguirre/",
            },
          ]}
        />

        <TeamCard
          name="Matías Vidal"
          position="Developer"
          description="NO DESCRIPTION"
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/gabrielperezaguirre/",
            },
          ]}
        />
        
        <TeamCard
          name="Maria Francisca Ramirez"
          position="Fundraising & Spokesperson"
          description="In the team I seek to motivate and educate people so that together we build a more sustainable world. I believe that EMUAI gives me the opportunity to reach many people and be an agent of change regarding electromobility."
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/franciscaramirez/",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/franramirezteuber/",
            },
          ]}
        />
        
        <TeamCard
          name="Manuel Aliaga"
          position="Communications"
          description="Head of the Communications sub-department and a journalism student."
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/manuel-aliaga-trujillo-590463213/",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/manuel_aliaga._/",
            },
          ]}
        />
        
        <TeamCard
          name="Ignacia Troncoso"
          position="Mechanical Systems"
          description="Student of Mechanical Engineering and Energy Engineering, Part of the EMUAI Team on Mechanical Systems. Lover of cars, music and beer."
          img={gabriel}
          socialNetworks={[
            {
              name: "instagram",
              link: "https://www.instagram.com/igna_troncoso/",
            },
          ]}
        />
        
        <TeamCard
          name="María Jesús Schlotterbeck"
          position="Mechanical Structure"
          description="I am part of the Mechanics department, in charge of the structural part of the solar car in EMUAI. My dream is to motivate, help, and achieve a great change in society."
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/mar%C3%ADa-jes%C3%BAs-schlotterbeck-byrne/",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/schlott_/",
            },
          ]}
        />
        
        <TeamCard
          name="Felipe Lara"
          position="Fundraising"
          description="Entered the EMUAI team with the ambition of being able to contribute a 'grain of sand' to the improvement of the environmental conditions of our planet and to contribute to the sustainability of Chile."
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/felipe-lara-lara/",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/gabrieeelperez/",
            },
            {
              name: "facebook",
              link: "https://www.facebook.com/felipe.lara.3010/",
            },
            {
              name: "twitter",
              link: "https://twitter.com/feelipeLL",
            },
          ]}
        />
        
        <TeamCard
          name="Francisco Bascuñan"
          position="Logistics"
          description="Business student \n Working in the logistics in EMUAI 🚘"
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/franciscobascuñan",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/pvnsho.0/",
            },
            {
              name: "twitter",
              link: "https://twitter.com/pvnsho",
            },
          ]}
        />
        
        <TeamCard
          name="Pablo Uribe"
          position="Mechanical System"
          description="Mechanical systems sub-department member, passionate about mechanics with an environmental perspective."
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/pablo-uribe-pizarro/",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/pablo.u5743",
            },
          ]}
        />
        
        <TeamCard
          name="Pedro Turu Luque"
          position="Electrical Captain"
          description="Computer Science and Industrial Engineering student, Captain electrical equipment EMUAI"
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "http://linkedin.com/in/pedro-turu",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/pedro_turu_/",
            },
          ]}
        />
        
        <TeamCard
          name="Cristóbal Gacitúa Herrera"
          position="Fundraising"
          description="Young university student motivated to participate in innovative initiatives and projects with a view to a sustainable future."
          img={gabriel}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/crist%C3%B3balgacituaherrera/",
            },
            {
              name: "instagram",
              link: "https://www.instagram.com/cr.stobalg/saved/?hl=es",
            },
          ]}
        />
        
      </Grid>
    </Container>
  )
}
