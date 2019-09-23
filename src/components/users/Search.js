import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSearchChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something to search', 'light');
    } else {
      this.props.searchUsers(this.state.text);
    }
    this.setState(() => ({
      text: ''
    }));
  };

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onSearchChange}
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
  }
}

export default Search;
