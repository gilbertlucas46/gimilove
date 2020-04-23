import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Title from './ui/titles.ui'
import styled from 'styled-components'
import Wrapper from './wrapper.component'

const AboutCard  = styled.div`
  margin: auto;
  @media (min-width: 768px) {
    width: 86%;
    padding: 0 1em;
  }
  .imageContainer {
    margin: auto;
    overflow: hidden;
    @media (max-width: 767px) {
      max-width: 120px;
      max-height: 120px;
      border-radius: 120px;
    }
    @media (min-width: 768px) {
      max-width: 370px;
      max-height: 370px;
      border-radius: 370px;
    }
  }
  .captionContainer {
    text-align: center;
    h4 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 1.6em;
      color: #323232;
      margin-bottom: .6em;
    }
    p {
      font-family: 'Noto Serif', serif;
      color: #707070;
      font-size: .7em;
      line-height: 1.8em;
    }
  }
`;

const CardContents = styled.div`
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 767px) {
    grid-row-gap: 2em;
  }
`;

const ABOUT_QUERY = graphql`
  query ABOUT_QUERY {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "_data/(about)/.*.md$/"}}
  ) {
    edges {
      node {
        frontmatter {
          about {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 370) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const About = ({location}) => {
  return (
    <StaticQuery
      query={ABOUT_QUERY}
      render={({ allMarkdownRemark }) => (
        <Wrapper id="about">
          <Title>About Us</Title>
          <CardContents>
            {allMarkdownRemark.edges.map((edge) => {
              const { frontmatter } = edge.node;
              return (
                <AboutCard key={frontmatter.about.title}>
                  <div className="imageContainer">
                    <Img fluid={frontmatter.about.image.childImageSharp.fluid} />
                  </div>
                  <div className="captionContainer">
                    <h4>{frontmatter.about.title}</h4>
                    <p>{frontmatter.about.text}</p>
                  </div>
                </AboutCard>
              )
            })}
          </CardContents>
        </Wrapper>
      )}
    />
  )
}

export default About
