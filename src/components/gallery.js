import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Title from '../components/ui/titles'
import styled from 'styled-components'
import Wrapper from './wrapper'
import Lightbox from './lightbox';

const GalleryCard  = styled.div`
  margin: .2em;
`;

const CardContents  = styled.div`
  /* margin: 1em; */
`;

const CardModal  = styled.div`
  /* margin: 1em; */
`;

const GALLERY_QUERY = graphql`
  query GALLERY_QUERY {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "_data/(gallery)/.*.md$/"}}, limit: 15) {
    edges {
      node {
        frontmatter {
          thumb: thumbnail {
            childImageSharp {
              fluid(maxWidth: 370) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          full: thumbnail {
            childImageSharp {
              fluid(maxWidth: 1000) {
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
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
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
            {allMarkdownRemark.edges.map((edge, index) => {
              const { frontmatter } = edge.node;
              return (
                <div key={index}>
                  <GalleryCard onClick={openModal}>
                    {/* <Img fluid={frontmatter.thumb.childImageSharp.fluid} /> */}
                    <Lightbox Images={frontmatter}/>
                  </GalleryCard>
                </div>
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
