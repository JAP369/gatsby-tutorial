import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default () => {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>home page</h1>
      <ExampleButton>click me</ExampleButton>
    </Layout>
  )
}
