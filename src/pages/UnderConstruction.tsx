import React from "react";
import "./UnderConstruction.css";
import img from "../assets/Yellow-under-construction.png";
import { Height } from "@mui/icons-material";

interface UnderConstructionProps {
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
  padding = "", // Default width
  margin = "", // Default height
  width = "",
  height = "",
}) => {
  return (
    <div className="container" 
      data-testid="under-construction" 
      style={{  margin }}>
      <li className="construction">
        <img
          className="construction-img"
          src={img}
          alt="Under Construction"
          style={{ padding, width, height }}
        />
        <h1 className="construction-title">
          Oops! Something went wrong!
        </h1>
      </li>
      //{" "}
    </div>
  );
};

export default UnderConstruction;
