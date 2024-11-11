import styles from "./home.module.css";
import { FaMedium } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { FaAndroid } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.MainCon}>
      <div className={styles.header1}>
        <a href="https://medium.com/theta-network/university-of-oregons-distopia-lab-to-use-theta-edgecloud-for-ai-research-6cae02981a11">
          <p className={styles.linkText}>
            University of Oregon's Distopia Lab to use the Theta EdgeCloud for
            AI RESEARCH <span className={styles.thinText}> - Medium</span>
          </p>
        </a>
      </div>
      <div className={styles.header2}>
        <div className={styles.logo}>
          <img src="/logos/thetaLogo.svg" className={styles.eth} alt="" />
        </div>
        <div className={styles.navLinks}>
          <ul className={styles.ulTag}>
            <li>Enterprises</li>
            <li>Devs</li>
            <li>Community</li>
            <li>Explorer</li>
            <li>Wallet</li>
            <li>About</li>
            <li>Docs</li>
          </ul>
        </div>
        <div className={styles.headerIcons}>
          <FaMedium color="white" />
          <FaTwitter color="white" />
          <FaFacebookSquare color="white" />
          <FaGithub color="white" />
          <FaDiscord color="white" />
        </div>
      </div>
      <article className={styles.article}>
        <div className={styles.divBtn}>
          <button
            className={styles.animatedButton}
            onClick={() => navigate("/coin")}
          >
            <svg
              viewBox="0 0 24 24"
              className={styles.arr2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className={styles.text}>Connect Wallet</span>
            <span className={styles.circle}></span>
            <svg
              viewBox="0 0 24 24"
              className={styles.arr1}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
        <h1 className={styles.header}>
          The Decentralized Cloud for AI, Media & Entertainment
        </h1>
        <img src="/images/thetaImg.png" alt="" className={styles.thetaImg} />
        <p>
          <a href="" className={styles.visit}>
            Visit Dashboard for AI Developers {"->"}
          </a>
        </p>
        <p className={styles.mobile}>
          <a href="">Mobile Edge Node for Android is Now Available</a>
          <a href="">Download Now</a>
        </p>
        <div className={styles.node}>
          <h4 className={styles.nodeOperator}>NODE OPERATORS:</h4>
          <h3>
            Share your GPU for AI & Video workloads to earn
            <img
              src="/images/bitcoin.png"
              alt=""
              className={styles.bitcoin}
            />{" "}
            TFUEL
          </h3>
          <p>Download Theta Edge Node</p>
          <div className={styles.buttons}>
            <div>
              <img src="/images/windows.png" className={styles.window} alt="" />{" "}
              <small>Windows</small>
            </div>
            <div>
              <FaApple color="white" />
              <small>macOS</small>
            </div>
            <div>
              <FcLinux />
              <small>Linux</small>
            </div>
            <div>
              <FaAndroid color="green" />
              <small>Android</small>
            </div>
          </div>
        </div>
        <h2>Live Nodes</h2>
      </article>
    </div>
  );
};
