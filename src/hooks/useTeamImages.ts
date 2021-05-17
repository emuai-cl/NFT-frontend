import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
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
    }
  `)

  const oliver = data.oliver.childImageSharp.gatsbyImageData as IGatsbyImageData
  const gabriel = data.gabriel.childImageSharp
    .gatsbyImageData as IGatsbyImageData
  const benjamin = data.benjamin.childImageSharp
    .gatsbyImageData as IGatsbyImageData

  return { oliver, gabriel, benjamin }
}
