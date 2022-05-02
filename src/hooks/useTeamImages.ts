import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
      esti: file(relativePath: { eq: "team/esti.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      oliver: file(relativePath: { eq: "team/oliver.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      gabriel: file(relativePath: { eq: "team/gabriel.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      benjamin: file(relativePath: { eq: "team/benjamin.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      fran: file(relativePath: { eq: "team/fran.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      ignacia: file(relativePath: { eq: "team/ignacia.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      jesu: file(relativePath: { eq: "team/jesu.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      lara: file(relativePath: { eq: "team/lara.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      manu: file(relativePath: { eq: "team/manu.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      pablo: file(relativePath: { eq: "team/pablo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      tobal: file(relativePath: { eq: "team/tobal.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }

      turu: file(relativePath: { eq: "team/turu.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }
      matias: file(relativePath: { eq: "team/matias.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }
    }
  `)

  const esti = data.esti.childImageSharp.gatsbyImageData as IGatsbyImageData
  const oliver = data.oliver.childImageSharp.gatsbyImageData as IGatsbyImageData
  const gabriel = data.gabriel.childImageSharp
    .gatsbyImageData as IGatsbyImageData
  const benjamin = data.benjamin.childImageSharp
    .gatsbyImageData as IGatsbyImageData
  const fran = data.fran.childImageSharp.gatsbyImageData as IGatsbyImageData
  const ignacia = data.ignacia.childImageSharp
    .gatsbyImageData as IGatsbyImageData
  const jesu = data.jesu.childImageSharp.gatsbyImageData as IGatsbyImageData
  const lara = data.lara.childImageSharp.gatsbyImageData as IGatsbyImageData
  const manu = data.manu.childImageSharp.gatsbyImageData as IGatsbyImageData
  const pablo = data.pablo.childImageSharp.gatsbyImageData as IGatsbyImageData
  const tobal = data.tobal.childImageSharp.gatsbyImageData as IGatsbyImageData
  const turu = data.turu.childImageSharp.gatsbyImageData as IGatsbyImageData
  const matias = data.matias.childImageSharp.gatsbyImageData as IGatsbyImageData

  return {
    esti,
    oliver,
    gabriel,
    benjamin,
    fran,
    ignacia,
    jesu,
    lara,
    manu,
    pablo,
    tobal,
    turu,
    matias,
  }
}
