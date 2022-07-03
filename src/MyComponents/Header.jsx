

import PropTypes from 'prop-types'

import React from 'react'


function Header(props) {
    const myStyle = {
        textAlign: 'text-center', 
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 200,
       
      };
  return (
  

        
<nav  className="navbar navbar-dark bg-info">
  <a style={myStyle} className="navbar-brand text-center" >{props.title}</a>

</nav>
 
  )
}
Header.defaultProps = {
  title : "Your Title here",
  searchBar : true
}
Header.propTypes ={
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
export default Header