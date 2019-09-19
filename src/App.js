import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <User />
        </div>
      </Fragment>
    );
  }
}

export default App;
