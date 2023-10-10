import React from "react";
import "./Hero.css";
import Button from "../../components/Button/Button";
import Image from "../../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../pages/pages";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const onClickReserve = () => {
    const reservationsPage = pages.get("reservations");
    if (reservationsPage) {
      navigate(reservationsPage.path);
    }
  };

  return (
    <div className="hero-background">
      <div className="hero">
        <div className="hero-content">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
            We are a family-owned <br />
            Mediterranean restaurant, <br />
            focused on traditional <br />
            recipes served with a modern <br />
            twist.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <div className="hero-image-container">
          <img className="image" src={Image} alt="Restaurant food" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
