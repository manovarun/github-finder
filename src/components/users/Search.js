import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const [text, setText] = useState('');

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, clearUsers } = githubContext;

  const onSearchChange = e => {
    setText(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something to search', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
      alertContext.removeAlert();
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

export default Search;
