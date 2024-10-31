import styles from "./details.module.css";
import { DetailsType, itemDatas } from "../../data";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io"; // Import both icons
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Detail } from "../../data";

export const Details = () => {
  const [showDetail, setShowDetail] = useState<DetailsType | null>(
    Detail[0] || null
  );
  const [showMore, setShowMore] = useState(false);
  const detail1 = Detail[0];
  const detail2 = Detail[1];
  const detail3 = Detail[2];
  const detail4 = Detail[3];
  // Function to toggle the view more/less state
  const toggleViewMore = () => {
    setShowMore((prev) => !prev);
  };
  // Determine how many items to display
  const displayedItems = showMore ? itemDatas : itemDatas.slice(0, 10);
  const displayDetail = (text: string) => {
    const foundedDetail = Detail.find((d) => d.text === text);
    setShowDetail(foundedDetail || null);
  };
  return (
    <div className={styles.container}>
      <div className={styles.active}>
        <p>
          <span className={`${styles.indicator} ${styles.yellowIndicator}`} />{" "}
          Active Edge Node (8831)
        </p>
        <p>
          <span className={`${styles.indicator} ${styles.blueIndicator}`} />{" "}
          Guardian Node (2766)
        </p>
        <p>
          <span className={`${styles.indicator} ${styles.redIndicator}`} />{" "}
          Validator Node (29)
        </p>
      </div>
      <div className={styles.community}>Join the Theta community</div>
      <div className={styles.recentNews}>
        <h4>RECENT NEWS</h4>
        <p>
          <span onClick={toggleViewMore} style={{ cursor: "pointer" }}>
            {showMore ? "View less" : "View more"}{" "}
            {showMore ? <IoMdArrowRoundUp /> : <IoMdArrowRoundDown />}
          </span>
        </p>
      </div>
      <div className={styles.itemdatas}>
        {displayedItems.map((item, index) => {
          return (
            <div key={index} className={styles.itemData}>
              <h5>{item.header}</h5>
              <small>{item.date.toLocaleDateString()}</small>
              <h2>{item.issueText}</h2>
              <a href="" className={styles.link}>
                <p className={styles.view}>View article</p> <FaArrowRight />
              </a>
            </div>
          );
        })}
      </div>
      <p className={styles.yo}>
        <span onClick={toggleViewMore} style={{ cursor: "pointer" }}>
          {showMore ? "View less" : "View more"}{" "}
          {showMore ? <IoMdArrowRoundUp /> : <IoMdArrowRoundDown />}
        </span>
      </p>
      <div className={styles.detail}>
        <div className={styles.spans}>
          <span onClick={() => displayDetail(detail1.text)}></span>
          <span onClick={() => displayDetail(detail2.text)}></span>
          <span onClick={() => displayDetail(detail3.text)}></span>
          <span onClick={() => displayDetail(detail4.text)}></span>
        </div>
        <div className={styles.article}>
          <h3>{showDetail?.text}</h3>
          <p>{showDetail?.desc}</p>
          <img src={showDetail?.img.source} alt="" />
        </div>
      </div>
    </div>
  );
};
