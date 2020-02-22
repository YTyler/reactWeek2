import React from 'react';

function Keg(props) {

  const kegStyle = {
    textAlign: 'left',
    border: '1px solid black',
    margin: '10px',
    paddingLeft: '30px',
    borderRadius: '15px',
    backgroundColor: '#e8e8e8',
    boxShadow: '-7.5px 6px 0px black',
  }

  return (
    <div style={kegStyle}>
    <h3>{props.name}</h3>
    <p>{props.brand}</p>
    <p>${props.price}</p>
    <p>ABV: {props.content}%</p>

    </div>
  );
}

export default Keg;
