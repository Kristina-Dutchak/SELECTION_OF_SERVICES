import { useEffect, useRef, useState } from "react";
import img5 from "../../assets/5_img.png";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";

import styles from "./wardrobeBreakdown.module.css";
import { classes } from "../../shared";

export const WardrobeBreakdown = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const showInfo = () => {
    console.log("show info");
  };

  console.log("IS VISIBLE: ", isVisible);

  return (
    <div ref={ref} className={styles.advertContainer}>
      <div
        className={classes(styles.explanationContainer, {
          [styles.visible]: isVisible,
        })}
      >
        <span className={styles.title}>Розбір гардероба</span>
        <div className={styles.pricesContainer}>
          <div className={styles.moreInfo}>
            <Button onClick={showInfo}>
              <span className={styles.more}>Детальніше</span>
            </Button>
          </div>
          <div className={styles.service}>
            <div className={styles.typeService}>
              <span className={styles.price}>8 000 ГРН</span>
              <span className={styles.typeWork}>онлайн</span>
            </div>
            <div className={styles.typeService}>
              <span className={styles.price}>9 000 ГРН</span>
              <span className={styles.typeWork}>змішаний</span>
            </div>
          </div>
        </div>
      </div>
      <Image src={img5} width="100%" height="auto" alt="img_5" />
    </div>
  );
};
