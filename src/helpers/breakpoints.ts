import tailwindConfig from "../../tailwind.config"

const breakpoints = tailwindConfig.theme.screens

export const matchBreakpoint = (breakpoint: keyof typeof breakpoints) =>
  typeof window !== "undefined" &&
  window.matchMedia(`(min-width: ${breakpoints[breakpoint]})`).matches

/*


const ImagenLG = () => {
    return (
               <StaticImage
              src="../images/autoPorDentro.jpeg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Car"
              style={{
                marginBottom: `1.45rem`,
              }}
            />
    )
}

const ImagenSM = () => {
    return (
               <StaticImage
              src="../images/autoPorDentro.jpeg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Car"
              style={{
                marginBottom: `1.45rem`,
              }}
            />
    )
}
const About = () => {
    return (
        <>
        {matchBreakpoint("lg") ? <ImagenLG /> : <ImagenSM />}
        </>
    )
}

*/
