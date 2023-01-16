import styles from "./Category.module.css";

import Title from "../../Components/Title/Title";
import Container from "../../Components/Conatiner/Conatiner";
import { data } from "./data";

function Category() {
  return (
    <Container>
      <Title title={"Browse Category"} />
      <div className={styles.categoryConatiner}>
        {data.map((item) => {
          return(
          <div className={styles.categoryCard}>
            <img className={styles.categoryImg} src={item.img} alt={item.title} />
            <div className={styles.name}>{item.title}</div>
          </div>
          )
        })}
      </div>
    </Container>
  );
}

export default Category;
