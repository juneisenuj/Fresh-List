import React from 'react';


const List = ({ userList }) => {

  if (userList === undefined) {
    return 'loading';
  }

  console.log(userList)


  return (
    <div>
      {userList.map((item, index) =>
      <div key={index}>
        <div>ID: {item.id}</div>
        <div>User ID: {item.userId}</div>
        <div>Title: {item.title}</div>
        <div>Body: {item.body}</div>
        <div>Edit</div>
      </div>
      )}
    </div>
  );
};

export default List;
