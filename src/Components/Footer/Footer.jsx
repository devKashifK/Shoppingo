import { Link } from "react-router-dom";
import Container from "../Conatiner/Conatiner";
import styles from "./Footer.module.css";
import {
  BsFacebook,
  BsHeart,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerCont}>
          <div className={styles.footerBox}>
            <img className={styles.logo} src="./images/logo.webp" alt="logo" />
            <h4 className={styles.footerTitle}>About Us</h4>
            <p className={styles.footerText}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className={styles.footerBox}>
           <h4 className={styles.footerTitle}> Explore </h4>
            <ul>
              <li>
                <Link className={styles.link} to="">
                  {" "}
                  <strong> &rsaquo; </strong> Fashion
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="">
                  {" "}
                  <strong> &rsaquo; </strong> Women
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="">
                  {" "}
                  <strong> &rsaquo; </strong> Furniture
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="">
                  {" "}
                  <strong> &rsaquo; </strong> Shoes
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="">
                  {" "}
                  <strong> &rsaquo; </strong> TopWear
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="">
                  {" "}
                  <strong> &rsaquo; </strong> Brands
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="">
                  {" "}
                  <strong> &rsaquo; </strong> Kids
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerBox}>
           <h4 className={styles.footerTitle}> Contact Us </h4>
            <div className="info">
              <h4 className={styles.footerTitle}>Support</h4>
              <p className={styles.footerText}>support@example.com</p>
            </div>
            <div className="info">
              <h4 className={styles.footerTitle}>Toll Free</h4>
              <p className={styles.footerText}>1800-8xx-2xx</p>
            </div>
            <div className="info">
              <h4>Follow Us</h4>
              <div className={styles.footerIconsCont}>
              <div className={styles.footerIcons}>
                <BsFacebook />
              </div>
              <div className={styles.footerIcons}>
                <BsTwitter />
              </div>
              <div className={styles.footerIcons}>
                <BsLinkedin />
              </div>
              <div className={styles.footerIcons}>
                <BsYoutube />
              </div>
              <div className={styles.footerIcons}>
                <BsInstagram />
              </div>
              </div>
            </div>
          </div>
          <div className={styles.footerBox}>
            <h4 className={styles.footerTitle}> Stay Informed </h4>
            <input type="text" placeholder="Enter Your Email" />
            <button>SUBSCRIBE</button>
            <p className={styles.footerText}>
              Subscribe to our newsletter to receive early discount offers,
              updates and new products info.
            </p>
          </div>
        </div>
      </Container>
    </div>
    <div className={styles.copyright}>Made With <strong> <BsHeart /></strong>  Copyright &copy;  2022</div>
    </>
  );
}
