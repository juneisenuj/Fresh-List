import React, { useState } from 'react';
import styles from '../styles/EditForm/EditForm.module.css'

const EditForm = ({ showModal, setShowModal, chosenItem, userList, setUserList }) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  if (!showModal) {
    return null
  }

  console.log(chosenItem)

  const editHandler = (e) => {
    e.preventDefault();
    let id = chosenItem.id - 1;
    console.log(id)
    userList[id].title = title;
    userList[id].body = body;
    setShowModal(false)
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <form className={styles.form}>
          <label>Title</label>
          <textarea rows='4' defaultValue={chosenItem.title} className={styles.titleInput} onChange={(e) => setTitle(e.target.value)}/>
          <label>Body</label>
          <textarea rows='8' defaultValue={chosenItem.body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={(e) => editHandler(e)}>Update</button>
          <button onClick={() => setShowModal(false)}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;