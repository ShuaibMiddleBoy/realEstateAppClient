import { Button } from "@mui/material";

import MyModel from "./Model";
import { useState } from "react";
const Signin = () => {
  const [showModel, setShowModel] = useState(false);
  const closeModel = () => setShowModel(false);

  return (
    <>
      <Button variant="contained"
      style={{backgroundColor:"lightgray", color:"black"}}
        onClick={() => {
          setShowModel(true);
        }}
      >
        Sign In
      </Button>
      {showModel && <MyModel closeModel={closeModel} />}
    </>
  );
};

export default Signin;
