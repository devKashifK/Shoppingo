import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import Container from "../Components/Conatiner/Conatiner"
import styles from "./PageInfo.module.css"


export default function PageInfo(){
let pageName = useLocation();
const[page, setPage] = useState();

useEffect (() => {
  setPage(pageName.pathname)
  }, [pageName])

    return(
       <div className={styles.pageInfo}>
        <Container>
        <h4>Home {page}</h4>
       </Container>
       </div>
    )
}