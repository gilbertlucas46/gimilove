import React from 'react';
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./Header";

import GlobalStyles from './ui/Global'
import Footer from './Footer'

const MainLayout = styled.main`
  
`;

const SEO_QUERY = graphql`
  query SEO_QUERY {
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

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={SEO_QUERY}
      render={({ allMarkdownRemark }) => (
        <>
          {allMarkdownRemark.edges.map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <div key={frontmatter.header_module.normaldate}>
                <Header headerData={frontmatter.header_module} location={location}/>
                <MainLayout>
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