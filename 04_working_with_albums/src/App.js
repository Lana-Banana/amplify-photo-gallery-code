/* eslint-disable import/first */
// src/App.js

import React, { Component } from './node_modules/react';
import { BrowserRouter as Router, Route, NavLink } from './node_modules/react-router-dom';
import { Grid } from './node_modules/semantic-ui-react';
import { withAuthenticator } from './node_modules/aws-amplify-react';
import Amplify from './node_modules/aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

import NewAlbum from './components/NewAlbum';
import AlbumsListLoader from './components/AlbumsListLoader';
import AlbumDetailsLoader from './components/AlbumDetailsLoader';

class App extends Component { 
    render() { 
        return (
          <Router>
            <Grid padded>
              <Grid.Column>
                <Route path="/" exact component={NewAlbum}/>
                <Route path="/" exact component={AlbumsListLoader}/>

                <Route
                  path="/albums/:albumId"
                  render={ () => <div><NavLink to='/'>Back to Albums list</NavLink></div> }
                />
                <Route
                  path="/albums/:albumId"
                  render={ props => <AlbumDetailsLoader id={props.match.params.albumId}/> }
                />
              </Grid.Column>
            </Grid>
          </Router>
        );
    }
}

export default withAuthenticator(App, { includeGreetings: true });