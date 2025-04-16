import Img1 from './assets/img_1.png';
import Img2 from './assets/img_2.png';
import Img3 from './assets/img_3.png';
import Img4 from './assets/img_4.png';
import Img5 from './assets/img_5.png';
import Img6 from './assets/img_6.png';
import Img7 from './assets/img_7.png';
import Img8 from './assets/img_8.png';
import Img9 from './assets/img_9.png';
import Img10 from './assets/img_10.png';
import styles from './App.module.css';

function App() {
  return (
    <>
      <img src={Img1} className={styles.Img} alt='img' />
      <img src={Img2} className={styles.Img} alt='img' />
      <img src={Img3} className={styles.Img} alt='img' />
      <img src={Img4} className={styles.Img} alt='img' />
      <img src={Img5} className={styles.Img} alt='img' />
      <img src={Img6} className={styles.Img} alt='img' />
      <img src={Img7} className={styles.Img} alt='img' />
      <img src={Img8} className={styles.Img} alt='img' />
      <img src={Img9} className={styles.Img} alt='img' />
      <img src={Img10} className={styles.Img} alt='img' />
    </>
  );
}

export default App;
