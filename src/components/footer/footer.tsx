import styles from "./footer.module.css";
import { FaMedium } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <img src="/logos/thetaLogo.svg" alt="" />
        <div className={styles.headerIcons}>
          <FaMedium className={styles.icon} />
          <FaTwitter className={styles.icon} />
          <FaFacebookSquare className={styles.icon} />
          <FaGithub className={styles.icon} />
          <FaDiscord className={styles.icon} />
        </div>
        <small className={styles.small}>
          ©2023 Theta Labs, Inc. All rights reserved
        </small>
      </div>
      <div className={styles.div2}>
        <p>Enterprises</p>
        <p>Devs</p>
        <p>Community</p>
        <p>Explorer</p>
        <p>Wallet</p>
        <p>About</p>
        <p>Product Roadmap</p>
        <p>Docs</p>
        <p>Support</p>
        <p>Official Links</p>
      </div>
      <div className={styles.div3}>
        <p>Theta EdgeCloud</p>
        <p>Theta Video API</p>
        <p>ThetaDrop</p>
        <p>Theta Docs</p>
      </div>
    </div>
  );
};
