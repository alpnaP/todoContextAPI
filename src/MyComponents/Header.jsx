
import PropTypes from 'prop-types'

import React from 'react'
import '../App.css';

function Header(props) {

  return (



    <nav className="navbar navbar-dark bg-secondary">
      <a className="navbar-brand text-center header" >{props.title}</a>

    </nav>

  )
}
Header.defaultProps = {
  title: "Your Title here",
  searchBar: true
}
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
export default Header