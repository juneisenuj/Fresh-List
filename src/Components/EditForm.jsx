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
    userList[id].title = title || chosenItem.title;
    userList[id].body = body || chosenItem.body;
    setShowModal(false)
  }

  const searchHandler = () => {
    // input the exact title
    // search through the list(userList from Main)
    // without having to click Edit button on the list,
    // it should automatically click? then generate
  }

  return (
    <div className={styles.modal} data-testid='editForm-1'>
      <div className={styles.modalContent}>
        <div className={styles.formWrapper}>
          <form >
            <label>
              Search:
              <input type='text' placeholder='search title'/>
            </label>
            <button>search</button>
          </form>
          <form className={styles.form}>
            <label>Title</label>
            <textarea rows='4' defaultValue={chosenItem.title} className={styles.titleInput} onChange={(e) => setTitle(e.target.value)} />
            <label>Body</label>
            <textarea rows='8' defaultValue={chosenItem.body} onChange={(e) => setBody(e.target.value)} />
            <button onClick={(e) => editHandler(e)}>Update</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;