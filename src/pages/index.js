import React from "react"

import Layout from "../components/layout.component"
import SEO from "../components/seo.component"
import About from '../components/about.component'
import Gallery from '../components/gallery.component'
import Location from '../components/location.component'
import RSVP from '../components/rsvp.component'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <About location={location}/>
    <Gallery/>
    <Location/>
    <RSVP/>
  </Layout>
)

export default IndexPage
