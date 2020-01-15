import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";

class User extends Component {
  state = {
    username: 'sooshebot'
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        this.setState({
          img: res.data.avatar_url,
          username: res.data.login
        });
        console.log("user cDM", res);
      })
      .catch(err => console.log("user cDM error:", err));
  }

  render() {
    return (
      <div>
        <UserCard img={this.state.img} username={this.state.username} />
      </div>
    );
  }
}

export default User;
