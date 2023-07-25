import React, { useState } from 'react'
import "./contact.css";
import { useNavigate } from 'react-router-dom';
import heroImg from "./asset/hero.jpg";
import request from "../../util/fetchAPI";


const Contact = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    "firstName": "",
    "lastName":"",
    "email":"",
    "phone":"",
    "message":""
  })
  const handleInput = (e) => {
    const {value, name} = e.target;
    
    setData((perVal)=>{
      return {
        ...perVal,
        [name] : value
      }
    })
  }

  const handleSubmit = async (e) => {
       e.preventDefault();
       const {firstName, lastName, email, phone, message} = data;
       try{
      const options = {
        "Content-Type": "application/json",
      };

      const data = await request("/contact", "POST", options, {
        firstName, lastName, email, phone, message
      });
      if (data) {
        alert("Message Send");
        navigate("/")
      } else {
        alert("Sorry");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class="contact_us_2">
  <div class="responsive-container-block big-container">
    <div class="blueBG">
    <img src={heroImg} alt="" />
    </div>
    <div class="responsive-container-block container">
      <form class="form-box" onSubmit={handleSubmit}>
        <div class="container-block form-wrapper">
          <div className="mainHeading">
            <h2 className='heading'>GET IN TOUCH</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, obcaecati!</p>
          </div>
          <div className="inputContainer">
            <input type="text" placeholder='First Name' value={data.firstName} name='firstName' onChange={handleInput}/>
            <input type="text" placeholder='Last Name' value={data.lastName} name='lastName' onChange={handleInput}/>
            <input type="text" placeholder='Email' value={data.email} name='email' onChange={handleInput}/>
            <input type="text" placeholder='Phone no' value={data.phone} name='phone' onChange={handleInput}/>
            <textarea placeholder='Write your message here' value={data.message} name="message" onChange={handleInput}></textarea>
          </div>
          <button class="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Contact