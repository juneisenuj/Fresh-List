import React from 'react';
import styles from '../styles/EditForm/EditForm.module.css'

const EditForm = ({ showModal, setShowModal, chosenItem }) => {
  if (!showModal) {
    return null
  }

  const editHandler = () => {
    
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <form className={styles.form}>
          <label>Title</label>
          <textarea rows='4' defaultValue={chosenItem.title} className={styles.titleInput} />
          <label>Body</label>
          <textarea rows='8' defaultValue={chosenItem.body} />
          <button>Update</button>
          <button onClick={() => setShowModal(false)}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;