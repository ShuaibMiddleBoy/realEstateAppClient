import style from "./hero.module.css";
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Hero = () => {
  const [city, setCity] = useState("peshawar");
  const [type , setType] = useState("home");
  const [price, setPrice] = useState("0");

  console.log(price + ":" + type + ":" + city);
  return (
    <div className={style.container}>
      <h2 className={style.mainHeading}>Search properties for sale in pakistan</h2>
      <div className={style.sellType}>
      <Button variant="contained">Buy</Button>
      <Button variant="contained">Rent</Button>
      </div>
      <div className={style.inputPart}>
      <div className={style.searchPlace}>
        <select name="selectCity" id="selectCity" onChange={(e)=>setCity(e.target.value)}>
          <option value="" disabled>Select city</option>
          <option value="islamabad">Islamabad</option>
          <option value="karachi">Karachi</option>
          <option value="peshawar">Peshawar</option>
          <option value="lahore">Lahore</option>
        </select>
        <select name="selectType" id="selectType"  onChange={(e)=>setType(e.target.value)}>
          <option value="" disabled>Select Type</option>
          <option value="home">Home</option>
          <option value="house">House</option>
        </select>
        <select name="priceRange" id="priceRange"  onChange={(e)=>setPrice(e.target.value)}>
          <option value="" disabled>Select Price Range</option>
          <option value="0">10-20</option>
          <option value="1">20-30</option>
          <option value="2">30-40</option>
          <option value="3">40-50</option>
          <option value="4">50-60</option>
        </select>
        <button type="submit">Search</button>
      </div>
      </div>
    </div>
  )
}

export default Hero