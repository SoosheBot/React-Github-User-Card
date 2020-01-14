import React, {Component} from 'react';
import UserCard from './components/UserCard';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
      login:''
    };
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users')
      .then(res => {
        // res.data.message
        // this.setState({
        //   users: res.data
        // });
        console.log('the cDM res is', res);
      })
      .catch(err => console.log('the cDM error', err));
  }

  componentDidUpdate(prevProps, prevState) {}

  handleChanges = e => {};

  fetchUsers = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="usercard">
        {this.state.users.map(user => {
            return <> name={user.name} login={user.login} id={user.id} </> 
        })}
        
        
      </div>
    );
  }
}

export default App;
