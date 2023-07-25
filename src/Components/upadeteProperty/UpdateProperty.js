import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./updateProperty.module.css";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../util/fetchAPI";
const UpdateProperty = () => {
  const navigate = useNavigate();

  const [property, setPropertyDetails] = useState([]);
  const [initialPhoto, setInitialPhoto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const data = await request(`/property/find/${id}`, "GET");
        setPropertyDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPropertyDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, type, price, desc, beds, area, image } = property;

    let filename = initialPhoto;
    if (image && image !== initialPhoto) {
      const formData = new FormData();
      filename = image.name;
      formData.append("filename", filename);
      formData.append("image", image);

      const options = {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
      };

      await request("/upload/image", "POST", options, formData, true);
    }

    const res = await fetch(`http://localhost:8000/property/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
      },
      body: JSON.stringify({
        title,
        type,
        price,
        desc,
        beds,
        area,
        image: filename,
      }),
    });

    await res.json();
    alert('data updated')
    navigate("/")
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setPropertyDetails((preVale) => {
      return {
        ...preVale,
        [name]: value,
      };
    });
  };
  const handleImage = (e) => {
    setPropertyDetails((preValue) => {
      return {
        ...preValue,
        image: e.target.files[0],
      };
    });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.heading}>Update Property</h2>
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
          <input
            type="text"
            placeholder="price"
            name="price"
            onChange={handleChange}
            value={property.price}
          />
          <input
            type="text"
            placeholder="beds"
            name="beds"
            onChange={handleChange}
            value={property.beds}
          />
          <input
            type="text"
            placeholder="area"
            name="area"
            onChange={handleChange}
            value={property.area}
          />
          <input
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
            onChange={handleImage}
          />
              <select name="city" onChange={handleChange}>
          <option>Select a city</option>
            <option value="islamabad">Islamabad</option>
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
            <option value="peshawar">Peshawar</option>
            <option value="swat">Swat</option>
          </select>
          <textarea
            name="desc"
            rows="10"
            onChange={handleChange}
            value={property.desc}
          ></textarea>
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
