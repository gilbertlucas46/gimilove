import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import About from '../components/About'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import RSVP from '../components/RSVP'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
    <Gallery/>
    <Location/>
    <RSVP/>
  </Layout>
)

export default IndexPage
