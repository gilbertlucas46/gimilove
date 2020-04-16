import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Title from './ui/Titles'
import styled from 'styled-components'
import Wrapper from './Wrapper'

const AboutCard  = styled.div`
  width: 86%;
  padding: 0 1em;
  margin: auto;
  .imageContainer {
    max-width: 370px;
    max-height: 370px;
    margin: auto;
    border-radius: 370px;
    overflow: hidden;
  }
  .captionContainer {
    text-align: center;
    h4 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 1.6em;
      color: #323232;
      margin-bottom: 0;
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
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
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

const About = () => {
  return (
    <StaticQuery
      query={ABOUT_QUERY}
      render={({ allMarkdownRemark }) => (
        <Wrapper>
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
