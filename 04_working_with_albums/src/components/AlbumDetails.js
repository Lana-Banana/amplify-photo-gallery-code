import React, { Component } from './node_modules/react';
import { Segment, Header } from './node_modules/semantic-ui-react';

export default class AlbumDetails extends Component {
    render() {
        return (
            <Segment>
                <Header as='h3'>{this.props.album.name}</Header>    
                <p>TODO: Allow photo uploads</p>
                <p>TODO: Show photos for this album</p>
            </Segment>
        );
    }
}
