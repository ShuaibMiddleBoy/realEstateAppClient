import request from "../../util/fetchAPI";
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import style from "./type.module.css";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

const TypeHome = () => {
    const [numProperties, setNumProperties] = useState([]);  
const [searchParams, setSearchParams] = useSearchParams();
console.log();
let type = searchParams.get("type");
let city = searchParams.get("city");

    useEffect(()=>{
        const fetchNumProperties = async () => {
          try {
            if(type){
            const data = await request(`/property/find?type=${type}`, "GET");
            setNumProperties(data)
            }
            if(city){
              const data = await request(`/property/find?city=${city}`, "GET");
              setNumProperties(data)
            }
          } catch (error) {
            console.log(error.message);
          }
        }
        fetchNumProperties();
      },[])


console.log(numProperties);
  return (
    <div className={style.container}>
            <div className={style.heading}>
        <h1>{type || city} Properties</h1>
        <p>Properties you may like</p>
        </div>
        <div className={style.grid}>
        
        {numProperties.map((property)=>{
        return(
            <Link to={`/property/find/${property._id}`} key={property._id} className={style.box}>
                <div className={style.image}>
                    <img src={`http://localhost:8000/images/${property?.image}`}  alt="" /> 
                </div>
                <div className={style.text}>
                 <div className={style.category}>
                 <span>For Rent</span>
                 <FavoriteIcon className={style.favoriteIcon}/>
                 </div>
                 <h4>{property?.type}</h4>
                 <p>{property?.title}</p>
                </div>
                <div className={style.button}>
                <div>
                <Button variant="contained" className={style.btn}>{property?.price}</Button>
                    <label htmlFor="">/pkr</label>
                    </div>
                    <span>Apartment</span>
                </div>
            </Link>)    
        })}
            
        </div>
    </div>
  )
}

export default TypeHome