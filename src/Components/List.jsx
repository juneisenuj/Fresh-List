import React from 'react';

const List = ({ userList }) => {

  if (userList[0] === undefined) {
    return 'loading';
  }


  return (
    <div>
      {userList[0].map((item, index) =>
      <div key={index}>
        <div>ID: {item.id}</div>
        <div>User ID: {item.userId}</div>
        <div>Title: {item.title}</div>
        <div>Body: {item.body}</div>
      </div>
      )}
    </div>
  );
};

export default List;
