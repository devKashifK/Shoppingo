import Container from "../../Components/Conatiner/Conatiner";
import OfferCard from "../../Components/OfferCard/OfferCard";
import Title from "../../Components/Title/Title";
import styles from "./Offer.module.css";
import { offer } from "./offerData";

function Offer() {
  return (
    <div className={styles.OfferContainer}>
      <Container>
        <Title title={"What We Offer"} />
        <div className={styles.OfferCardConatiner}>
          {offer.map((item) => {
            return <OfferCard  key={item.id} title = {item.title} description = {item.description} icon ={item.icon} color={item.color} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Offer;
