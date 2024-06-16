import image from "./media/intensity.png";
import styles from "./Intensity.module.css";
import { Link } from "react-router-dom";
function Intensity() {
  return (
    <div id={styles.page2}>
      <div id={styles.page2Left}>
        <div className={styles.content}>
          <h1 style={{ color: "black" }}>Track your street</h1>
          <hr />
          <p>
            Discover the heartbeat of your city with our interactive pollution
            and crowd intensity map. Red signals maximum pollution and crowd,
            while yellow indicates caution. Let&apos;s pinpoint the hotspots
            together and urge authorities to take action. Plant saplings in
            these areas to breathe new life into our community. Together, we can
            make a green difference.Explore now!
          </p>
          <div className={styles.btns}>
            <button>Check at your location</button>
          </div>
        </div>
      </div>
      <div id={styles.page2Right}>
        <img src={image} style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  );
}

export default Intensity;
