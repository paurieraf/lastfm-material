import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Layout from './containers/Layout/Layout';
import ArtistsPage from './pages/Artist/ArtistsPage/ArtistsPage';
import AlbumsPage from './pages/Album/AlbumsPage/AlbumsPage';
import TracksPage from './pages/Track/TracksPage/TracksPage';
import Body from './containers/Body/Body';
import AboutPage from './pages/AboutPage/AboutPage';
import ArtistDetailPage from './pages/Artist/ArtistDetailPage/ArtistDetailPage';

class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/artists" exact component={ArtistsPage} />
          <Route path="/artists/:mbid" component={ArtistDetailPage} />
          <Route path="/albums" exact component={AlbumsPage} />
          <Route path="/tracks" exact component={TracksPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
