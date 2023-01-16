import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { BsCart4, BsHeart, BsMoon, BsSearch, BsSun } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { darkModeActions } from "../../Store/dark-slice";
import { useDispatch } from "react-redux";

function Header() {
  const [active, setActive] = useState(false);
  const [categoryMenu, setCategoryMenu] = useState(false);
  const darkMode = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  const cartLength = useSelector((state) => state.allProducts.cartData.cart);

  const changeActive = () => {
    setActive(!active);
  };

  return (
    <div className={styles.header}>
      <div className={styles.toggle} onClick={changeActive}>
        <GiHamburgerMenu />
      </div>
      <div
        className={`${styles.sideBar} ${active ? styles.sideBarActive : ""}`}
      >
        <div className={styles.closeSideBar} onClick={() => setActive(false)}>
          <MdOutlineClose />{" "}
        </div>
        <div className={styles.leftSide}>
          <Link to={"/"}>
            <img className={styles.logo} src="./images/logo.webp" alt="logo" />
          </Link>
          <nav>
            <NavLink
              className={styles.link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#f4f4f4" : "" };
              }}
              to={"/"}
            >
              Home
            </NavLink>
            <li className={styles.megaMenu}>
              <NavLink
                className={styles.link}
                onClick={() => setCategoryMenu(!categoryMenu)}
              >
                Categories
              </NavLink>
              <div
                className={`${styles.CategoryMenu} ${
                  categoryMenu ? styles.CategoryMenuActive : ""
                }`}
              >
                <div className={styles.row}>
                  <div className={styles.colGroup}>
                    <h6>Fashion</h6>
                    <ul>
                      <Link to={"/category"} className="link">
                        T-SHIRTS
                      </Link>
                      <Link to={"/category"} className="link">
                        SHIRTS
                      </Link>
                      <Link to={"/category"} className="link">
                        JACKETS
                      </Link>
                      <Link to={"/category"} className="link">
                        DRESSES
                      </Link>
                      <Link to={"/category"} className="link">
                        SNEAKERS
                      </Link>
                      <Link to={"/category"} className="link">
                        BELTS
                      </Link>
                      <Link to={"/category"} className="link">
                        SHOES
                      </Link>
                    </ul>
                  </div>
                  <div className={styles.colGroup}>
                    <h6>ELECTRONICS</h6>
                    <ul>
                      <Link to={"/category"} className="link">
                        MOBILE
                      </Link>
                      <Link to={"/category"} className="link">
                        LAPTOPS
                      </Link>
                      <Link to={"/category"} className="link">
                        MACBOOK
                      </Link>
                      <Link to={"/category"} className="link">
                        TELEVISIONS
                      </Link>
                      <Link to={"/category"} className="link">
                        LIGHTING
                      </Link>
                      <Link to={"/category"} className="link">
                        SMART WATCH
                      </Link>
                      <Link to={"/category"} className="link">
                        PHONES
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <NavLink
              className={styles.link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#f4f4f4" : "" };
              }}
              to={"/shop"}
              onClick={changeActive}
            >
              Shop
            </NavLink>
            <NavLink
              className={styles.link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#f4f4f4" : "" };
              }}
              to={"/about"}
              onClick={changeActive}
            >
              About
            </NavLink>
            <NavLink
              className={styles.link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#f4f4f4" : "" };
              }}
              to={"/contact"}
              onClick={changeActive}
            >
              Contact
            </NavLink>
            <NavLink
              className={styles.link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#f4f4f4" : "" };
              }}
              to={"/Account"}
              onClick={changeActive}
            >
              Account
            </NavLink>
            <NavLink
              className={styles.link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#f4f4f4" : "" };
              }}
              to={"/Blog"}
              onClick={changeActive}
            >
              Blog
            </NavLink>
          </nav>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div
          className={styles.icon}
          onClick={() => dispatch(darkModeActions.darkMode())}
        >
          {darkMode.isDarkModeOn ? <BsSun /> : <BsMoon />}
        </div>

        <div className={styles.icon}>
          <BsSearch />
        </div>
        <Link to="/wishlist" className="link">
          <div className={styles.icon}>
            <BsHeart />
          </div>
        </Link>
        <Link to="/cart" className="link">
          <div className={styles.icon}>
            <div className={styles.totalItems}> {cartLength?.length}</div>
            <BsCart4 />
          </div>
        </Link>
        <Link to="/account" className="link">
          <div className={styles.icon}>
            <HiUserCircle />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
