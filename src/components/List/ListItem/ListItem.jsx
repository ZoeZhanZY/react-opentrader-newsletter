import React from "react";
import "./ListItem.scss";

const ListItem = ({ userName, userEmail, userAvatar,id }) => {
  return (
    <div className="paper">
      <img className="photo" src={userAvatar} alt={userName} />

			<div className="name">{id} {userName}</div>
      <div className="email">{userEmail}</div>
    </div>
  );
};

export default ListItem;
