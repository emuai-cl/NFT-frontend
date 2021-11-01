import React, { useMemo } from "react"
import { SiInstagram, SiLinkedin, SiGithub, SiTelegram } from "react-icons/si"
import { graphql, useStaticQuery, Link } from "gatsby"

import dayjs from "dayjs"
import styled from "styled-components"
import tw from "twin.macro"

const FooterContainer = styled.div`
  ${tw`w-full py-2 mb-0 text-white text-center`};
  ${({ theme }) => theme.backgrounds.accent};
`

const StyledLink = styled(Link)`
  ${tw`hover:text-blue-500`};
`

const IconLink = styled.a`
  ${tw`flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800 hover:text-blue-500 hover:border-blue-800`};
`

export const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        buildTime
      }
    }
  `)

  const buildTime = useMemo(() => data?.site?.buildTime as string, [data])

  return (
    <footer tw="bg-gray-50 relative pt-1 border-b-2 border-blue-700">
      <div tw="container mx-auto px-6">
        <div tw="sm:flex sm:mt-8">
          <div tw="mt-8 sm:mt-0  sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div tw="flex flex-col">
              <span tw="font-bold text-gray-700 uppercase mb-2">
                Social media
              </span>
              <div tw="flex flex-row mt-4 space-x-2">
                <div tw="flex flex-col">
                  <IconLink
                    href="https://instagram.com/emuai_chile/"
                    target="_blank"
                  >
                    <SiInstagram />
                  </IconLink>
                </div>
                <div tw="flex flex-col">
                  <IconLink href="https://github.com/emuai-cl/" target="_blank">
                    <SiGithub />
                  </IconLink>
                </div>
                <div tw="flex flex-col">
                  <IconLink
                    href="https://www.linkedin.com/company/electromovilidad-uai/"
                    target="_blank"
                  >
                    <SiLinkedin />
                  </IconLink>
                </div>
                <div tw="flex flex-col">
                  <IconLink href="https://t.me/emuai_nfts/" target="_blank">
                    <SiTelegram />
                  </IconLink>
                </div>
              </div>
            </div>
            <div tw="flex flex-col">
              <span tw="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Contact us
              </span>
              <a
                href="mailto:contact@myemus.info"
                target="_blank"
                tw="my-2 hover:text-blue-500"
              >
                contact@myemus.info
              </a>
            </div>
            <div tw="flex flex-col">
              <span tw="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Us
              </span>
              <span tw="my-2">
                <StyledLink to="/terms" tw="hover:text-blue-500">
                  {`Terms & conditions`}
                </StyledLink>
              </span>
              <span tw="my-2">
                <StyledLink to="/about">Our team</StyledLink>
              </span>
              <span tw="my-2">
                <StyledLink to="/FAQ">FAQ</StyledLink>
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterContainer>
        Updated on {dayjs(buildTime).format("MMMM D, YYYY")}
      </FooterContainer>
    </footer>
  )
}
