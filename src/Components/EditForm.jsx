import React from 'react';
import styles from '../styles/EditForm/EditForm.module.css'

const EditForm = ({ showModal, setShowModal }) => {
  if (!showModal) {
    return null
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div>
          modal header
          <div>
            modal body
          </div>
        </div>
      </div>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  );
};

export default EditForm;