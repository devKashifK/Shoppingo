import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/Products/ProductsCard";
import PageInfo from "../../PageInfo/PageInfo";
import styles from "./Category.module.css";

function Category() {
  const { products } = useSelector((state) => state.allProducts);
  const [limit, setLimit] = useState(15);

  const newProducts = products.length
    ? products.filter((each) => each.category.name === "Clothes")
    : [];
  products.length !== 0
    ? console.log(newProducts, "xyx")
    : console.log(newProducts, "yx");

  const loadMore = () => {
    setLimit((prevState) => {
      return prevState + 15;
    });
  };
  return (
      <>
        <PageInfo />
        <div className={styles.shopLayout}>
          <Filter />
          <div className={styles.productConatiner}>
            {newProducts.slice(0, limit).map((item) => {
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
        
        </div>
        <Button
            className={styles.loadMoreBtn}
            EventHandler={() => loadMore()}
          >
            Load More
          </Button>
      </>
  );
}

export default Category;
