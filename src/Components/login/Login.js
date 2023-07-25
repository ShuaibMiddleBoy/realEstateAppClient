import React, { useEffect, useState } from "react";
import familyPic from "./asset/familyPic.jpg";
import { Button } from "@mui/material";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import request from "../../util/fetchAPI";
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    console.log(email, password);

    const options = {
      "Content-Type": "application/json",
    }

    const data = await request('/auth/login', "POST", options, { email, password })


    if (data.auth) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("auth", JSON.stringify(data.auth));
      navigate("/");
    } else {
      alert("Please Enter Correct Details");
    }
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.left}>
            <div className={style.overlay}>
            <Link to={"/"}>GO BACK TO HOME</Link>
            </div> 
            
            <img srcSet={familyPic} alt="" className={style.image} />
          
          </div>
          <div className={style.right}>
            <h2 className={style.heading}>Sign In</h2>
            <form onSubmit={handleSubmit} className={style.form}>
              <div>
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
                            <div>
                <label htmlFor="password">
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <Button type="submit" className={style.submit}>SIGN IN</Button>
            </form>
            <div className="alreadyAccount">
              <span>
                Need an Account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
