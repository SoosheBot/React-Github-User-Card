import React from "react";


const UserCard = ({img, login}) => {
    return (
        <div className="usercard">
            <img width='150' src={img} alt='user' />
            <h3 className="username">Username: {login}</h3>
        </div>

      );
};

export default UserCard;
