import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import About from '../components/About'
import Gallery from '../components/Gallery'
import Location from '../components/Location'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
    <Gallery/>
    <Location/>
  </Layout>
)

export default IndexPage
