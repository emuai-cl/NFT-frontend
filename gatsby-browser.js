/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "styled-components"
import { ToastContainer } from "react-toastify"

import { theme } from "./src/styles/theme"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
      <ToastContainer />
    </ThemeProvider>
  )
}
