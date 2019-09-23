import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import './App.css';

export class App extends Component {
  state = {
    users: [],
    loading: false
  };

  componentDidMount = async () => {
    this.setState(() => ({ loading: true }));

    const res = await Axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState(() => ({ users: res.data, loading: false }));
  };

  searchUsers = async text => {
    this.setState(() => ({ loading: false }));

    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState(() => ({ users: res.data.items, loading: false }));
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { loading, users } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
