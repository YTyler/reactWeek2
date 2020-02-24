import React from 'react';
import Keg from './Keg'

function KegList(props) {

  const kegListStyle = {
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
  const productListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: '5vw',
    fontSize: '25px',
  }

  const masterKegList = [
    {
      name: 'name1',
      brand: 'brand1',
      price: '1.2',
      content: '1',
      key: 1
    },
    {
      name: 'name2',
      brand: 'brand2',
      price: '2.00',
      content: '2',
      key: 2
    },
    {
      name: 'name3',
      brand: 'brand3',
      price: '3.00',
      content: '3',
      key: 3
    },
    {
      name: 'name4',
      brand: 'brand4',
      price: '4.00',
      content: '4',
      key: 4
    }
  ]
  return (
  <div style={kegListStyle}>
    <h1>Keg List</h1>
    <div style={productListStyle}>
      {props.masterKegList.map((keg, index) =>
        <Keg
        name={keg.name}
        brand={keg.brand}
        price={Number(keg.price).toFixed(2)}
        content={Number(keg.content).toFixed(1)}
        />
      )
    }
    </div>
  </div>
);
}

export default KegList;
