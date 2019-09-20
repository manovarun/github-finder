import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  onSearchChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  render() {
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
        </form>
      </div>
    );
  }
}

export default Search;
