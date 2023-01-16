import styles from "./products.module.css";
import {
  BsFillCartCheckFill,
  BsFillCartPlusFill,
  BsFillSuitHeartFill,
  BsSuitHeart,
  BsZoomIn,
} from "react-icons/bs";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../Store/product-slice";

function ProductCard(props) {
  const isModalActive = useSelector((state) => state.allProducts.showModal);
  const dispatch = useDispatch();
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));
  const cart = JSON.parse(localStorage.getItem("cart"));

  const wishlisted =
    wishlist?.find((product) => product.id === props.id) !== undefined;
  const alreadyInCart =
    cart?.find((product) => product.id === props.id) !== undefined;

  const addToWishList = () => {
    dispatch(productsAction.updateWishList(props.id));
  };
  const addToCart = () => {
    dispatch(productsAction.getCartData(props.id));
  };

  const HandleClick = (event) => {
    event.stopPropagation();
    dispatch(productsAction.changeModal());
    dispatch(productsAction.getData(props.id));
  };

  return (
    <div className={styles.productCardCont}>
    <div className={styles.productCardBox}>
      {isModalActive ? <Modal /> : ""}
      <div className={styles.ProductCard}>
        <div className={styles.cardImage}>
          <img className={styles.img} src={props.image} alt={props.title} />
          <div className={styles.productOption}>
            {wishlisted ? (
              <div className={styles.icons}>
                <BsFillSuitHeartFill />
              </div>
            ) : (
              <div className={styles.icons} onClick={addToWishList}>
                <BsSuitHeart />
              </div>
            )}
            {!alreadyInCart ? (
              <div className={styles.icons} onClick={addToCart}>
                <BsFillCartPlusFill />
              </div>
            ) : (
              <div className={styles.icons}>
                <BsFillCartCheckFill />
              </div>
            )}
            <div className={styles.icons} onClick={HandleClick}>
              <BsZoomIn />
            </div>
          </div>
        </div>
        <div className={styles.productDetail}>
          <h3 className={styles.productTitle}>{props.title}</h3>
          <p className={styles.description}>{props.description}...</p>
          <div className={styles.price}>
            <span className={styles.discountPrice}>
              {props.price + Math.floor((props.price / 100) * 20)}
            </span>
            <span className={styles.MainPrice}>{props.price}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductCard;
