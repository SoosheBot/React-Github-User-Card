import React from "react";


const FollowerCard = (props) => {
    return (
        <div className="usercard">
            <img width='150' src={props.follower.avatar_url} alt='user' />
            <h3 className="username">Username: {props.follower.login}</h3>
        </div>

      );
};

export default FollowerCard;
