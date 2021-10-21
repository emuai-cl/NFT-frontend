import { useEffect, useState } from "react"
import tailwindConfig from "../../tailwind.config"

const breakpoints = tailwindConfig.theme.screens

export const matchBreakpoint = (breakpoint: keyof typeof breakpoints) =>
  typeof window !== "undefined" &&
  window.matchMedia(`(min-width: ${breakpoints[breakpoint]})`).matches

export const useMatchBreakpoint = (
  breakpoint: keyof typeof breakpoints,
  defaultValue = false
) => {
  const [match, setMatch] = useState(defaultValue)

  useEffect(() => {
    const resizeListener = () => {
      setMatch(matchBreakpoint(breakpoint))
    }
    typeof window !== "undefined" &&
      window.addEventListener("resize", resizeListener)
    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", resizeListener)
  }, [breakpoint])
  return match
}
