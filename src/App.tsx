import Img1 from "./assets/1.png";
import Img2 from "./assets/2.png";
import Img3 from "./assets/3.png";
import Img4 from "./assets/4.png";
import Img5 from "./assets/5.png";
import Img6 from "./assets/6.png";
import Img7 from "./assets/7.png";
import Img8 from "./assets/8.png";
import Img9 from "./assets/9.png";
import Img10 from "./assets/10.png";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <img src={Img1} className={styles.Img} alt="img" />
      <img src={Img2} className={styles.Img} alt="img" />
      <img src={Img3} className={styles.Img} alt="img" />
      <img src={Img4} className={styles.Img} alt="img" />
      <img src={Img5} className={styles.Img} alt="img" />
      <img src={Img6} className={styles.Img} alt="img" />
      <img src={Img7} className={styles.Img} alt="img" />
      <img src={Img8} className={styles.Img} alt="img" />
      <img src={Img9} className={styles.Img} alt="img" />
      <img src={Img10} className={styles.Img} alt="img" />
    </>
  );
}

export default App;
