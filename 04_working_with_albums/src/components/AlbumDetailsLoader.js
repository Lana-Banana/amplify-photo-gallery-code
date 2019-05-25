import React, { Component } from './node_modules/react';
import { Connect } from './node_modules/aws-amplify-react';
import { graphqlOperation } from './node_modules/aws-amplify';
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
