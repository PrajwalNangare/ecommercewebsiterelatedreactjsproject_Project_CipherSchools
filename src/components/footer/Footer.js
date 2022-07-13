import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-head">About footwear</div>
          <div className="footer-item-text">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life
          </div>
          <div className="footer-item-icons">
            <TwitterIcon style={{ color: "rgba(0, 0, 0, 0.7)" }} />
            <FacebookIcon style={{ color: "rgba(0, 0, 0, 0.7)" }} />
            <LinkedInIcon style={{ color: "rgba(0, 0, 0, 0.7)" }} />
            <GitHubIcon style={{ color: "rgba(0, 0, 0, 0.7)" }} />
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-head">customer care</div>
          <div className="footer-item">Contact</div>
          <div className="footer-item">Returns/Exchange</div>
          <div className="footer-item">Gift Voucher</div>
          <div className="footer-item">Wishlist</div>
          <div className="footer-item">Special</div>
          <div className="footer-item">customer services</div>
          <div className="footer-item">site maps</div>
        </div>
        <div className="footer-col">
          <div className="footer-head">Information</div>
          <div className="footer-item">ABOUT US</div>
          <div className="footer-item">DELIVERY INFORMATION</div>
          <div className="footer-item">PRIVACY POLICY</div>
          <div className="footer-item">SUPPORT</div>
          <div className="footer-item">ORDER TRACKING</div>
        </div>
        <div className="footer-col">
          <div className="footer-head">News</div>
          <div className="footer-item">BLOG</div>
          <div className="footer-item">PRESS</div>
          <div className="footer-item">EXHIBITIONS</div>
        </div>
        <div className="footer-col">
          <div className="footer-head">Contact Information</div>
          <div className="footer-item">300 NORTH 42TH STREET,
                  SUITE 805 NEW YORK NY 10018</div>
          <div className="footer-item">+1235 2899 96</div>
          <div className="footer-item">INFO@YOURSITE.COM</div>
          <div className="footer-item">YOURSITE.COM</div>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>
          Copyright ©2022 All rights reserved | This template is made with by
          Colorlib Demo Images: Unsplash , Pexels.com
        </h3>
      </div>
    </div>
  );
}

export default Footer;