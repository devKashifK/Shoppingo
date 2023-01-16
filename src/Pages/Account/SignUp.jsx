import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkButton } from "../../Components/Button/Button";
import PageInfo from "../../PageInfo/PageInfo";
import { AccountActions } from "../../Store/Account-slice";
import styles from "./Account.module.css";

export default function SignUp() {
  const account = useSelector((state) => state.accounts.account)
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
  });

  const [error , setError] = useState({
    errorMsg : "", 
    add : false,
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const sendData = () => {
    if(formData.firstName === "" || formData.lastName === "" || formData.email === ""|| formData.password === "" || formData.userName === "" ){
      setError({
        errorMsg : "Field Must Not Be Empty", 
        add : false,
      })
    }
      else{
      
    const match = account.findIndex(
      (current) =>
        current.email === formData.email &&
        current.firstName === formData.firstName
    );
    console.log(match)
    if(match < 0){
    dispatch(AccountActions.addAccount(formData));
    setError({
      errorMsg : "Success", 
      add : true,
    })
    }
    else{
      setError({
        errorMsg : "User Already Exist", 
        add : false,
      })
    }
  }
  
  };
  return (
    <>
      <PageInfo />
      <div className={styles.signUpContainer}>
        <h4>Sign Up</h4>
        <div className={styles.colGroup}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Enter Email Address"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Username"
          name="userName"
          onChange={handleChange}
          required
        />
        <div className={styles.colGroup}>
          <input
            type="text"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
            required
          />
          <input type="text" placeholder="Re-Type Your Password"  required/>
        </div>
        <div className={styles.buttonBox}>
          <DarkButton EventHandler={() => sendData()}>Sign Up</DarkButton>
        </div>
      </div>
    </>
  );
}
