import React from 'react';

function KegForm() {
  const kegFormStyle = {
    backgroundColor: '#574B21',
    textAlign: 'left',
    border: '1px solid black',
    boxShadow: '0px 0px 10px black',
    fontSize: '20px',
    margin: '5px',
    padding: '0px 10px 20px 20px',
    color: 'gold',
    textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
  }
  const titleStyle = {
    textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
    color: 'black',
    textAlign: 'center',
    fontSize: '40px'
  }

  return (
    <div style={kegFormStyle}>
      <form>
      <h1 style={titleStyle}><u>Enter Info for the New Keg</u></h1>
      <label for="name">Name:  </label><br></br>
      <input type="text" name="name" ></input><br></br>
      <label for="brand">Brand:</label><br></br>
      <input type="text" name="brand" ></input><br></br>
      <label for="price">Price:</label><br></br>
      <input type="text" name="price" ></input><br></br>
      <label for="alcohol">Alcohol Content:</label><br></br>
      <input type="text" name="alcohol" ></input><br></br>
      </form>
    </div>
  );
}

export default KegForm;
