import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import PageInfo from "../../PageInfo/PageInfo";
import { productsAction } from "../../Store/product-slice";
import styles from "./Cart.module.css";

export default function Cart() {
  const cartProducts = useSelector((state) => state.allProducts.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsAction.getTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  return (
    <>
      <PageInfo />
      <div className={styles.cartItemCount}>
        <h6>Cart {cartProducts.cart?.length} Items</h6>
        <button>Proceed to Buy</button>
      </div>
      <div className={styles.cartCont}>
        {cartProducts.cart?.length === 0 ||
        cartProducts.cart === null ||
        cartProducts.cart === undefined ? (
          <img className={styles.error} src="./images/noItems.jpg" alt="" />
        ) : (
          <>
            <div className={styles.productsHeadings}>
              <h4>Product</h4>
              <h4 className={styles.descriptionHeading}>Description</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>

            {cartProducts.cart?.map((item) => {
              return (
                <div className={styles.cartCard}>
                  <div
                    className={styles.removeBtn}
                    onClick={() => dispatch(productsAction.removeItem(item.id))}
                  >
                    <AiOutlineClose />
                  </div>
                  <div className={styles.img}>
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div className={styles.productContent}>
                    <h4>{item.title}</h4>
                    <p>{item.description.substr(0, 100)}...</p>
                  </div>
                  <p className={`${styles.price} ${styles.margin}`}>
                    {item.price}
                  </p>
                  <div className={styles.details}>
                    <div className={styles.counter}>
                      <button
                        className={styles.minus}
                        onClick={() =>
                          dispatch(productsAction.decreaseQty(item.id))
                        }
                      >
                        -
                      </button>
                      <p>{item.qty}</p>
                      <button
                        className={styles.plus}
                        onClick={() =>
                          dispatch(productsAction.increaseQty(item.id))
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className={styles.price}>{item.qty * item.price}</p>
                  </div>
                </div>
              );
            })}

            <div className={styles.cartPricingDetails}>
              <h4>Total Quantity : {cartProducts.totalQuantity}</h4>
              <h4>Total Price : {cartProducts.totalAmount} </h4>
              <Button>Proceed To Buy</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
