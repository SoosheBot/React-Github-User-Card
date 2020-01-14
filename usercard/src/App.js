import React, { Component } from "react";
import UserCard from "./components/UserCard";

import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
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

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.users !== prevState.users) {
  //     console.log("inside first if?");
  //     if (this.state.doggoText === "chihuahua") {
  //       console.log("inside second if?");
  //       axios
  //         .get("https://api.github.com/users")
  //         .then(res => {
  //           // res.data.message
  //           this.setState({
  //             doggos: res.data.message,
  //             doggoText: "husky"
  //           });
  //           console.log(res);
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   }
  // };

  // handleChanges = e => {};

  // fetchUsers = e => {
  //   e.preventDefault();
  // };

  render() {
    return (
      <div className="App">
        {this.state.users.map(user => {
          return (
            <div className="users" key={user.id}>
              <UserCard user={user}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
