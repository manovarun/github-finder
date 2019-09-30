import React, { useContext, useEffect } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { getInitialUsers, users, loading } = githubContext;

  useEffect(() => {
    getInitialUsers();
    //eslint-disable-next-line
  }, []);
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

// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired
// };

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
