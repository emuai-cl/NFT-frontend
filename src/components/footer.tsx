import React, { useMemo } from "react"
import { SiInstagram, SiLinkedin, SiGithub, SiTelegram } from "react-icons/si"
import { graphql, useStaticQuery } from "gatsby"

import dayjs from "dayjs"
import styled from "styled-components"
import tw from "twin.macro"

const FooterContainer = styled.div`
  ${tw`w-full py-2 mb-0 text-white text-center`};
  ${({ theme }) => theme.backgrounds.accent};
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
    <footer className="footer bg-gray-50 relative pt-1 border-b-2 border-blue-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0  sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                Social media
              </span>
              <div className="flex flex-row mt-4 space-x-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                  >
                    <SiInstagram />
                  </a>
                </div>
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                  >
                    <SiGithub />
                  </a>
                </div>
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                  >
                    <SiLinkedin />
                  </a>
                </div>
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                  >
                    <SiTelegram />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Contact us
              </span>
              <span className="my-2">contact@myemus.info</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Us
              </span>
              <span className="my-2">
                <a href="#" className="  text-md hover:text-blue-500">
                  Terms & conditions
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="  text-md hover:text-blue-500">
                  Our team
                </a>
              </span>
              <span className="my-2">
                <a href="/FAQ" className="  text-md hover:text-blue-500">
                  FAQ
                </a>
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
