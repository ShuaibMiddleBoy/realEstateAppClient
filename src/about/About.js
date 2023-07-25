import React, { useEffect } from "react";
import style from "./about.module.css";
import heroImg from "./asset/hero.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
       try {
        const res = await fetch("http://localhost:8000/about",{
          headers : {
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        })
        const data = res.json();
        console.log(data);
       } catch (error) {
        console.log(error );
        navigate("/");
       }
  }
  useEffect(()=>{
    document.title = "Real Estate - About"
    callAboutPage();
  }, []);
  return (
    <>
    <Navbar/>
      <div className={style.hero}>
        <img src={heroImg} alt="" />
        <div className={style.overlay}>
        <span>About Us</span>
          <h1>About Us - Who We Are?</h1>
        </div>
      </div>
      <div className={style.container}>
        <h2>About Us</h2>
        <p>
          Founded in 2012, RealProperty focusing luxury real estate services
          focused on the sale and rent in Lahore, Islamabad, Rawalpindi,
          Karachi, and primarily focused on residential, commercial areas.
          RealProperty is known for its professional expertise and excellent
          customer support and property consultation by the locality senior most
          expert. We are a modern, dynamic company that combines technical
          know-how and knowledge of international and local property markets
          with a customer-first philosophy.
        </p>
        <p>
          RealProperty has become a genuine representative of the
          sub-continental life by offering select domestic real estate infused
          with the cravings and physiognomies of the sub-tropical region's
          landscape, design, architecture, and culture. RealProperty has a clear
          goal of providing its consumers of any origin with a collection of the
          very most exemplary real estate markets of Lahore, Rawalpindi,
          Islamabad, Karachi, Multan, Faisalabad, Peshawar, and Quetta.
          RealProperty makes sure that our service aligns in each case with the
          bespoke needs of our clients. Underlying this service are the values
          of providing long-term vision, transparency, confidentiality,
          personalization, quality, knowledge, and innovation in the real estate
          domain.{" "}
        </p>
        <p>
          RealProperty also provides its high net worth clients and investors to
          search from luxury to affordable budget properties for sale and rent
          across Pakistan. We offer critical real estate brokerage and surveying
          services to private buyers and investors, embassies, trusts, and
          foundations. We offer a portfolio of exclusive residential properties
          and investment and commercial real estate for sale and to let.{" "}
        </p>
        <p>
          With decades of experience in the sale and purchase of properties in
          Lahore, Rawalpindi/Islamabad, and Karachi and internationally,
          RealProperty serves clients the safety of a respectable, competent,
          and reliable partner. Our staff comprises seasoned real estate
          consultants, economists, designers, engineers, and architects to
          exceed our clients' expectations.
        </p>

        <h3>Our Mission</h3>
        <p>
          To be the priority for our clients and associates in their quest of
          finding, buying, selling, and renting. Our mission is to assess and
          manage our clients' ancestral assets and those real estate properties
          they purchased on their own with absolute professionalism.{" "}
        </p>
        <p>
          Also, give them the best possible advice in a continually evolving
          real estate domain to hold their valuable real estate asset for better
          returns. If it's a perfect time for liquidation, we encourage you to
          sell these properties. Even they can buy back when real estate hype
          gets over in the coming foreseeable future.
        </p>

        <h3>Our Vision</h3>
        <p>
          To deliver trustworthy real estate listing services that our customers
          can remember for generations.
        </p>

        <h3>Our Philosophy</h3>
        <p>
          We stand out in the crowd and a different real estate company,
          renowned in the market due to its honest, crystal clear, and credible
          real estate dealings.
        </p>

        <h3>Property Investment Consultation</h3>
        <p>We provide extensive property consultation services to do not matter; you are local or international investors interested in high yield with an estimated time.</p>
        <p>We guide a better time to invest in Lahore, Rawalpindi/Islamabad, and Karachi real estate. RealProperty is the expert when it comes to property investment consultation.  We have grasped the options available for high net worth investors for more than 15 years.</p>
        <p>RealProperty guarantees the most secured formula for locals and expatriates to get maximum ROI in a pre-declared well-thought period. Our property consultation experts determine area active or passive investment approach suits you? It would do the job from high-risk with more significant returns to more stable projects with lower but dependable returns.</p>

        <h3>PROPERTY LEGAL ADVICE</h3>
        <p>We have a legal team specialized in all matters relating to the real estate sale, purchase, and land issues. We offer our clients professional, honest, and confidential professional legal advice.</p>
      </div>
      <Footer/>
    </>
  );
};

export default About;
