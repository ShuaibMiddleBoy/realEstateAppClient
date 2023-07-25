import React from 'react'
import style from "./footer.module.css";
import logo from "./asset/logo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.grid}>
            <div className={style.col}>
            <div className={style.about}>
                <div className={style.img}>
                    <img src={logo} alt="" width={"100px"}/>
                </div>
                <p>Perfectviews.com - Pakistan's best free property listings website. Trusted place to investing, renting, buying & selling online.</p>
                </div>
                <div className={style.socialLinks}>
                    <h6>Follow us on</h6>
                    <div className={style.icons}>
                        <FacebookRoundedIcon className={style.icon}/>
                        <TwitterIcon className={style.icon}/>
                        <InstagramIcon className={style.icon}/>
                    </div>
                </div>
            </div>
            <div className={style.col}>
            <div className={style.quickLinkSearch}>
                <h5>Quick Links Searches</h5>
                <ul>
                    <li>
                        <a href="/">Property for Rent</a>
                    </li>
                    <li>
                        <a href="/">Property for Sale</a>
                    </li>
                    <li>
                        <a href="/">Society Maps</a>
                    </li>
                    <li>
                        <a href="/">News & Guide</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className={style.col}>
                <div className={style.company}>
                <h5>Company</h5>
                <ul>
                    <li>
                        <a href="/">About us</a>
                    </li>
                    <li>
                        <a href="/">Contact us</a>
                    </li>
                    <li>
                        <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/">Place Free Ad</a>
                    </li>
                </ul>


                </div>
            </div>
            <div className={style.col}>
            <div className={style.contact}>
                <h5>Contact</h5>
                   <ul>
                    <li>
                        <div className={style.addressIcon}>
                            <LocationOnIcon className={style.icon}/>
                        </div>
                        <div className={style.text}>
                        1st Floor Habib Tower, Main Boulevard Valencia Town, Lahore
                        </div>
                    </li>    
                    <li>
                        <div className={style.addressIcon}>
                            <EmailIcon className={style.icon}/>
                        </div>
                        <div className={style.text}>
                        skhan.csit@gmail.com
                        </div>
                    </li>
                    <li>
                        <div className={style.addressIcon}>
                            <ContactPhoneIcon className={style.icon}/>
                        </div>
                        <div className={style.text}>
                        +93 3481921015
                        </div>
                    </li>
                   </ul>
                </div>
            </div>
        </div>
        <div className={style.createdBy}>
            <p>&copy;perfectviews.com {new Date().getFullYear()}. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer