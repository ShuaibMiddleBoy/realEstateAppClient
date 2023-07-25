import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "./asset/logo.png";
import Button from '@mui/material/Button';
import Signin from "../signin/Signin";
import Addproperty from "../addProperty/Addproperty";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <Link to="/">
            <img alt="logo" srcset={logo} style={{ width: "80px" }} />
          </Link>
        </div>

        {auth ? 
      <> 
          <div className={style.center}>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/properties"}>Properties</Link>
              </li>
              <li>
                <Link to={"/featured"}>Featured</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={style.right}>
          <ul>
          <li>
            <Link onClick={logout} to="/"><Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}}>Logout</Button></Link>
            </li>
            <li>
                <Addproperty/>
              </li>
            </ul>
          </div>
          </>  
        : 
          <>
            <div className={style.center}>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className={style.right}>
            <ul>
                    <li>
                      <Signin/>
                    </li>
                    <li>
                      <Link to={"/signup"}><Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}}>Signup</Button></Link>
                    </li>
                  </ul> 
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Navbar;
