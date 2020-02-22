import React from 'react';


function KegForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _content = null;

  const kegFormStyle = {
    backgroundColor: '#574B21',
    textAlign: 'center',
    border: '1px solid black',
    boxShadow: '0px 0px 10px black',
    fontSize: '20px',
    margin: '5px',
    marginRight: '10px',
    marginLeft: '10px',
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
  const buttonStyle = {
    fontWeight: 'bold',
    margin: '5px',
  }
  const handleKegSubmission = (e) =>  {
    e.preventDefault();
    props.createKeg({name: _name.value, brand: _brand.value, price: _price.value, content: _content.value})
  }


  return (
    <div style={kegFormStyle}>
      <form onSubmit={handleKegSubmission}>
      <h1 style={titleStyle}><u>Enter Info for the New Keg</u></h1>
      <input type="text" placeholder="Name" ref={(input) => {_name = input}} ></input>
      <br></br>
      <input type="text" placeholder="Brand" ref={(input) => {_brand = input}}></input>
      <br></br>
      <input type="number" placeholder="Price (ex: 6.50)" step='0.01' ref={(input) => {_price = input}}></input>
      <br></br>
      <input type="number" placeholder="Alcohol Content (ex: 5.5)" step='0.1' ref={(input) => {_content = input}}></input>
      <br></br>
      <br></br>
      <button type='submit' style={buttonStyle}>Create</button>
      </form>
    </div>
  );
}

export default KegForm;
