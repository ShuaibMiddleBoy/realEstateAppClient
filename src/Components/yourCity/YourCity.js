import style from "./yourCity.module.css";
import img1 from "./asset/place_1.webp";
import img2 from "./asset/place_2.webp";
import img3 from "./asset/place_3.webp";
import img4 from "./asset/place_4.webp";
import img5 from "./asset/place_5.webp";
import img6 from "./asset/swat.jpg"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const YourCity = () => {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h1 className={style.heading}>Find Properties In Your City</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ducimus veniam natus, aspernatur.
        </p>
      </div>

      <div className={style.grid}>
        <Link to={`/property/find?city=lahore`}>
          <div className={style.box}>
            <img src={img1} alt="" />
            <div className={style.overlay}>
              <div>
                <h3>Lahore</h3>
              </div>
              <div>
                <h5>198 Houses for sale in Lahore</h5>
                <span>
                  See all Listing <ArrowForwardIcon />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/property/find?city=islamabad`}>
          <div className={style.box}>
            <img src={img2} alt="" />
            <div className={style.overlay}>
              <div>
                <h3>Islamabad</h3>
              </div>
              <div>
                <h5>198 Houses for sale in Lahore</h5>
                <span>
                  See all Listing <ArrowForwardIcon />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/property/find?city=karachi`}>
          <div className={style.box}>
            <img src={img3} alt="" />
            <div className={style.overlay}>
              <div>
                <h3>karachi</h3>
              </div>
              <div>
                <h5>198 Houses for sale in Lahore</h5>
                <span>
                  See all Listing <ArrowForwardIcon />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/property/find?city=rawalpindi`}>
          <div className={style.box}>
            <img src={img4} alt="" />
            <div className={style.overlay}>
              <div>
                <h3>Rawalpindi</h3>
              </div>
              <div>
                <h5>198 Houses for sale in Lahore</h5>
                <span>
                  See all Listing <ArrowForwardIcon />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/property/find?city=peshawar`}>
          <div className={style.box}>
            <img src={img5} alt="" />
            <div className={style.overlay}>
              <div>
                <h3>Peshawar</h3>
              </div>
              <div>
                <h5>198 Houses for sale in Lahore</h5>
                <span>
                  See all Listing <ArrowForwardIcon />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/property/find?city=swat`}>
          <div className={style.box}>
            <img src={img6} alt="" />
            <div className={style.overlay}>
              <div>
                <h3>Swat</h3>
              </div>
              <div>
                <h5>198 Houses for sale in Lahore</h5>
                <span>
                  See all Listing <ArrowForwardIcon />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default YourCity;
