import React, { Component } from 'react';
import { Segment, Header, Form } from 'semantic-ui-react';
import { Auth } from 'aws-amplify';
import S3ImageUpload from './S3ImageUpload';
import PhotosList from './PhotosList';
import AlbumMembers from './AlbumMembers';
import AddUsernameToAlbum from './AddUsernameToAlbum';

export default class AlbumDetails extends Component {

    async componentDidMount() {
        this.setState({
            currentUser: await Auth.currentAuthenticatedUser()
        });
    }
    render() {
        if (!this.props.album) return 'Loading album...';
        return (
            <Segment>
            <Header as='h3'>{this.props.album.name}</Header>
            {
                this.state.currentUser.username === this.props.album.owner
                &&
                <Segment.Group>
                    <Segment>
                        <AlbumMembers members={this.props.album.members} />
                    </Segment>
                    <Segment basic>
                        <AddUsernameToAlbum albumId={this.props.album.id} />
                    </Segment>
                </Segment.Group>
            }   
            <S3ImageUpload albumId={this.props.album.id}/>        
            <PhotosList photos={this.props.album.photos.items} />
            {
                this.props.hasMorePhotos && 
                <Form.Button
                onClick={this.props.loadMorePhotos}
                icon='refresh'
                disabled={this.props.loadingPhotos}
                content={this.props.loadingPhotos ? 'Loading...' : 'Load more photos'}
                />
            }
            </Segment>
        );
    }
}
