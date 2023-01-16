
import Carousel from "../Slider/Slider";
import styles from "./Brands.module.css";
import  BrandsImages  from "./BrandsImagesData";

export default function Brands() {
  return (
    <div className={styles.brands}>
      <Carousel show={6} infiniteLoop={true}>
      {BrandsImages.map((item) => {
        return (
          <div className={styles.brandLogo} key={item.id}>
            <img src={item.image} alt="" />
          </div>
        );
      })}
      </Carousel>
    </div>

  );
}
