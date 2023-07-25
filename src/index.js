import React from "react";
import "./index.css";
import reactDom from "react-dom/client";
import App from "./App";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
