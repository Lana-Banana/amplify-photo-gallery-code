import React from 'react';
import { Header, Icon, List} from 'semantic-ui-react';
const AlbumMembers = (props) => (
  <div>
    <Header as='h4'>
      <Icon name='user circle' />
      <Header.Content>Members</Header.Content>
    </Header>
    {
      props.members
      ? <List bulleted> 
          {props.members && props.members.map((member) => <List.Item key={member}>{member}</List.Item>)}
        </List>
      : 'No members yet (besides you). Invite someone below!'
    }
  </div>
);

export default AlbumMembers;