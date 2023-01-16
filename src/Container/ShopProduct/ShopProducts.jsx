import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import ProductCard from "../../Components/Products/ProductsCard";
import styles from "./shopProducts.module.css";

export default function ShopProducts() {
  const [limit , setLimit] = useState(15)
  const products = useSelector((state) => state.allProducts);
  const loadMore = () =>{
      setLimit((prevState) => {
        return(
           prevState + 15
        )
      })
  } 
   return (
    <div className={styles.contShop}>
    <div className={styles.shopProductsContainer}>
      {products.products.slice(0,limit).map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.images[0]}
            description={item.description.substr(0, 35)}
          />
        );
      })}
      
    </div>
    <Button className={styles.loadMoreBtn} EventHandler={() => loadMore()}>Load More</Button>
    </div>
  );
}
