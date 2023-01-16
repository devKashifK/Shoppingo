
import Filter from "../../Components/Filter/Filter";
import ShopProducts from "../../Container/ShopProduct/ShopProducts";
import PageInfo from "../../PageInfo/PageInfo";
import styles from "./shop.module.css"


function Shop(){
    return(
        <>
        <PageInfo /> 
        <div className={styles.shopLayout}>
        <Filter />
        <ShopProducts />
        </div>
        </>
    )
}


export default Shop;