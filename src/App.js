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
      masterKegList: []
    };
  }




  render() {
    return (
      <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/menu' component={KegList} />
      <Route exact path='/add' component={KegForm} />
      </Switch>
      <Footer/>
      </div>
    );
  }
}
export default App;
