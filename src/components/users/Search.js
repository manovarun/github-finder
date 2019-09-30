import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/GithubContext';

const Search = () => {
  const [text, setText] = useState('');

  const githubContext = useContext(GithubContext);

  const { users, clearUsers } = githubContext;

  const onSearchChange = e => {
    setText(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (text === '') {
      // setAlert('Please enter something to search', 'light');
    } else {
      // searchUsers(text);
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onSearchChange}
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        {users.length > 0 && (
          <button className="btn btn-block btn-light" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
