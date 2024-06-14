import styles from "./Logo.module.css";
import logo from "../pages/media/logo.png";

function Logo() {
  return <img src={logo} alt="Vidyut logo" className={styles.logo} />;
}

export default Logo;
