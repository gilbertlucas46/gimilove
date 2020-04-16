import React from 'react'
import { StaticQuery } from "gatsby"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Title from '../components/ui/titles'
import styled from 'styled-components'
import Wrapper from '../components/wrapper'
import Lightbox from '../components/lightbox';
import { GALLERY_QUERY } from '../components/gallery'

const GalleryCard  = styled.div`
  margin: .2em;
`;

const CardContents  = styled.div`
  
`;

const Gallery = () => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
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
