import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

class UsersPage extends Component {
  state = { users:['sssss'] };
  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json(), err => console.log(err))
      .then(json => this.setState({ users: json }), err => console.log(err));
  }
  render() {
    console.log(this.state.users,'render');
    return (
      <div>
        Users
        { this.state.users.map((item, index) => <li key={index}><a href={`#/users/${index + 1}`}>
          User {index+1}:{item.name}
          </a></li>)}
      </div>
    );
  }


}

export default UsersPage;
