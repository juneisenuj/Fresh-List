import React from 'react';

const List = ({ userList }) => {

  if (userList[0] === 0) {
    return null;
  }


  console.log(userList[0])

  return (
    <div>
      {userList[0].map((item, index) =>
      <div key={index}>
        <div>{item.id}</div>
      </div>
      )}
    </div>
  );
};

export default List;