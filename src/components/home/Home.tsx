import styles from "./home.module.css";
import { FaMedium } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { FaAndroid } from "react-icons/fa";

export const Home = () => {
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
          <img
            src="/public/logos/thetaLogo.svg"
            className={styles.eth}
            alt=""
          />
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
          <FaMedium />
          <FaTwitter />
          <FaFacebookSquare />
          <FaGithub />
          <FaDiscord />
        </div>
      </div>
      <article className={styles.article}>
        <h1 className={styles.header}>
          The Decentralized Cloud for AI, Media & Entertainment
        </h1>
        <img
          src="/public/images/thetaImg.png"
          alt=""
          className={styles.thetaImg}
        />
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
              src="/public/images/bitcoin.png"
              alt=""
              className={styles.bitcoin}
            />{" "}
            TFUEL
          </h3>
          <p>Download Theta Edge Node</p>
          <div className={styles.buttons}>
            <div>
              <img
                src="/public/images/windows.png"
                className={styles.window}
                alt=""
              />{" "}
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
