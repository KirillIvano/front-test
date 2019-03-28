import React, { Component } from 'react';
import Shedule from './shedule/shedule.component';
import './temp';
import { connect } from 'react-redux';
import Header from './header/header.component';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Shedule/>
      </div>
    );
  }
}

export default App;
