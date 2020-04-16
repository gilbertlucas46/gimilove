import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import About from '../components/About'
import Gallery from '../components/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
    <Gallery/>
  </Layout>
)

export default IndexPage
