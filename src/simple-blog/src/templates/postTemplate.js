import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import './post.css'

// Add in a download post option if somebody wants to print it
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
          <Link to="/blog">&larr; posts</Link>
          <div className="blog-post">
              <h1 className="post-header">{frontmatter.title}</h1>
              <div className='sub-title'>
              <p className="date">{frontmatter.date}</p>
              </div>
              <hr></hr>
              <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
              />
          </div>
          <p>-- end</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`