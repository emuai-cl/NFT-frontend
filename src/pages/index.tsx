import * as React from "react"
import { graphql,  PageProps } from "gatsby"

import Seo from "../components/seo"
import Car from "../components/car"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>>  = ({ data, path }) => (
  <>
    <Seo title="Home" />
    <Car/>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
  </>
)

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

