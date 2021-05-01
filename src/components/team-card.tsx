import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"
import tw from "twin.macro"

import { ImHome } from "react-icons/im"
import { SiTiktok, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si"
import { Accent } from "./common"

const CardContainer = styled.div`
  ${tw`flex flex-col items-center justify-between bg-white p-4 shadow rounded-lg py-10`};
`
const ImageContainer = styled.div`
  ${tw`inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-20 w-20 lg:h-40 lg:w-40`};
`

const Name = styled(Accent).attrs({ as: "h2" })`
  ${tw`mt-4 font-bold text-xl text-center`};
`

const Position = styled.h6`
  ${tw`mt-2 text-sm text-center px-2`};
`
const Description = styled.p`
  ${tw`text-xs text-gray-500 text-center mt-3`};
`

const SocialNetworksList = styled.ul`
  ${tw`flex flex-row mt-4 space-x-2`};
`
const SocialNetworkItem = styled.a`
  ${tw`flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800`}
`
const Image = styled(GatsbyImage)`
  ${tw`h-full w-full`};
`
const SocialNetIcon = props => {
  if (props.name == "tiktok") return <SiTiktok />
  if (props.name == "facebook") return <SiFacebook />
  if (props.name == "instagram") return <SiInstagram />
  if (props.name == "linkedin") return <SiLinkedin />
  return <ImHome />
}

type TeamCardProps = {
  name: string
  position: string
  description: string
  socialNetworks: {
    name: string
    link: string
  }[]
  img: IGatsbyImageData
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  position,
  description,
  img,
  socialNetworks = [],
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image image={img} alt={`${name} Avatar`} />
      </ImageContainer>

      <Name>{name}</Name>
      <Position>{position}</Position>

      <Description>{description}</Description>

      <SocialNetworksList>
        {socialNetworks.map(social => (
          <li>
            <SocialNetworkItem href={social.link}>
              <SocialNetIcon name={social.name} />
            </SocialNetworkItem>
          </li>
        ))}
      </SocialNetworksList>
    </CardContainer>
  )
}

export default TeamCard
