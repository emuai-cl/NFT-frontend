import tailwindConfig from "../../tailwind.config"

export const breakpoints = tailwindConfig.theme.screens

export const matchBreakpoint = (breakpoint: keyof typeof breakpoints) =>
  typeof window !== "undefined" &&
  window.matchMedia(`(min-width: ${breakpoints[breakpoint]})`).matches
