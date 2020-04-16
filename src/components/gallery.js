import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

import Title from '../components/ui/titles'
import styled from 'styled-components'
import Wrapper from './wrapper'
import Lightbox from './lightbox';
import TriangleUp from '../images/triangle-up.svg';

const GalleryCard  = styled.div`
  margin: .2em;
`;

const Arrowup = styled.div`

`;

const Arrowdown = styled.div`

`;

const GalleryContainer  = styled.div`
  background-color: #F5F4ED;
  position: relative;
  &:before {
    background: linear-gradient(45deg,#ffffff 16px,transparent 0),linear-gradient(-45deg,#ffffff 16px,transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 32px 32px;
    content: " ";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 32px;
    transform: rotate(180deg);
  }
  &:after {
    background: linear-gradient(45deg,#ffffff 16px,transparent 0),linear-gradient(-45deg,#ffffff 16px,transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 32px 32px;
    content: " ";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 32px;
  }
`;

const CardContents  = styled.div`
  display: grid;
  margin-top: 2em;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 767px) and (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 650px) and (max-width: 766px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 649px) {
    grid-template-columns: 1fr;
  }
  .gatsby-image-wrapper {
    max-height: 178px;
  }
`;

export const GALLERY_QUERY = graphql`
  query GALLERY_QUERY {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "_data/(gallery)/.*.md$/"}}, limit: 12) {
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
        <GalleryContainer className='galleryContainer'>
          <Wrapper>
            <Title>Gallery</Title>
            <CardContents>
              {allMarkdownRemark.edges.map((edge, index) => {
                const { frontmatter } = edge.node;
                return (
                  <div key={index}>
                    <GalleryCard onClick={openModal}>
                      <Lightbox Images={frontmatter}/>
                    </GalleryCard>
                  </div>
                )
              })}
            </CardContents>
          </Wrapper>
        </GalleryContainer>
      )}
    />
  )
}



export default Gallery
