import styles from "./Title.module.css"


function Title(props){
    return(
        <div className={styles.dynamicTitle}>
            <div className={styles.line}></div>
        <h3 className={styles.MainTitle}>{props.title}</h3>
        <div className={styles.line}></div>
        </div>
    )
}

export default Title