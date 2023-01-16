
import { useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import Container from "../../Components/Conatiner/Conatiner";
import ProductCard from "../../Components/Products/ProductsCard";
import Carousel from "../../Components/Slider/Slider";
import Title from "../../Components/Title/Title";
import styles from "./LatestProduct.module.css"

function LatestProduct() {
  const products = useSelector(state => state.allProducts)
  return (
    <div className={styles.latestProductContainer}>
   <Container>
      <Title title= {"Latest Product"} />
        <div className={styles.accordation}>
            <Button EventHandler = {() => console.log("zz")} className={styles.rr}>New Arrival</Button>
            <Button className={styles.rr}>Best Seller</Button>
            <Button className={styles.rr}>Trending</Button>
            <Button className={styles.rr}>Special Offer</Button>
        </div>
        <div className={styles.productCardContainer}>
        <Carousel show={5} infiniteLoop={true}>
        {products.products.slice(20, 40).map((item) => {
          return <ProductCard key={item.id} id={item.id} title={item.title} price={item.price} image={item.images[0]} description={item.description.substr(0, 45)} />;
        })}
        </Carousel>
      </div>
      </Container>
    </div>
  );
}

export default LatestProduct;
