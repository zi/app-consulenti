import React, { Component } from 'react';
import './App.scss';
import logo from './logo.svg';
import { getCategories } from './wp-api/woocommerce';

class App extends Component {
  constructor(props) {
    super(props);
    this.testAPI();
  }

  testAPI() {
    getCategories();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
