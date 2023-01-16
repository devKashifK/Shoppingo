import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, { DarkButton } from "../../Components/Button/Button";
import PageInfo from "../../PageInfo/PageInfo";
import { AccountActions } from "../../Store/Account-slice";
import styles from "./Account.module.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.accounts.account);
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const checkLogin = () => {
    const validUser = userData.findIndex(
      (current) =>
        current.email === loginDetail.email &&
        current.password === loginDetail.password
    );
    if (validUser !== -1) {
      navigate("/account");
      dispatch(AccountActions.LoggedIn());
    }
   
  };

  return (
    <>
      <PageInfo />
      <div className={styles.container}>
        <h4>Login Now</h4>
        <input
          type="text"
          placeholder="Enter Username or Email address"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          name="password"
          onChange={handleChange}
        />
        <div className={styles.buttonBox}>
          <Button EventHandler={() => checkLogin()}>Log in</Button>
          <DarkButton EventHandler={() => navigate("/signup")}>
            Create New Account
          </DarkButton>
        </div>
      </div>
    </>
  );
}
