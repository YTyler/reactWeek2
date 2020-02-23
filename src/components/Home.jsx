import React from 'react';

function Home() {
  const homeStyle = {
    backgroundColor: '#574B21',
    textAlign: 'center',
    border: '1px solid black',
    borderRadius: '15px',
    boxShadow: '0px 0px 10px black',
    fontSize: '48px',
    margin: '5px',
    paddingTop: '5px',
    paddingBottom: '10px',
  }
  return (
    <div style={homeStyle}>
      <p>Home Page</p>
    </div>
  );
}

export default Home;
