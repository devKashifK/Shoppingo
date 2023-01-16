import styles from "./404.module.css"


function PageNotFound(){
    return(
        <img className={styles.error} src="./images/404.jpg"  alt="404"/>
    )
}


export default PageNotFound