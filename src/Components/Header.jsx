import React from 'react'
import '../App.css';

/* header component */

const Header = (props) => {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <a className="navbar-brand text-center header" >{props.title}</a>
    </nav>
  )
}

export default Header