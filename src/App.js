import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Layout from './containers/Layout/Layout';

class App extends Component {

  render() {
    return (
      <Layout />
    );
  }
}

export default App;
