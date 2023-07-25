import React, { useEffect, useState } from "react";
import style from "./properties.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import request from "../../util/fetchAPI";
const Properties = () => {
  const [properties, setAllProperties] = useState([]);
  

    // fetch all properties
    useEffect(() => {
      const fetchAllProperties = async() => {
        const data = await request(`/property/getAll`, 'GET')
        setAllProperties(data)
      }
      fetchAllProperties()
    }, [])


  return (
    <>
      <div className={style.wrapper}>
      <div className={style.mainHeading}>
        <h2 className={style.heading}>Properties</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore impedit tenetur fugit. Nam, sed! Expedita maiores deserunt alias neque excepturi?</p>
      </div>
        <div className={style.items}>
          {properties.map((item) => {
            return (
              <Link to={`/property/find/${item._id}`}>
              <div className={style.item}>
                <div className={style.image}>
                  <img
                    src={`http://localhost:8000/images/${item.image}`}
                    alt=""
                    style={{ width: "300px", height: "200px" }}
                  />
                </div>
                <div className={style.text}>
                  <div className={style.category}>
                    <span
                      style={{
                        backgroundColor: "rgba(255, 152, 0, 0.1)",
                        color: "rgb(255, 152, 0)",
                      }}
                    >
                      FOR RENT
                    </span>
                    <FavoriteIcon style={{color:"#7288B9"}} />
                  </div>

                  <h4>{item.title}</h4>
                  <p>
                    <LocationOnIcon />
                    210 Zirak Road, Canada
                  </p>
                </div>
                <div className={style.bottom}>
                  <span>${item.price}</span>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Properties;
