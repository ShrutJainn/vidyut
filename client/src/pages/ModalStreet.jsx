import { useRecoilValue } from "recoil";
import styles from "./ModalStreet.module.css";
import streetAtom from "../atoms/streetAtom";

function ModalStreet({ setIsOpenModal, light }) {
  const street = useRecoilValue(streetAtom).slice(0, 54);
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <p className={styles.closeButton} onClick={() => setIsOpenModal(false)}>
          X
        </p>
        <div className={styles.details}>
          <h1 className={styles.heading}>Details</h1>
          <div className={styles.inDetails}>
            <p className={styles.text1}>Name:</p>{" "}
            <p className={styles.text2}>{light.name}</p>
            <p className={styles.text1}>Location:</p>{" "}
            <p className={styles.text2}>{street}</p>
            {/* <p className={styles.text1}>NO:</p>{" "}
            <p className={styles.text2}>adsfadsf</p>
            <p className={styles.text1}>NO2:</p>{" "}
            <p className={styles.text2}>asdfasdf</p> */}
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default ModalStreet;
