import React from 'react';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import "./Footer.css";
import jobforall from "../../../assets/jobforall.png"
import { Link } from "react-router-dom";
import AdminSignUp from "../../Admin/AdminSignUp";
const Footer = () => {
  return (
    <>    
        <footer style={{backgroundColor:"#434141",paddingTop:"30px"}}>
        <div className="container">
          <div className="wrapper-footer" style={{display:"flex",gap:"30px"}}>
            <div className="item" style={{width:"100%",textAlign:"center"}}>
              <img src={jobforall} style={{width:"100px"}} alt="" />  <br />
              <a style={{color:"#FF842B"}} href="Facebook.com">Facebook</a><br />
              <a style={{color:"#FF842B"}} href="Instagram.com">Instagram</a><br />
              <a style={{color:"#FF842B"}} href="Linkedin.com">LinkedIn</a><br />
            </div>
            <div className="item" style={{width:"100%",textAlign:"center"}}>
              <p style={{color:"#FF842B"}}>Company</p>
              <small style={{color:"#FF842B"}}>About Us</small> <br />
              <small style={{color:"#FF842B"}}>Blog</small><br />
              <small style={{color:"#FF842B"}}>Join us as worker</small><br />
              <Link to="/AdminSignUp">Admin</Link> <br></br>
              <small style={{color:"#FF842B"}}>Career</small>
            </div>
            <div className="item item-a" style={{width:"100%",textAlign:"center"}}>
              <p style={{color:"#FF842B"}}>Services</p>
              <small style={{color:"#FF842B"}}>Appliances Repair</small> <br />
              <small style={{color:"#FF842B"}}>househelp</small><br />
              <small style={{color:"#FF842B"}}>Gardening</small><br />
              <small style={{color:"#FF842B"}}>Carpenter</small><br />
              <small style={{color:"#FF842B"}}>Plumbing</small>
            </div>
            <div className="item item-a" style={{width:"100%",textAlign:"center"}}>
              <p style={{color:"#FF842B"}}>Services</p>
              <small style={{color:"#FF842B"}}>Home Painting</small> <br />
              <small style={{color:"#FF842B"}}>Electrician</small><br />
              <small style={{color:"#FF842B"}}>Mechanics</small><br />
              <small style={{color:"#FF842B"}}>Buy Hardware</small><br />
              <small style={{color:"#FF842B"}}>Buy Electronics</small>
            </div>
            <div className="item" style={{width:"100%",textAlign:"center"}}>
              <p style={{color:"#FF842B"}}>Terms &amp; Condition</p>
              <p style={{color:"#FF842B"}}>Privacy &amp; Policy</p>
              <p style={{color:"#FF842B"}}>Cookies</p>
              <p style={{color:"#FF842B"}}>Disclaimer</p>
            </div>
          </div>
        </div>
        <hr style={{border: '0.5px solid white'}} />
        <div className="text-center">
          <a style={{textDecoration: 'none', color: 'wheat'}} align="center" href>© OneClick. All Rights
            Reserved.</a>
        </div>
      </footer>
    </>
  )
}
export default Footer