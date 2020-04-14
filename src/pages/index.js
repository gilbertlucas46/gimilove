import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about'
import Gallery from '../components/gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
    <Gallery/>
  </Layout>
)

export default IndexPage
