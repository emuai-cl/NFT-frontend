import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { ToastContainer } from "react-toastify"

import Seo from "../components/seo"
import Car from "../components/car"
import Eth from "../components/eth"

import "react-toastify/dist/ReactToastify.css"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <>
    <Seo title="Home" />
    <Eth />
    <Car />
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <ToastContainer />
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
