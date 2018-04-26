import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Skeleton from './containers/Skeleton/Skeleton';

class App extends Component {

  render() {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
}

export default App;
