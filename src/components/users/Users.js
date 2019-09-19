import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={usersStyle}>
        {users.map(user => (
          <UserItem {...user} key={user.id} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
