import React, { Component } from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";

class Follower extends Component {
  state = {
    followers: []
  };

  componentDidMount() {
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
          {this.state.followers.map(follower => {
              return <FollowerCard key={follower.id} follower={follower} />
          })}
        
      </div>
    );
  }
}

export default Follower;
