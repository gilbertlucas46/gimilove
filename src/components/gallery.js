import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Title from '../components/ui/titles'
import styled from 'styled-components'
import Wrapper from './wrapper'


const GalleryCard  = styled.div`
  margin: .2em;
`;

const CardContents  = styled.div`
  /* margin: 1em; */
`;

const GALLERY_QUERY = graphql`
  query GALLERY_QUERY {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "_data/(gallery)/.*.md$/"}}
  ) {
    edges {
      node {
        frontmatter {
          thumbnail {
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
`;

const Gallery = () => {
  return (
    <StaticQuery
      query={GALLERY_QUERY}
      render={({ allMarkdownRemark }) => (
        <Wrapper>
          <Title>Gallery</Title>
          <CardContents>
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 3, 900: 5}}
                gutter='15px'
            >
            <Masonry>
              {allMarkdownRemark.edges.map((edge) => {
                const { frontmatter } = edge.node;
                return (
                  <GalleryCard>
                    <Img fluid={frontmatter.thumbnail.childImageSharp.fluid} />
                  </GalleryCard>
                )
              })}
            </Masonry>
            </ResponsiveMasonry>
          </CardContents>
        </Wrapper>
      )}
    />
  )
}

export default Gallery
