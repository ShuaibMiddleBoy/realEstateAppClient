import React, { useState } from 'react'
import style from "./newsLetter.module.css";
import request from "../../util/fetchAPI";


const NewsLetter = () => {
  const [email, setEmail] = useState();

  const handleInput = (e) => {
    const {value} = e.target;
    setEmail(value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const options = {
        "Content-Type": "application/json",
      };

      const data = await request("/subs", "POST", options, {
        email
      });
      if (data) {
        alert("Congratess You Subscribed");
      } else {
        alert("Sorry");
      }
    } catch (error) {
      console.log(error);
    }


  }
  return (
    <div className={style.container}>
        <h2>Do You Need Help With Anything?</h2>
        <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email Address' className={style.email} value={email} onChange={handleInput}/>
            <input type="submit" value={"Subscribe"} className={style.btn}/>
        </form>
    </div>
  )
}

export default NewsLetter;