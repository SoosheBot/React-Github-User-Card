import React from "react";


const UserCard = ({img, username}) => {
    return (
        <div className="usercard">
            <img width='150' src={img} alt='user' />
            <h3 className="username">Username: {username}</h3>
        </div>

      );
};

export default UserCard;
