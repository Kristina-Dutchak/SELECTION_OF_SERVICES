import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { classes } from "../../shared/services/classes";

import styles from "./serviceType.module.css";
import { MobileInfo } from "./MobileInfo";

type Price = {
  price: string;
  type: string;
};

export const ServiceType = ({
  img,
  title,
  prices,
  whatIs,
  happenList,
  getList,
}: {
  img: string;
  title: string;
  prices: Price[];
  whatIs: string[];
  happenList: string[];
  getList: string[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showInfo, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleShowInfo = () => {
    setShow((prev) => !prev);
  };

  console.log("IS VISIBLE: ", isVisible);

  return (
    <div ref={ref} className={styles.advertContainer}>
      <div className={styles.fullExplanation}>
        <div className={styles.explanations}>
          <div
            className={classes(styles.explanationContainer, {
              [styles.visible]: isVisible,
            })}
          >
            <span className={styles.title}>{title}</span>
            <div className={styles.pricesContainer}>
              <div className={styles.moreInfo}>
                <Button onClick={handleShowInfo}>
                  <span className={styles.more}>
                    {!showInfo ? "ДЕТАЛЬНІШЕ" : "СХОВАТИ"}
                  </span>
                </Button>
              </div>
              <div className={styles.service}>
                {prices.map((price) => (
                  <div className={styles.typeService} key={price.type}>
                    <span className={styles.price}>{price.price}</span>
                    <span className={styles.typeWork}>{price.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.fullInfo}>
            <div className={styles.whatIs}>
              <span className={styles.titleFullInfo}>ЩО ЦЕ?</span>
              {whatIs.map((item) => (
                <span key={item} className={styles.textFullInfo}>
                  {item}
                </span>
              ))}
            </div>
            <div className={styles.listExplain}>
              <span className={styles.titleFullInfo}>ЯК ВІДБУВАЄТЬСЯ?</span>
              <ul className={styles.list}>
                {happenList.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.textFullInfo}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.listExplain}>
              <span className={styles.titleFullInfo}>ЩО ВИ ОТРИМАЄТЕ?</span>
              <ul className={styles.list}>
                {getList.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.textFullInfo}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showInfo && (
        <MobileInfo whatIs={whatIs} happenList={happenList} getList={getList} />
      )}
      <Image src={img} className={styles.imagePerson} alt="img_5" />
    </div>
  );
};
