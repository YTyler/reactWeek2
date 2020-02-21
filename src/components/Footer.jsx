import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#574B21',
    textAlign: 'center',
    border: '1px solid black',
    boxShadow: '0px 0px 10px black',
    color: 'white',
    fontSize: '7px',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  }
  return (
    <div style={footerStyle}>
      <h1>Copyright 2020</h1>
      <hr></hr>
      <h1>Tyler Yates</h1>
    </div>
  );
}

export default Footer;
