import { useState } from "react";
import { BrandsFilter, CategoriesFilter, ColorFilter, DiscountFilter } from "../CategoriesFIlter/CategoriesFilter";
import styles from "./Filter.module.css";

export default function Filter() {
  const [show ,setShow] =useState(false)
  return <div className={styles.filterCont}>
    <div className={styles.filter}> <p> Filters </p></div>
    <div className={styles.display} >
    <CategoriesFilter />
    <BrandsFilter />
    <div className="priceFilter"></div>
    <ColorFilter />
    <DiscountFilter />
    </div>
  </div>;
}
