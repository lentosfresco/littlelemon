import React from "react";
import "./Popup.css";
import Button from "../Button/Button";

interface PopupProps {
  title: string;
  description: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, description, onClose }) => {
  return (
    <>
      <div
        data-testid="popup-background"
        className="popup-background"
        onClick={onClose}
      ></div>
      <div className="popup">
        <h2 className="popup-title">{title}</h2>
        <p className="popup-description">{description}</p>
        <div className="popup-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
