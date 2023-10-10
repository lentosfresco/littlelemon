import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Promotions from "./Promotions";
import { useNavigate } from "react-router-dom";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mock the promotions data
const mockPromotions = [
  {
    id: 1,
    title: "Mock Salad",
    description: "Mock salad description",
    image: "mock_salad.jpg",
    price: "$9.99",
  },
  // Add more mock promotions as needed
];

test("Promotions component renders correctly and handles navigation", () => {
  // Mock the navigate function from useNavigate
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

  // Render the Promotions component with the mocked data
  const { getByText, getAllByTestId } = render(<Promotions />);

  // Check if the title and "Online Menu" button are in the document
  expect(getByText("This week specials!")).toBeCalled();
  expect(getByText("Online Menu")).toBeCalled();

  // Check if the rendered FoodCards match the mocked promotions data
  const foodCards = getAllByTestId("food-card");
  expect(foodCards.length).toBe(mockPromotions.length);

  mockPromotions.forEach((promotion, index) => {
    const foodCard = foodCards[index];
    expect(foodCard).toHaveProperty(promotion.title);
    expect(foodCard).toHaveProperty(promotion.description);
    expect(foodCard).toHaveProperty(promotion.price);
  });

  // Simulate clicking the "Online Menu" button
  fireEvent.click(getByText("Online Menu"));

  // Check if the navigate function is called with the expected path
  expect(mockNavigate).toHaveBeenCalledWith("/orders");
});
