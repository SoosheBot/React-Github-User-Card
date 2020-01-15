import React, {Component} from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class User extends Component {
    state = {
        username: []
    };

    componentDidMount() {
        axios
        .get("https://api.github.com/users/sooshebot")
        .then(res => {
            this.setState({
                img: res.data.avatar_url,
                username: res.data.login  
            });
            console.log('user cDM', res);
        })
        .catch (err => console.log ('user cDM error:', err));
    }

    render() {
        return();
    }

}

export default User;

