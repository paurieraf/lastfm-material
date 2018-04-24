import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Skeleton from './components/Skeleton/Skeleton';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Skeleton/>
      </MuiThemeProvider>
    );
  }
}

export default App;
