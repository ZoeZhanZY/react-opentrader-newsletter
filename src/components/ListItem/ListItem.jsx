import React from "react";
import './ListItem.scss'

const ListItem = () => {
	return (
    <div className="paper">
      
        <img
          className="photo"
          src="https://via.placeholder.com/600x240"
          alt=""
          width="100%"
        />
      
      <div className="name">George Bluth</div>
      <div className="email">george.bluth@regres.in</div>
    </div>
  );
};


export default ListItem;
