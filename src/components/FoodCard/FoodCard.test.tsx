import React from "react";
import { render } from "@testing-library/react";
import FoodCard from "./FoodCard";

describe("FoodCard Component", () => {
  const defaultProps = {
    title: "Test Food",
    description: "A delicious test food item",
    image: "test-image-url.jpg",
    price: "$10.99",
  };

  it("should render FoodCard component with provided props", () => {
    const { getByText, getByAltText } = render(<FoodCard {...defaultProps} />);

    // Check if the title, description, and price are rendered
    expect(getByText("Test Food")).toBeCalled();
    expect(getByText("A delicious test food item")).toBeCalled();
    expect(getByText("$10.99")).toBeCalled();

    // Check if the image is rendered with the alt text
    expect(getByAltText("food")).toBeCalled();
  });
});
