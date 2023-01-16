import styles from "./feature.module.css";
import ProductCard from "../../Components/Products/ProductsCard";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Conatiner/Conatiner";
import { useSelector } from "react-redux";
import Carousel from "../../Components/Slider/Slider";


function FeatureProduct() {

  const products = useSelector(state => state.allProducts)

  return (
    <Container>
      <Title title={"Feature Products"} />
      <div className={styles.productCardContainer}>
        <Carousel show={5} infiniteLoop={true}>
        {products.products.slice(0, 10).map((item) => {
          return <ProductCard key={item.id} id={item.id} title={item.title} price={item.price} image={item.images[0]} description={item.description.substr(0, 45)} />;
        })}
        </Carousel>
      </div>

    </Container>
  );
}


export default FeatureProduct;
