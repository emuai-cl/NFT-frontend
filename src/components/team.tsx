import React from "react"
import useTeamImages from "../helpers/useTeamImages"
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
          position="Team Captain"
          description="NO DESCRIPTION"
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
      </Grid>
    </Container>
  )
}
