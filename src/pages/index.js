import * as React from "react"
import '../styles/styles.scss'
import Landing from "../components/landing"
import Layout from "../components/layout"



const IndexPage = () => {
  return (
    <Layout pageTitle="SashaCorp">
       <Landing />
    </Layout>
      
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
