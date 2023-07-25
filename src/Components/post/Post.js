import React from 'react'
import style from "./post.module.css";
import Addproperty from '../addProperty/Addproperty';

const Post = () => {
  return (
    <div className={style.container}>
        <h3>Sell/Rent? - Post Property - Free</h3>
        <Addproperty/>
    </div>
  )
}

export default Post