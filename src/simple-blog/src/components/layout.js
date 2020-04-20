/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  // Should add social footer
  return (
    <>
      
      <div
        className="site-container"
      >
        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
        <div className="content-container">
          <main className='site-content'>{children}</main>
        </div>
        <div className='footer'>
            <div className='footer-children'>
              <hr />
              <p className='copyright'>© {new Date().getFullYear()}, name here</p>
              <div className="social">
                <a href="#">twitter</a> | <a href='#'>instagram</a>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
