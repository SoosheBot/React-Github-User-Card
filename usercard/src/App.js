import React, { Component } from "react";
import UserCard from "./components/UserCard";

import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then(res => {
        this.setState({
          users: res.data
        });
        console.log("the cDM res is", res);
      })
      .catch(err => console.log("the cDM error", err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.users !== prevState.users) {
      console.log("inside first if?");
      if (this.state.followers === "") {
        console.log('inside second if')
        axios
          .get("https://api.github.com/users")
          .then(res => {
            // res.data.message
            this.setState({
              users: res.data,
              followers: "users"
            });
            console.log("cDU res is", res);
          })
          .catch(err => console.log("cDU error is", err));
      }
    }
  }

  handleChanges = e => {
    this.setState({
      followers: e.target.value
    });
  };

  fetchFollowers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.followers_url}`)
      .then(res => {
        
        this.setState({
          users: res.data
        });
        console.log(` followers are`, res);
      })
      .catch(err => console.log("fetchFollowers error is", err));
  };

  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
        {/* <input type='text' value={this.state.followers} onChange={this.handleChanges} /> */}
        {this.state.users.map(user => {
          return (
            <div className="users" key={user.id}>
              <UserCard user={user} />
              <button onClick={this.fetchFollowers}>Fetch Followers</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
