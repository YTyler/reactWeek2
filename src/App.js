import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import KegForm from './components/KegForm.jsx';
import KegList from './components/KegList.jsx';
import Home from './components/Home.jsx';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
    };
    this.createKeg = this.createKeg.bind(this);
  }

  createKeg(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg)
    this.setState({masterKegList: newMasterKegList})
  }


  render() {
    return (
      <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><Home/>} />
      <Route exact path='/menu' component={KegList} />
      <Route exact path='/add' render={()=><KegForm location={this.state.location} createKeg={this.createKeg} masterKegList={this.state.masterKegList} />} />
      </Switch>
      <Footer/>
      </div>
    );
  }
}
export default App;
