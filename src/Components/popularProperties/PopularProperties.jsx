import style from "./popularProperties.module.css";
import card1 from "./asset/h1.png"
import card2 from "./asset/h2.png"
import card3 from "./asset/h3.png"
// import card4 from "./asset/h4.png"
// import card5 from "./asset/h5.png"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import request from "../../util/fetchAPI";

const PopularProperties = () => {
const [numProperties, setNumProperties] = useState({});  


useEffect(()=>{
  const fetchNumProperties = async () => {
    try {
      const data = await request("/property/find/types", "GET");
      setNumProperties(data)
    } catch (error) {
      console.log(error.message);
    }
  }
  fetchNumProperties();
},[])

  return (
    <div className={style.container}>
    <div className={style.heading}>
        <h1>Different Types of Properties</h1>
        <p>Best type of properties for you</p>
        </div>

<div className={style.featuredProp}>
<div className={style.card}>
  <Link to={`/property/find/?type=home`} alt="">
    <img src={card1} alt="" width={"55px"}/>
    <div className={style.cardContent}>
      <h4>Home Properties</h4>
      <p>{numProperties?.home} properties</p>
    </div>
    </Link>
  </div>
  <div className={style.card}>
  <Link to="/property/find?type=house" alt="">
    <img src={card2} alt="" width={"55px"}/>
    <div className={style.cardContent}>
      <h4>House Properties</h4>
      <p>{numProperties?.house} properties</p>
    </div>
    </Link>
  </div>
  <div className={style.card}>
  <Link to="/property/find?type=home" alt="">
    <img src={card3} alt="" width={"55px"}/>
    <div className={style.cardContent}>
      <h4>Home Properties</h4>
      <p>{numProperties?.home} properties</p>
    </div>
    </Link>
  </div>
</div>
    </div>
  )
}

export default PopularProperties;