import React from 'react';
import styles from '../styles/List/List.module.css'


const List = ({ userList, showModal, setShowModal, setChosenItem }) => {

  if (userList === undefined) {
    return 'loading';
  }

  console.log(userList)


  return (
    <div>
      <div className={styles.cards}>
      {userList.map((item, index) =>
      <div className={styles.card} key={index}>
        <div>ID: {item.id}</div>
        <div>User ID: {item.userId}</div>
        <div>Title: {item.title}</div>
        <div>Body: {item.body}</div>
        <div onClick={(e) => {
          setShowModal(true)
          setChosenItem(item)
          }}>Edit</div>
      </div>
      )}
      </div>
    </div>
  );
};

export default List;
