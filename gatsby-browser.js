/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"

import { theme } from "./src/styles/theme"
import "./src/styles/global.css"

const queryClient = new QueryClient()

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
    </ThemeProvider>
  )
}
