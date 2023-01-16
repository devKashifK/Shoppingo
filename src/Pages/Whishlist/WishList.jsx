import { useSelector } from "react-redux"
import WishlistProduct from "../../Components/Products/WishlistProduct"
import PageInfo from "../../PageInfo/PageInfo"
import styles from "./Wishlist.module.css"



export default function Wishlist(){
const wishlistProducts = useSelector((state) => state.allProducts.wishlist)
    return(
        <>
        <PageInfo />
        {wishlistProducts?.length === 0 || wishlistProducts === null || wishlistProducts === undefined  ? <img className={styles.error} src="./images/noItems.jpg" alt=""/> : <> <div className={styles.wishlistItemCount}>
           <h6>Wishlist {wishlistProducts?.length} Items</h6>
            <button>CONTINUE SHOPPING</button>
        </div>
        <div className={styles.WishlistCont}>
           {wishlistProducts?.map((item) => {
            return <WishlistProduct key={item.id} id={item.id} title={item.title} price={item.price} image={item.images[0]}/>
           })}

        </div> </>}
       
        </>
    )
}