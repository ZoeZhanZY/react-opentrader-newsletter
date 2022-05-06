import React from "react";
import ListItem from "./ListItem/ListItem";

const List = ({ renderedList }) => {
  return (
    <>
      {renderedList &&
        renderedList.length > 1 &&
        renderedList.map((user) => (
          <ListItem
            id={user.id}
            key={user.id}
            userName={user.first_name + " " + user.last_name}
            userEmail={user.email}
            userAvatar={user.avatar}
          />
        ))}
    </>
  );
};

export default List;
