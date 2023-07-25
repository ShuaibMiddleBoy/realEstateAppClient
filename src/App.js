import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import FeaturedProperties from "./Components/featuredProperties/FeaturedProperties";
import Footer from "./Components/footer/Footer";
import Properties from "./Components/properties/Properties";
import PropertyDetails from "./Components/propertyDetails/PropertyDetails";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
import About from "./about/About";
import PrivateComponent from "./Components/PrivateComponent";
import Home from "./home/Home";
import AddProperty from "./Components/addProperty/Addproperty";
import UpdateProperty from "./Components/upadeteProperty/UpdateProperty";
import Contact from "./Components/contact/Contact";
import TypeHome from "./Components/type/Type";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route element={<PrivateComponent />}>
            <Route
              path="/properties"
              element={
                <>
                  <Navbar /> <Properties /> <Footer />
                </>
              }
            />
            <Route
              path="/property/find/:id"
              element={
                <>
                  <Navbar /> <PropertyDetails /> <Footer />
                </>
              }
            />
            <Route
              path="/property/:id"
              element={
                <>
                  <Navbar /> <UpdateProperty /> <Footer />
                </>
              }
            />
            <Route
              path="/featured"
              element={
                <>
                  <Navbar /> <FeaturedProperties /> <Footer />
                </>
              }
            />
            <Route
              path="/add-property"
              element={
                <>
                  <Navbar />
                  <AddProperty />
                  <Footer />
                </>
              }
            />
                  <Route
              path="/property/find"
              element={
                <>
                  <Navbar />
                <TypeHome/>
                  <Footer />
                </>
              }

              
            />
          </Route>
          <Route
            path="/signin"
            element={
              <>
                 <Login />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
