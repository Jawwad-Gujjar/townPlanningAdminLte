
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainrouter from '../src/components/config/router'
class App extends Component {
  render() {

    return (
      <div className="wrapper">
        <Mainrouter/>
      </div>
     );
  }
}

export default App;
