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

  fetchFollowers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/sooshebot/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log("follower cDM res:", res);
      })
      .catch(err => console.log("follower cDM error:", err));
  }

  


  render() {
    return (
      <div>
        <UserCard img={this.state.img} username={this.state.username} />
        <button onClick={this.fetchFollowers}>
				Fetch Followers
			</button>

      </div>
    );
  }
}

export default User;
