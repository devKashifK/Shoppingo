import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { productsAction } from "../../Store/product-slice";
import Button from "../Button/Button";
import styles from "./wishlistCard.module.css";


export default function WishlistProduct(props){
  const dispatch = useDispatch()
  const moveToCart = () => {
    dispatch(productsAction.getCartData(props.id));
    dispatch(productsAction.removeFromWishlist(props.id))
  }
    return(
       <div className={styles.wishlistCard}>
        <div className={styles.remove} onClick={() => dispatch(productsAction.removeFromWishlist(props.id))}><AiOutlineClose /></div>
        <div className={styles.wishlistBox}>
          <div className={styles.wishlistImg}>
            <img src={props.image} alt="" />
          </div>
          <div className={styles.content}>
          <h4>{props.title}</h4>
          <div className={styles.priceBox}>
            <p className={styles.price}>{props.price}</p>
            <p className={styles.discount}>{props.price + Math.floor(props.price / 100 * 20)}</p>
            </div>
          </div>
          <Button className={styles.btn} EventHandler={() => moveToCart()}>MOVE TO BAG</Button>
          </div>
       </div>
    )
}