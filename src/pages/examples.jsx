import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  // console.log(props)
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>examples page</p>
      <Header />
      <HeaderStatic />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query SecondQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default examples
