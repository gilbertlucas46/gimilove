import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Twitter from './twitter.utils';
import Facebook from './facebook.utils';


const SEO = ({ title, description, meta, keywords, lang, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          facebookAppID,
        },
      },
    }) => {
      // const img = image[0] === null ? defaultImage : image[0];
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
      }
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}
          htmlAttributes={{
            lang,
          }}
          meta={[
            {
              name: `description`,
              content: seo.description,
            },
            {
              name: `image`,
              content: seo.image,
            },
            {
              property: `og:title`,
              content: seo.title,
            },
            {
              property: `og:description`,
              content: seo.description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:image`,
              content: seo.image,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content:twitterUsername,
            },
            {
              name: `twitter:title`,
              content: seo.title,
            },
            {
              name: `twitter:description`,
              content: seo.description,
            },
            {
              name: `twitter:image`,
              content: seo.image,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
          />
          <Facebook
            pageUrl={seo.url}
            type={article ? 'article' : null}
            title={seo.title}
            description={seo.description}
            image={seo.image}
            appID={facebookAppID}
          />
          <Twitter
          username={twitterUsername}
          title={seo.title}
          description={seo.description}
          image={seo.image}
        />
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername
          facebookAppID
      }
    }
  }
`
