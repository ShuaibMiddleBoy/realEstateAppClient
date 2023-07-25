import React, { useState } from "react";
import style from "./addProperty.module.css";
import { useNavigate } from "react-router-dom";
import request from "../../util/fetchAPI";

const Model = ({ closeModel }) => {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    title: "",
    type: "",
    desc: "",
    price: "",
    image: "",
    area: "",
    beds: "",
    city: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, type, desc, price, image, area, beds, city } = property;

    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      let filename = null;
      if (image) {
        const formData = new FormData();
        filename = image.name;
        formData.append("filename", filename);
        formData.append("image", image);
        const options = {
          Authorization: `Bearer ${token}`,
        };

        await request("/upload/image", "POST", options, formData, true);
      }

      const options = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const data = await request("/property", "POST", options, {
        ...property,
        image: filename,
      });
      if (data) {
        alert("Property Added");
        navigate("/");
      } else {
        alert("Sorry");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setProperty((preVale) => {
      return {
        ...preVale,
        [name]: value,
      };
    });
  };
  const handleImage = (e) => {
    setProperty((preValue) => {
      return {
        ...preValue,
        image: e.target.files[0],
      };
    });
  };

  return (
    <>
      <div className={style.wrapper} onClick={closeModel}></div>
      <div className={style.container}>
        <button onClick={closeModel} className={style.crossBtn}>
          X
        </button>
        <h2 className={style.heading}>Add Property </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={property.title}
          />
          <select name="type" onChange={handleChange}>
          <option>Select a property type</option>
            <option value="home">Home</option>
            <option value="house">House</option>
          </select>
          {/* <input
            type="text"
            placeholder="type"
            name="type"
            onChange={handleChange}
            value={property.type}
          /> */}
          <input
            type="text"
            placeholder="price"
            name="price"
            onChange={handleChange}
            value={property.price}
          />
          <input
            type="text"
            placeholder="area"
            name="area"
            onChange={handleChange}
            value={property.area}
          />
          {/* <input
            type="text"
            placeholder="city"
            name="city"
            onChange={handleChange}
            value={property.city}
          /> */}

          <select name="city" onChange={handleChange}>
          <option>Select a city</option>
            <option value="islamabad">Islamabad</option>
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
            <option value="peshawar">Peshawar</option>
            <option value="swat">Swat</option>
          </select>
          <input
            type="number"
            placeholder="beds"
            name="beds"
            onChange={handleChange}
            value={property.beds}
          />
          <input
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
            onChange={handleImage}
            className={style.imageInput}
          />
          <textarea
            name="desc"
            rows="7"
            onChange={handleChange}
            value={property.desc}
          ></textarea>
          <input type="submit" value="Add" />
        </form>
      </div>
    </>
  );
};

export default Model;
