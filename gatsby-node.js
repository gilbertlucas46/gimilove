const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
      posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }      
      }   
    `).then(results => {

      results.data.posts.edges.forEach(({node}) => {
        const slug = `${node.frontmatter.title}`
        createPage({
          path: `/posts/${slug.split(' ').join('-').toLowerCase()}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: `${slug}`,
          }
        })
      })
      resolve();
    })
  });
}
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};