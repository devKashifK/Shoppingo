import { BrandsFilterData, CategoriesFilterData, ColorsFilterData, DiscountFilterData } from "./CategoriesFilterData";
import styles from "./CategoriesFilter.module.css"



export  function CategoriesFilter(){
    return(
        <div className={styles.FilterBox}>
        <h3 className={styles.filterTitle}>Categories</h3>
        {CategoriesFilterData.map((item) => {
            return(
            <p key={item.id} className={styles.Name}  id={item.id}><strong> › </strong>{item.Category}</p>
            )
        })}
        </div>
    )
}
export  function BrandsFilter(){
    return(
        <div className={styles.FilterBox}>
        <h3 className={styles.filterTitle}>Brands</h3>
        {BrandsFilterData.map((item) => {
            return(
            <p key={item.id} className={styles.Name}  id={item.id}><strong> › </strong>{item.Category}</p>
            )
        })}
        </div>
    )
}

export  function DiscountFilter(){
    return(
        <div className={styles.FilterBox}>
        <h3 className={styles.filterTitle}>Discount</h3>
        {DiscountFilterData.map((item) => {
            return(
            <p key={item.id} className={styles.Name}  id={item.id}><strong> › </strong>{item.Category}</p>
            )
        })}
        </div>
    )
}
export  function ColorFilter(){
    return(
        <div className={styles.FilterBox}>
        <h3 className={styles.filterTitle}>Colors</h3>
        {ColorsFilterData.map((item) => {
            return(
            <div className={styles.Name} key={item.id}  id={item.id}><strong> › </strong> <span style={{backgroundColor: `${item.Category}`}} className={styles.box}></span>{item.Category}</div>
            )
        })}
        </div>
    )
}