import React from 'react';
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header.component";

import SEO from "./utils/seo/seo.utils";
import GlobalStyles from './ui/global.ui'
import Footer from './footer.component'

const MainLayout = styled.main`
  
`;

const SEO_QUERY = graphql`
  query SEO_QUERY {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(metadata)/.*.md$/"}}
  ){
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
          metadata {
            siteUrl
            pagetitle
            author
            url
            author
            metatitle
            metadesc
            titleTemplate
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  src
                }
              }
            }
          }
          menuLinks {
            name
            link
          }
        }
      }
    }
  }
}
`;

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={SEO_QUERY}
      render={({ allMarkdownRemark }) => (
        <>
          {allMarkdownRemark.edges.map((edge) => {
            const { frontmatter } = edge.node;
            const imageSource = frontmatter.metadata.image.childImageSharp.fluid.src;
            return (
              <div key={frontmatter.header_module.normaldate}>
                <Header 
                menuLinks={frontmatter.menuLinks} 
                headerData={frontmatter.header_module} 
                location={location}/>
                <MainLayout>
                <SEO
                title={frontmatter.metadata.metatitle}
                description={frontmatter.metadata.metadesc}
                image={imageSource[0]}
                pathname={location.pathname}
                keywords={[
                  `Gilbert and Mia Wedding`,
                ]}
              />
                  {children}
                </MainLayout>
                <Footer/>
                <GlobalStyles/>
              </div>
            )
          })}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
Layout.defaultProps = {
  location: {}
};

export default Layout;