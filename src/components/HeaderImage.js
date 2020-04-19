import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import styled from 'styled-components'
import Img from 'gatsby-image'
import { DividerWhite } from './ui/Divider'
import WeddingCountdown from './ui/WeddingCountdown'


const HeaderImageContainer = styled.div`
  height: 100vh;
  position: relative;
  .gatsby-image-wrapper {
    height: 100vh;
  }
  h1 {
    font-family: 'Leckerli One', cursive;
    color: white;
    font-size: 6.9em;
    line-height: 1;
    margin: 0;
    font-weight: normal;
    
  }
  h2 {
    font-family: 'Noto Serif', serif;
    color: white;
    font-size: 2em;
    line-height: 1;
    text-transform: uppercase;
    
    margin: .5em 0 0;
    font-weight: normal;
  }
  h3 {
    font-family: 'Noto Serif', serif;
    color: white;
    font-size: 1.8em;
    line-height: 1;
    text-transform: uppercase;
    
    margin: 1em 0 0;
    font-weight: normal;
  }
  .divider {
    margin: 1.5em 0;
  }
  @media  (min-width: 768px) {
    h1 {
      letter-spacing: 1px;
    }
    h2, h3 {
      letter-spacing: 10px;
    }
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 1em;
      letter-spacing: 5px;
    }
    h3 {
      font-size: 1.4em;
      letter-spacing: 5px;
    }
  }
`;

const HeaderCaptions = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 17em;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

const CountdownContainer = styled.div`
  width: 100%;
  bottom: 2em;
  margin-top: 120px;
  position: absolute;
  bottom: 2em;
  @media (max-width: 767px) {
    bottom:0;
  }
`;

const HEADER_IMAGE_QUERY = graphql`
  query HEADER_IMAGE_QUERY {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "_data/(header)/.*.md$/"}}
  ) {
    edges {
      node {
        frontmatter {
          header_module {
            title
            normaldate: date(formatString: "MM/DD/YYYY")
            formatteddate: date(formatString: "MMMM Do, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 2256) {
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

const HeaderImage = () =>  {
  return (
    <StaticQuery
    query={HEADER_IMAGE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        {allMarkdownRemark.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <HeaderImageContainer key={frontmatter.header_module.title}>
              <Img fluid={frontmatter.header_module.image.childImageSharp.fluid} />
              <HeaderCaptions>
                <h1>{frontmatter.header_module.title}</h1>
                <h2>Are Getting Married</h2>
                <div className="divider divider---white">
                  <DividerWhite/>
                </div>
                <h3>{frontmatter.header_module.formatteddate}</h3>
              </HeaderCaptions>
              <CountdownContainer><WeddingCountdown date={frontmatter.header_module.normaldate}/></CountdownContainer>
            </HeaderImageContainer>
          )
        })}
      </>
    )}
  />
  )
};

export default HeaderImage
