import React, {Component} from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';

class Follower extends Component {
    state = {
        followers:[]
    };

    componentDidMount(){
        axios
        .get(`https://api.github.com/users/${this.state.username}/followers`)
        .then(res => {
            this.setState({
                followers:res.data
            });
            console.log('follower cDM res:', res)
        })
        .catch(err => console.log("follower cDM error:", err));

    };

    render() {
        render() {
            return (
              <div>
                <FollowerCard img={this.state.img} username={this.state.username} />
              </div>
            );
          }

};

export default Follower;