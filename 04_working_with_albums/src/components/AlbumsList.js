import React, { Component } from './node_modules/react';
import { Header, List, Segment } from './node_modules/semantic-ui-react';
import { NavLink } from './node_modules/react-router-dom';

export default class AlbumsList extends Component {  
    albumItems() {
        return this.props.albums.sort(makeComparator('name')).map(album =>
            <List.Item key={album.id}>
                <NavLink to={`/albums/${album.id}`}>{album.name}</NavLink>
            </List.Item>
        );
    }

    render() {
    return (
        <Segment>
            <Header as='h3'>My Albums</Header>
            <List divided relaxed>
                {this.albumItems()}
            </List>
        </Segment>
    );
    }
}



function makeComparator(key, order='asc') {
return (a, b) => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const aVal = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const bVal = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (aVal > bVal) comparison = 1;
    if (aVal < bVal) comparison = -1;

    return order === 'desc' ? (comparison * -1) : comparison;
};
}