import React, { MouseEvent } from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ title, onClick, type = "button" }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (type !== "submit") {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} className="button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
