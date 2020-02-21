import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const headerStyle = {
    backgroundColor: '#574B21',
    textAlign: 'center',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-evenly',
    boxShadow: '0px 0px 10px black',
    fontSize: '30px',
    paddingTop: '5px',
    paddingBottom: '10px',
  }
  return (
    <div style={headerStyle}>
      <Link to="/menu">Menu</Link>
      |
      <Link to="/">About Us</Link>
      |
      <Link to="/add">Add Keg</Link>
    </div>
  );
}

export default Header;
