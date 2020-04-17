import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import showdown from 'showdown'

import Wrapper from './Wrapper'

const converter = new showdown.Converter();

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
          {allMarkdownRemark.edges.map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <LocationCard key={frontmatter.loc.name}>
                <div>
                  <LocationIcon/>
                  <h3>Location</h3>
                  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontmatter.loc.name) }} />
                </div>
                <div>
                  <ContactIcon/>
                  <h3>Contact</h3>
                  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontmatter.contact.name) }} />
                </div>
              </LocationCard>
            )
          })}
        </Wrapper>
      )}
    />
  )
}

export default Location
