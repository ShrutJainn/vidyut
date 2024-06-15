import { useForm } from "react-hook-form";

import styles from "./LoginPage.module.css";
import logo from "./media/items/logo.jpg";
import fb from "./media/items/fb.jpg";
import twitter from "./media/items/twitter.jpg";
import google from "./media/items/google.jpg";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function onSubmit(inputData) {
    setLoading(true);
    try {
      // console.log(inputData);
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_URL}/users/login`,
        inputData
      );
      toast.success(data.msg);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate(-1);
    } catch (error) {
      if (error.response.data.error)
        return toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={styles.bg1}>
      <div className={styles.login}>
        <div className={styles.nav}>
          <img src={logo} className={styles.logo} />
          <span className={styles.title}>VIDYUT</span>
          <span className={styles.heading}>Login</span>
          <p className={styles.para}>
            Don&apos;t have an account?
            <Link to="/signup" className={styles.para1}>
              Get VIDYUT
            </Link>
          </p>
        </div>
        <div className={styles.bigBox}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputSection}>
              <input
                {...register("username")}
                type="text"
                className={styles.isInput1}
                placeholder="Username"
              />
              <input
                {...register("password")}
                type="password"
                className={styles.isInput}
                placeholder="Password"
              />
              <br />
              <div className={styles.log}>
                {/* <select className={styles.smBtn}>
                <option>Login as User</option>
                <option>Login as Employee</option>
              </select> */}
                <button
                  disabled={loading}
                  className={styles.smBtn}
                  type="submit"
                >
                  {loading ? "Logging In" : "Log In"}
                </button>
              </div>
            </div>
          </form>
          <div className={styles.social}>
            <button className={styles.sm}>
              <img className={styles.btnImage} src={fb} />
            </button>
            <button className={styles.sm}>
              <img className={styles.btnImage} src={google} />
            </button>
            <button className={styles.sm}>
              <img className={styles.btnImage} src={twitter} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.container2}></div>
    </div>
  );
}

export default LoginPage;

{
  /* <div className={styles.bg1}>
    
<div className={styles.login}>
    <div className="nav">
        <img src="./media/item/Screenshot_2024-05-05_210625-removebg-preview (7).png" className="logo"/>
        <span className="title">VIDYUT</span>
        <span className="heading">Login</span>
        <p className="para">Don&apos;t have an account?<p>Get VIDYUT</p></p>
    </div>
    <div className="big-box">
    <div className="input-section">
        <input type="text" className="is-input" placeholder="Username" style={{display : "block"}}/>
        <input type="password" className="is-input" placeholder="Password"/><br/>
        
        
        
        <input type="checkbox" className="is-check" />
        <span className="rm">Remember Me</span><br/>
        <div className="log">
        <select className="sm-btn" >
            <option>Login as User</option>
            <option>Login as Employee</option>
        </select>
        </div>
    </div>
    <div className="social">
        <button className="sm1"><img src="./media/item/fb_icon_325x325.png" height="30"/></button>
        <button className="sm"><img src="./media/item/png-clipart-google-logo-google-search-google-account-redes-search-engine-optimization-text.png" height="30" width="45"/></button>
        <button className="sm"><img src="./media/item/3938028.png" height="30"/></button>
        </div>
    </div>
</div>

<div className="container2"></div>
</div> */
}
