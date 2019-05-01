import React, { Component } from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';
import { GetAlbum } from './graphql';
import AlbumDetails from './AlbumDetails';

export default class AlbumDetailsLoader extends Component {
    render() {
        return (
            <Connect query={graphqlOperation(GetAlbum, { id: this.props.id })}>
                {({ data, loading }) => {
                    if (loading) { return <div>Loading...</div>; }
                    if (!data.getAlbum) return;
                    return <AlbumDetails album={data.getAlbum} />;
                }}
            </Connect>
        );
    } 
}
