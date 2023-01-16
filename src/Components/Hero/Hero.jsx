import { data } from "./data";
import styles from "./hero.module.css";
import Carousel from "../Slider/Slider";


export default function Hero() {
  return (
    <div className={styles.sliderHero}>
      <Carousel show={1} infiniteLoop={true}>
        {data.map((item, i) => (
          <div className={styles.slides} key={i}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
