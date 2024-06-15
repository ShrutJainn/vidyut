import toast from "react-hot-toast";
import { useGeolocation } from "../hooks/useGeolocation";
import styles from "./AirQuality.module.css";
import scale from "./media/image/table.jpg";
import { useState } from "react";
import ModalAirQuality from "../components/ModalAirQuality";

function AirQuality() {
  const { position: geolocationPosition, getPosition } = useGeolocation();
  const [isOpenModel, setIsOpenModal] = useState(false);
  const [airData, setAirData] = useState(null);

  async function handleFetchAirStatus() {
    console.log(geolocationPosition);
    if (!geolocationPosition)
      return toast.error("We need to first fetch your location");

    const { lat, lng } = geolocationPosition;

    // const { data } = await axios.get(
    //   `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${
    //     import.meta.env.VITE_WHETHER_KEY
    //   }`
    // );
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${
        import.meta.env.VITE_WHETHER_KEY
      }`
    );
    const { list } = await response.json();
    setAirData(list[0]);
    console.log(airData);
    setIsOpenModal(true);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.heading}>Air Status</span>
          <span className={styles.def}>
            AQI tells you how clean or polluted
            <br /> your air is, and what associated
            <br /> health effects might be a <br />
            concern for you.{" "}
          </span>
          <br />
          <div className={styles.btn}>
            {/* <button
              onClick={() => {
                getPosition();
                console.log(geolocationPosition);
              }}
              className={styles.btn1}
            >
              Fetch Location
            </button> */}
            <button onClick={handleFetchAirStatus} className={styles.btn2}>
              Get Air Status
            </button>
            {isOpenModel && (
              <ModalAirQuality
                setIsOpenModal={setIsOpenModal}
                airData={airData}
              />
            )}
          </div>
          <img src={scale} className={styles.img} />
        </div>
        <div className={styles.collage}></div>
      </div>
    </>
  );
}
export default AirQuality;
