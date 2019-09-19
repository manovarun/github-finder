import React, { Component } from 'react';
import UserItem from './UserItem';

export default class Users extends Component {
  render() {
    return (
      <div style={usersStyle}>
        {this.props.users.map(user => (
          <UserItem {...user} key={user.id} />
        ))}
      </div>
    );
  }
}

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
