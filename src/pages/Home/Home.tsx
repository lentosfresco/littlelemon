import React from "react";
import "./Home.css";
import Hero from "../../sections/Hero/Hero";
import Promotions from "../../sections/Promotions/Promotions";
import Reviews from "../../components/ReviewCard/Reviews";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Promotions />
      <Reviews />
    </div>
  );
};

export default Home;
