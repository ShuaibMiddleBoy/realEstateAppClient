import React, { useEffect, useState } from "react";
import familyPic from "./asset/familyPic.jpg";
import { Button } from "@mui/material";
import style from "./signup.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import request from "../../util/fetchAPI";
const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [image, setImage] = useState("");

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
    
    let filename = null;
    if(image){
      const formData = new FormData();
      filename = crypto.randomUUID()+image.name;
      formData.append("filename", filename);
      formData.append("image", image);

      await request("/upload/image", "POST", {}, formData, true)
    }else{
      return
    }

    const headers = {
      "Content-Type":"application/json"
    }

    const data = await request("/auth/register", "POST", headers, {...user, "profileImage":filename});

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("auth", JSON.stringify(data.auth));
    if (data.userName) {
      navigate("/");
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
            <h2 className={style.heading}>Create Your Free Account</h2>
            <form onSubmit={handleSubmit} className={style.form}>
              <div>
                <label htmlFor="userName">
                  User Name<span>*</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Your Name"
                  value={user.userName}
                  onChange={handleInput}
                />
              </div>
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
                <label htmlFor="image">
                  Upload Phote<span>*</span>
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e)=>{setImage(e.target.files[0])}}
                  accept=".jpg, .jpeg, .png"
                  // style={{ display: "none" }}
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
              <div>
                <label htmlFor="cPassword">
                  Confirm Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="cPassword"
                  placeholder="Enter Confirm Password"
                  value={user.cPassword}
                  onChange={handleInput}
                />
              </div>
              <Button type="submit" className={style.submit}>Sign Up</Button>
            </form>
            <div className={style.alreadyAccount}>
              <span>
                Already have an Account? <Link to="/signin">Sign In</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
