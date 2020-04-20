import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks}) => (
  <header
  >
    <div className='header-container'
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        display: 'flex',
        justifyItems: 'space-between',
        alignItems: 'center'
      }}
    >
      <h1 style={{ margin: 0, flex: 1 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          id='site-title'
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <nav>
          <ul style={{ marginBottom: 0, display: `flex`, flex: 1}}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: 'none',
                  padding: '1rem',
                }}
              >
                <Link style={{ color: 'white' }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
