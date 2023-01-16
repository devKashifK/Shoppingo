import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/404/404";
import Shop from "./Pages/Shop/Shop";
import axios from "axios";
import { productsAction } from "./Store/product-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import Wishlist from "./Pages/Whishlist/WishList";
import Cart from "./Pages/Cart/Cart";
import Profile from "./Pages/Account/Profile";
import Login from "./Pages/Account/Login";
import SignUp from "./Pages/Account/SignUp";

function App() {
  let account = [
    {
      firstName: "Kashif",
      lastName: "Khan",
      email: "kashfa9852@gmail.com",
      password: "123456789",
      userName: "kashfa9852",
    },
    {
      firstName: "Rahul",
      lastName: "Verma",
      email: "rahul@gmail.com",
      password: "1234567891",
      userName: "rahul12",
    },
  ];

  if (localStorage.getItem("account") === null) {
    localStorage.setItem("account", JSON.stringify(account));
  }

  const isLoggedIn = useSelector((state) => state.accounts.login);
  const dispatch = useDispatch();
  let url = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      dispatch(productsAction.addProducts(res.data));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/account"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login"></Navigate>}
          // element={<Profile />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
