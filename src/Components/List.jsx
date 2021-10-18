import React from 'react';
import styles from '../styles/List/List.module.css'


const List = ({ userList, showModal, setShowModal, setChosenItem }) => {

  if (userList === undefined) {
    return 'loading';
  }



  return (
    <div className={styles.listWrapper}>
      <div className={styles.cards}>
      {userList.map((item, index) =>
      <div className={styles.card} key={index}>
        <div className={styles.id}>ID: {item.id}</div>
        <div className={styles.userid}>User ID: {item.userId}</div>
        <div className={styles.title}>Title: {item.title}</div>
        <div className={styles.body}>Body: {item.body}</div>
        <div className={styles.edit} onClick={(e) => {
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
