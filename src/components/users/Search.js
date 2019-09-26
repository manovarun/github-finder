import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/GithubContext';

const Search = ({ clearUsers, showClear, setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onSearchChange = e => {
    setText(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something to search', 'light');
    } else {
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
        {showClear && (
          <button className="btn btn-block btn-light" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
