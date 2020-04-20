import React from "react"
import RecentPosts from '../components/recent-posts'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.css'

// need to add a recent posts section
const IndexPage = () => (
  <Layout>
    <div className='row'>
      <div className='column left'>
        <SEO title="Home" />
        <h1>hello world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum felis, ornare et sapien id, varius fermentum odio. Ut porttitor bibendum metus, sit amet ultrices lectus vestibulum quis. Aliquam ac tortor ut lacus semper tincidunt in at nunc. Pellentesque vel est tortor. Nunc suscipit vulputate ex. Nunc laoreet, ante et tincidunt dignissim, lacus mauris pretium velit, id consectetur nibh massa non massa. Suspendisse vehicula vulputate hendrerit. Aenean fringilla sed magna et ultrices. Class aptent taciti sociosqu ad litora torquent 
        </p>
      </div>
      <div className='column right'>
        <RecentPosts data='data' id='recent-posts'></RecentPosts>
      </div>
    </div>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`