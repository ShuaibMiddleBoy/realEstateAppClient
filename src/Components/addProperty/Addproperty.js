// import React, { useState } from 'react';
// import axios from "axios";
// import style from "./addProperty.module.css";

// const AddProperty = () => {
//     const [property, setProperty] = useState({
//         title : "",
//         type : "",
//         desc : "",
//         price : "",
//         image : ""
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const currentOwner = JSON.parse(localStorage.getItem("user"))._id;

//         const formData = new FormData();
//         formData.append("image", property.image);
//         formData.append("title", property.title);
//         formData.append("type", property.type);
//         formData.append("price", property.price);
//         formData.append("desc", property.desc);
//         formData.append("currentOwner", currentOwner);

//         axios.post("http://localhost:8000/add-property", formData)
//         .then((res)=>{
//           alert("Data Added")
//         })
//         .catch((err)=>{
//           console.log(err);
//         })
//       }

//     const handleChange = (e) => {
//         const {value, name} = e.target;

//         setProperty((preVale)=>{
//           return {
//             ...preVale,
//             [name] : value
//           }
//         })
//     }
//     const handleImage = (e) => {
//         setProperty((preValue)=>{
//             return {
//               ...preValue,
//               image : e.target.files[0]
//             }
//           })
//     }

//   return (
//     <div className={style.wrapper}>
//     <div className={style.container}>
//         <h2>Add Property</h2>
//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input type="text" placeholder='title' name='title' onChange={handleChange} value={property.title} />
//         <input type="text" placeholder='type' name='type' onChange={handleChange} value={property.type} />
//         <input type="text" placeholder='price' name='price' onChange={handleChange} value={property.price} />
//         <input type="file" name='image' accept=".png, .jpg, .jpeg" onChange={handleImage}/>
//         <textarea name="desc" rows="10" onChange={handleChange} value={property.desc}></textarea>
//         <input type="submit" value="Add" />
//         </form>
//     </div>
//     </div>
//   )
// }

// export default AddProperty

import React, { useState } from "react";
import { Button } from "@mui/material";
import Model from "./Model";
const Addproperty = () => {
  const [showModel, setShowModel] = useState(false);
  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ backgroundColor: "#33a137" }}
        onClick={() => {
          setShowModel(true);
        }}
      >
        Add Property
      </Button>
      {showModel && <Model closeModel={closeModel} />}
    </>
  );
};

export default Addproperty;
