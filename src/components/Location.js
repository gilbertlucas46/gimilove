import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Title from './ui/Titles'
import styled from 'styled-components'
import Wrapper from './Wrapper'

const LocationCard  = styled.div`
    display: grid;
    margin-top: 2em;
    grid-column-gap: 1em;
    @media (min-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 766px) {
      grid-template-columns: 1fr;
    }
`;

const CardContents = styled.div`
  margin-top: 2em;
  text-align: center;
`;

const Location_QUERY = graphql`
  query Location_QUERY {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "_data/(location)/.*.md$/"}}
  ) {
    edges {
      node {
        frontmatter {
          loc {
            name
          }
          contact {
            name
          }
        }
      }
    }
  }
}
`;

const Location = () => {
  return (
    <StaticQuery
      query={Location_QUERY}
      render={({ allMarkdownRemark }) => (
        <Wrapper>
          <Title>Location</Title>
          <CardContents>
            {allMarkdownRemark.edges.map((edge) => {
              const { frontmatter } = edge.node;
              return (
                <LocationCard key={frontmatter.loc.title}>
                  {/*<div className="imageContainer">
                    <Img fluid={frontmatter.Location.image.childImageSharp.fluid} />
                  </div>
                  <div className="captionContainer">
                    <h4>{frontmatter.Location.title}</h4>
                    <p>{frontmatter.Location.text}</p>
              </div>*/}
                <div>
                  <p>{frontmatter.loc.name}</p>
                </div>
                <div>
                  <p>{frontmatter.contact.name}</p>
                </div>
                </LocationCard>
              )
            })}
          </CardContents>
        </Wrapper>
      )}
    />
  )
}

export default Location
