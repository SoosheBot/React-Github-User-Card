import React, {Component} from "react";
import User from './components/User';
// import Follower from './components/Follower';

import axios from 'axios';

import "./App.css";



class App extends Component {

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
    <div className="App">
      <h1>GitHub User and Followers</h1>
      <User />
      {/* <Follower /> */}

    </div>
  )
  }
}

export default App;
