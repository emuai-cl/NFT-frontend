import React, { useState } from "react"
import tw from "twin.macro"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const Navbar = styled.nav`
  ${tw`w-full z-30 top-0  text-white py-1 lg:py-4`};
  position: absolute;
  top: 0;
`

const NavbarContainer = styled.div`
  ${tw`w-full container  mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6`};
`

const InnerContainer = styled.div`
  ${tw`pl-4 flex items-center`};
`

const Content = styled.div<{ open: boolean }>`
  ${tw`w-full flex-grow lg:flex lg:items-center  lg:w-auto lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20`};
  ${({ open }) =>
    !open &&
    css`
      display: none;
    `};
`

const List = styled.ul`
  ${tw`lg:flex flex-1 w-auto justify-end  items-center`};
`
const ListItem = styled.li`
  ${tw`mr-3 `};
`
const MobileListItem = styled.li`
  ${tw`mr-12`};
`
const StyledLink = styled(Link)`
  ${tw`inline-block py-2 px-4 text-white  font-bold no-underline`};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
`

const SpecialLink = styled(Link)`
  ${tw`mx-auto lg:mx-0 text-white font-extrabold rounded mt-4 lg:mt-0 mx-5 lg:mx-5 py-4 px-8 shadow-md`};
  ${({ theme }) => theme.backgrounds.accent};
  ${({ theme }) => theme.backgrounds.hoverAccent};
  ${({ theme }) => theme.backgrounds.focusAccent};
`

const MobileMenuContainer = styled.div`
  ${tw`block lg:hidden  pr-4`};
`

const MobileMenuButton = styled.button`
  ${tw`flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white appearance-none focus:outline-none`};
`

const Svg = styled.svg`
  ${tw`fill-current h-3 w-3`};
`

const Icon = () => (
  <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </Svg>
)

const NavbarComponent = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(open => !open)
  return (
    <Navbar>
      <NavbarContainer>
        <InnerContainer />
        <MobileMenuContainer>
          <MobileMenuButton onClick={toggleOpen}>
            <Icon />
          </MobileMenuButton>
        </MobileMenuContainer>

        <Content open={open}>
          <List>
            <ListItem>
              <StyledLink to="/">Inicio</StyledLink>
            </ListItem>

            <ListItem>
              <StyledLink to="/about">About</StyledLink>
            </ListItem>

            <ListItem>
              <SpecialLink to="/manage">Manage</SpecialLink>
            </ListItem>
          </List>
        </Content>
      </NavbarContainer>
    </Navbar>
  )
}

export default NavbarComponent
