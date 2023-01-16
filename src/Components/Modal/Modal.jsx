import styles from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Button, { DarkButton } from "../Button/Button";
import { BsCart, BsHeart } from "react-icons/bs";
import { productsAction } from "../../Store/product-slice";
import { createRef } from "react";

export default function Modal() {
  const preview = createRef();
  const data = useSelector((state) => state.allProducts.modalData);
  console.log(data);
  const dispatch = useDispatch();

  const changeImg = (event) => {
    preview.current.src = event.target.src;
  };
  return (
    <div className={styles.Modal}>
      <div className={styles.modalBox}>
        <div
          className={styles.closeBtn}
          onClick={() => dispatch(productsAction.changeModal())}
        >
          <AiOutlineClose />
        </div>
        <div className={styles.imgBox}>
          <div className={styles.previewImage}>
            <img src={data?.images[0]} alt="" ref={preview} />
          </div>
          <div className={styles.thumbnails}>
            <img src={data?.images[0]} alt="" onClick={changeImg} />
            <img src={data?.images[1]} alt="" onClick={changeImg} />
            <img src={data?.images[2]} alt="" onClick={changeImg} />
          </div>
        </div>
        <div className={styles.productContent}>
          <h4 className={styles.title}>
            {data !== undefined ? data.title : ""}
          </h4>
          <p className={styles.description}>
            {data !== undefined ? data.description : ""}
          </p>
          <div className={styles.priceBox}>
            <p className={styles.newPrice}>₹{data?.price}</p>
            <p className={styles.price}>
              ₹{data?.price + Math.floor((data?.price / 100) * 20)}
            </p>
            <p className={styles.discount}>(20% Off)</p>
          </div>
          <h6>More Colors</h6>
          <div className={styles.colorBox}>
            <div className={`${styles.color} ${styles.red}`}></div>
            <div className={`${styles.color} ${styles.green}`}></div>
            <div className={`${styles.color} ${styles.black}`}></div>
            <div className={`${styles.color} ${styles.yellow}`}></div>
            <div className={`${styles.color} ${styles.purple}`}></div>
          </div>
          <h6>Choose Size</h6>
          <div className={styles.sizeBox}>
            <div className={styles.size}>xs</div>
            <div className={styles.size}>s</div>
            <div className={styles.size}>m</div>
            <div className={styles.size}>l</div>
            <div className={styles.size}>xl</div>
          </div>
          <p className={styles.taxInfo}> inclusive of all taxes </p>
          <DarkButton>
            {" "}
            <BsCart /> Add to Bag{" "}
          </DarkButton>
          <Button>
            <BsHeart /> Add to Wishlist{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
