import React from 'react'
import PostLink from './post-link'
import { StaticQuery } from 'gatsby'

const RecentPostsList = ({data: {
    allMarkdownRemark: { edges },
  },}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .slice(0,10)
        .map(edge => <li key={edge.node.id}><PostLink key={edge.node.id} post={edge.node} /></li>)
    
    return (
        <>
            <h3>Recent Posts:</h3>
            <ul id="recent-posts">
                {Posts}
            </ul>
        </>
    )
}

const RecentPosts = () => (
    <StaticQuery
        query={
            graphql`
            query {
                allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                    node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MM/DD/YY")
                        path
                        title
                    }
                    }
                }
                }
            }
            `
        }
        render={
            data => (
                <RecentPostsList data={data} />
            )
        }
    />
)

export default RecentPosts