import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./About.css";
import ImageR from "../../assets/restaurant chef B.jpg";
import ImageL from "../../assets/restaurant.jpg";
import ImageBL from "../../assets/Mario and Adrian A.jpg";
import ImageBR from "../../assets/Mario and Adrian b.jpg";
import UnderConstruction from "../UnderConstruction";

const About: React.FC = () => {
  return (
    <Box p={1}>
      <Grid container spacing={2} className="about">
        {/* Left Image */}
        <Grid item xs={12} sm={6} md={4}>
          <div className="hero-image-container">
            <img className="image" src={ImageL} alt="Restaurant food" />
          </div>
        </Grid>
        {/* Title and Text */}
        <Grid item xs={12} sm={6} md={4} className="about-text">
          <div className="about-content">
            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              alias ullam corporis vel doloremque, rem ipsam, cum neque impedit
              itaque corrupti, magni sunt deleniti! Inventore dicta earum
              assumenda architecto tempora.
            </p>
          </div>
        </Grid>
        {/* Right Image */}
        <Grid item xs={12} sm={6} md={4}>
          <div className="hero-image-container">
            <img className="image" src={ImageR} alt="Restaurant food" />
          </div>
        </Grid>
        <UnderConstruction margin="5.5rem" width="35%" height="35%" />
      </Grid>
    </Box>
  );
};

export default About;
