// import React from 'react'
// import { StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

// import Title from '../components/ui/titles'
// import styled from 'styled-components'
// import Wrapper from './wrapper'

// const GalleryCard  = styled.div`
  
// `;

// const CardContents = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-column-gap: 1em;
// `;

// const Gallery_QUERY = graphql`
//   query Gallery_QUERY {
//   allMarkdownRemark(
//     filter: {fileAbsolutePath: {regex: "_data/(Gallery)/.*.md$/"}}
//   ) {
//     edges {
//       node {
//         frontmatter {
//           Gallery {
//             title
//             text
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 370) {
//                   ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;

// const Gallery = () => {
//   return (
//     <StaticQuery
//       query={Gallery_QUERY}
//       render={({ allMarkdownRemark }) => (
//         <Wrapper>
//           <Title>Gallery Us</Title>
//           <CardContents>
//             {allMarkdownRemark.edges.map((edge) => {
//               const { frontmatter } = edge.node;
//               return (
//                 <GalleryCard>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis delectus fugiat quos molestias iure adipisci unde vel hic veniam ipsum nihil porro possimus, odit minus fugit quidem! Deleniti, ipsam fugiat!
//                 </GalleryCard>
//               )
//             })}
//           </CardContents>
//         </Wrapper>
//       )}
//     />
//   )
// }

// export default Gallery

import React from 'react'

 const Gallery = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi saepe modi nam mollitia non excepturi facilis accusantium. Officia impedit maiores, ipsam rem accusantium amet hic voluptatem delectus nostrum quasi.
    </div>
  )
}

export default Gallery