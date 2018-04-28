import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Layout from './containers/Layout/Layout';
import ArtistsPage from './pages/ArtistsPage/ArtistsPage';
import AlbumsPage from './pages/AlbumsPage/AlbumsPage';
import Body from './containers/Body/Body';

class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/artists" component={ArtistsPage} />
          <Route path="/albums" component={AlbumsPage} />
          <Route path="/tracks" component={ArtistsPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
