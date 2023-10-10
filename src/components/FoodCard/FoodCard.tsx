import React from "react";
import "./FoodCard.css";
import { Link } from "react-router-dom";
import delivery from "../../assets/food-delivery-icon.svg";

interface FoodCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  title,
  description,
  image,
  price,
}) => {
  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={image} alt="food" height={220} width={320} />
      </div>
      <div className="food-card-body">
        <div className="food-card-body-header">
          <div className="food-card-body-title-header">
            <p className="food-card-title">{title}</p>
            <p className="food-card-price">{price}</p>
          </div>
          <p className="food-card-description">{description}</p>
        </div>
        <Link className="food-card-delivery" to="/orders">
          <span className="food-card-delivery-title">Order a delivery</span>
          <img src={delivery} className="delivery-img" alt="Fast Delivery" />
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
