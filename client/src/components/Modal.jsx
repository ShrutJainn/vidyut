import styles from "./Modal.module.css";

function Modal({ setIsOpenModal }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpenModal(false)}
        >
          X
        </button>
        <div className={styles.details}>
          <h1 className={styles.heading}>Details</h1>
          <div className={styles.inDetails}>
          <p className={styles.text1}>Name:</p> <p className={styles.text2}>light_name</p>
          <p className={styles.text1}>Address:</p> <p className={styles.text2}>CP Colony Morar Gwalior</p>
          <p className={styles.text1}>ManufacturedBy:</p> <p className={styles.text2}>BHEL</p>
          <p className={styles.text1}>ManufacturedOn:</p> <p className={styles.text2}>02/03/2024</p>
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
