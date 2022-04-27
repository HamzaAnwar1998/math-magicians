/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Calculator />
      </div>
    );
  }
}

export default App;
