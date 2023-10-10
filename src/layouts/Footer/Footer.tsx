import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import {
  HouseFill,
  InfoCircleFill,
  CupFill,
  CalendarCheckFill,
  BasketFill,
  PersonFill,
  Facebook,
  Instagram,
  Twitter,
  GeoAltFill, // Add GeoAltFill icon
  TelephoneFill, // Add TelephoneFill icon
  EnvelopeFill, // Add EnvelopeFill icon
} from "react-bootstrap-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo-footer" />
        <div className="footer-site-map">
          <p className="footer-title">Check Our Website</p>
          <Link className="footer-item" to="/">
            <HouseFill /> <span className="icon-text"> Home</span>
          </Link>
          <Link className="footer-item" to="/about">
            <InfoCircleFill /> <span className="icon-text">About</span>
          </Link>
          <Link className="footer-item" to="/menu">
            <CupFill /> <span className="icon-text">Menu</span>
          </Link>
          <Link className="footer-item" to="/reservations">
            <CalendarCheckFill />{" "}
            <span className="icon-text">Reservations</span>
          </Link>
          <Link className="footer-item" to="/orders">
            <BasketFill /> <span className="icon-text">Order Online</span>
          </Link>
          <Link className="footer-item" to="/login">
            <PersonFill /> <span className="icon-text">Login</span>
          </Link>
        </div>
        <div className="footer-contact">
          <p className="footer-title">Visit Us</p>
          <a
            href="https://www.google.com/maps?q=1+Little+Lemon+Square"
            target="_blank"
            rel="to be customized"
            className="footer-item"
          >
            <GeoAltFill />{" "}
            <span className="icon-text">1 Little Lemon Square</span>
          </a>
          <a href="tel:18888888888" className="footer-item">
            <TelephoneFill /> <span className="icon-text">1 888-888-8888</span>
          </a>
          <a href="mailto:info@littlelemon.com" className="footer-item">
            <EnvelopeFill />{" "}
            <span className="icon-text">info@littlelemon.com</span>
          </a>
        </div>
        <div className="footer-social">
          <p className="footer-title">Get Social</p>
          <a
            className="footer-item"
            href="https://www.facebook.com"
            target="_blank"
            rel="Little Lemon Facebook"
          >
            <Facebook /> <span className="icon-text">Facebook</span>
          </a>
          <a
            className="footer-item"
            href="https://www.instagram.com"
            target="_blank"
            rel="Little Lemon Instagram"
          >
            <Instagram /> <span className="icon-text">Instagram</span>
          </a>
          <a
            className="footer-item"
            href="https://www.twitter.com"
            target="_blank"
            rel="Little Lemon Twitter"
          >
            <Twitter /> <span className="icon-text">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
