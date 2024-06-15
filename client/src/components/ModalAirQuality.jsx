import styles from "./ModalAirQuality.module.css";

function ModalAirQuality({ setIsOpenModal, airData }) {
  const { components, main } = airData;
  const { co, nh3, no, no2, o3, so2 } = components;
  const { aqi } = main;
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
          <h1 className={styles.heading}>AQI of your area : {aqi} ppm</h1>
          <div className={styles.inDetails}>
            <p className={styles.text1}>CO:</p>{" "}
            <p className={styles.text2}>{co}</p>
            <p className={styles.text1}>NH3:</p>{" "}
            <p className={styles.text2}>{nh3}</p>
            <p className={styles.text1}>NO:</p>{" "}
            <p className={styles.text2}>{no}</p>
            <p className={styles.text1}>NO2:</p>{" "}
            <p className={styles.text2}>{no2}</p>
            <p className={styles.text1}>O3:</p>{" "}
            <p className={styles.text2}>{o3}</p>
            <p className={styles.text1}>SO2:</p>{" "}
            <p className={styles.text2}>{so2}</p>
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default ModalAirQuality;
