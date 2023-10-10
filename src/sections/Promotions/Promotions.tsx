import React from "react";
import "./Promotions.css";
import Button from "../../components/Button/Button";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../pages/pages";
import greekSalad from "../../assets/greek salad.jpg";
import bruschetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

interface Promotions {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const promotions: Promotions[] = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, \
      olives and our Chicago style feta cheese, \
      garnished with crunchy garlic and rosemary croutons. ",
    image: greekSalad,
    price: "$12.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared \
      with garlic and seasoned with salt and olive oil.",
    image: bruschetta,
    price: "$ 5.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book,\
       every last ingredient has been sourced and is\
       as authentic as can be imagined.",
    image: lemonDessert,
    price: "$ 5.00",
  },
];

const Promotions: React.FC = () => {
  const navigate = useNavigate();
  const onClickMenu = () => {
    navigate(pages.get("orders")!.path);
  };

  return (
    <div className="promotions">
      <div className="header-container">
        <h1 className="promotions-title">This week specials!</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {promotions.map((promotion) => (
          <FoodCard
            key={promotion.id}
            title={promotion.title}
            description={promotion.description}
            image={promotion.image}
            price={promotion.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Promotions;
