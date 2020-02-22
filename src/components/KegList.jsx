import React from 'react';


function KegList() {
  const kegListStyle = {
    backgroundColor: '#574B21',
    textAlign: 'center',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-evenly',
    boxShadow: '0px 0px 10px black',
    fontSize: '30px',
    margin: '5px',
    paddingTop: '5px',
    paddingBottom: '10px',
  }
  return (
    <div style={kegListStyle}>
    <h1>Keg List</h1>

    </div>
  );
}

export default KegList;
