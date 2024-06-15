import toast from "react-hot-toast";
import { useGeolocation } from "../hooks/useGeolocation";
import styles from "./AirQuality.module.css";
import scale from "./media/image/table.jpg";
import axios from "axios";

function AirQuality() {
  const { position: geolocationPosition, getPosition } = useGeolocation();
  console.log(import.meta.env.VITE_WHETHER_KEY);

  async function handleFetchAirStatus() {
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
    const data = await response.json();
    console.log(data);
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
            <button
              onClick={() => {
                getPosition();
                console.log(geolocationPosition);
              }}
              className={styles.btn1}
            >
              Fetch Location
            </button>
            <button onClick={handleFetchAirStatus} className={styles.btn2}>
              Air Status
            </button>
          </div>
          <img src={scale} className={styles.img} />
        </div>
        <div className={styles.collage}></div>
      </div>
    </>
  );
}
export default AirQuality;
