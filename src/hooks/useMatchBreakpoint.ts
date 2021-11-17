import { useEffect, useState } from "react"
import { breakpoints, matchBreakpoint } from "../helpers/breakpoints"

export const useMatchBreakpoint = (breakpoint: keyof typeof breakpoints) => {
  const [match, setMatch] = useState(matchBreakpoint(breakpoint))

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
