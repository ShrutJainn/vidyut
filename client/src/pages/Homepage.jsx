/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import video from "./media/video.mp4";
import image from "./media/map.jpg";
import logo from "./media/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import sup1 from "./media/sup1.jpg";
import sup2 from "./media/sup2.jpg";
import sup3 from "./media/sup3.jpg";
import sup4 from "./media/sup4.jpg";
import { useEffect } from "react";

function Homepage() {
  useEffect(() => {
    localStorage.setItem("flag", false);
  }, []);
  gsap.registerPlugin(useGSAP);

  setTimeout(() => {
    localStorage.setItem("flag", true);
  }, 5000);

  useGSAP(() => {
    gsap.to(".loader", {
      top: "-100%",
      delay: "2",
    });
  });
  return (
    <>
      {/* {localStorage.getItem("flag") === false && (
        <div
          className={`loader ${styles.loader}`}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#000",
            position: "fixed",
            zIndex: "999",
            top: "0",
            transition: "all ease 0.7s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4",
            color: "white",
          }}
        >
          <img src={logo} style={{ height: "20rem" }} />
        </div>
      )} */}
      <div className={styles.main}>
        <div id={styles.page1}>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <div id={styles.page1Content}>
            <nav>
              {/* <h3 className="navbar">Vidyut</h3> */}
              <img src={logo} alt="vidyut logo" />
              <h3 style={{ color: "white" }}>Menu</h3>
            </nav>
            <div className={styles.heading}>
              <h1>Power in every STEP</h1>
              <p>Highly sustainable way to generate energy</p>
            </div>
            <div className={styles.bottomPart}>
              <hr />
              <p>
                Generating sustainable energy <br /> since 2024
              </p>
            </div>
          </div>
        </div>
        <div id={styles.page2}>
          <div id={styles.page2Left}>
            <div className={styles.content}>
              <h1>Track your street</h1>
              <hr />
              <p>
                The street light tracking system utilizes advanced monitoring
                technology to track the status and performance of street lights
                across urban areas. By leveraging sensors, connectivity
                solutions, and data analytics, this system provides real-time
                insights into street light operation, enabling proactive
                maintenance and energy optimization.
              </p>
              <div className={styles.btns}>
                <h4>
                  <Link className={styles.link} to={"/app/form"}>
                    Track Lights
                  </Link>
                </h4>

                <h4>
                  <Link className={styles.link} to={"/intensity"}>
                    Check Intensity
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div id={styles.page2Right}>
            <img src={image} style={{ height: "100%" }} />
          </div>
        </div>
        <div id={styles.page3}>
          <div id={styles.page3Left}>
            <h1 style={{ fontWeight: "bold" }}>
              Think global <br /> Plant local
            </h1>
          </div>
          <div id={styles.page3Right}>
            <div id={styles.donate}>
              <div className={styles.rem} id={styles.centerDiv}>
                <div className={styles.remContent} style={{ width: "100%" }}>
                  <p>
                    <span style={{ fontSize: "2rem" }}>123</span>
                    <hr />
                    Trees Planted
                  </p>
                </div>
              </div>
              <div className={styles.rem}>
                <div className={styles.remContent}>
                  <p>
                    <span style={{ fontSize: "2rem" }}>80</span>
                    <hr />
                    Number of Donaters
                  </p>
                </div>
                <div className={styles.remContent}>
                  <p>
                    <span style={{ fontSize: "2rem" }}>0.0067%</span>
                    <hr />
                    Percent of O2 generated
                  </p>
                </div>
              </div>
              <div className={styles.upper}>
                <h4>
                  <Link className={styles.link} to={"/donate"}>
                    Donate Tree
                  </Link>
                </h4>
                <h4>
                  <Link className={styles.link} to={"/donate"}>
                    Air quality
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.solution}>
          <div id={styles.solutionLeft}>
            <h1>Our solutions for you</h1>
          </div>
          <div id={styles.solutionRight}>
            <h1 style={{ fontSize: "2rem", marginBottom: "1vw" }}>
              धर्मेण हीनाः पशवः समानाः।
              <br />
              Without righteousness and humanity, human beings are like animals.
            </h1>
            <p>
              The Vidyut model is a comprehensive framework designed to promote
              sustainable urban living through the integration of innovative
              technologies and community engagement initiatives.
            </p>
          </div>
        </div>

        <div id={styles.page4}>
          <div id={styles.page4Top}>
            <h1>Too cute, to Pollute </h1>
          </div>
          <div id={styles.hallOfFame}>
            <div className={styles.box}>
              <img
                src="https://cdn.narendramodi.in/cmsuploads/0.90216000_1433483913_sapling-fbshare.jpg"
                alt=""
              />
            </div>
            <div className={styles.box}>
              <img
                src="https://www.globalgiving.org/pfil/21548/ph_21548_154797.jpg"
                alt=""
              />
            </div>
            <div className={styles.box}>
              <img
                src="https://d32m1btok6bzqh.cloudfront.net/wp-content/uploads/2021/03/SayTrees-Hero-1024x678.jpg"
                alt=""
              />
            </div>
          </div>
          <h1 style={{ marginTop: "2vw", fontSize: "2rem", marginLeft: "1vw" }}>
            माता भूमिः पुत्रोऽहं पृथिव्याः। <br />
            <span style={{ fontSize: "1.5rem" }}>
              Earth is my mother and I am her child.
            </span>
          </h1>
          <p style={{ marginLeft: "1vw" }}>
            Join Us in Preserving Mother Nature: Donate a Tree to Your Local
            Area and Earn Recognition on Our Website! Every Contribution Counts
            Towards a Greener Future
          </p>
        </div>
        <div id={styles.page5}>
          <h1>Our Supporters</h1>
          <div className={styles.images}>
            <img src={sup1} style={{ height: "25vh" }} />
            <img src={sup2} />
            <img src={sup3} />
            <img src={sup4} />
          </div>
        </div>
        <div id={styles.footer}>
          <h1>Vidyut</h1>
          <div id={styles.footerBottom}>
            <p style={{ marginTop: "1.2vh" }}>Copyright@Vidyut</p>
            <p style={{ marginTop: "1.2vh" }}>India</p>
            <p>
              <svg
                style={{ height: "5vh", marginTop: "1.2vh" }}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal", height: "5vh" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                  </g>
                </g>
              </svg>
            </p>
            <p>
              <svg
                style={{ height: "5vh", marginTop: "1.2vh" }}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal", height: "5vh" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                  </g>
                </g>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
