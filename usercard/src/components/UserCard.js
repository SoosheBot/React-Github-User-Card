import React from "react";


const UserCard = (props) => {
    return (
        <div className="usercard">
            <img width='150' src={props.user.avatar_url} alt={`${props.user.login} user`} />
            <h3 className="username">Username: {props.user.login}</h3>
            <h4 className="repos">Repos: {props.user.repos_url}</h4>
            <h5 className="followers">Followers: {props.user.followers_url}</h5>
        </div>

      );
};

export default UserCard;
