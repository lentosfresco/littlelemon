import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

// Mock the imported components used in the Home component
jest.mock("../../sections/Hero/Hero", () => () => (
  <div data-testid="hero">Hero Component</div>
));
jest.mock("../../sections/Promotions/Promotions", () => () => (
  <div data-testid="promotions">Promotions Component</div>
));
jest.mock("../../components/ReviewCard/Reviews", () => () => (
  <div data-testid="reviews">Reviews Component</div>
));

test("Home component renders correctly", () => {
  const { getByTestId } = render(<Home />);

  // Check if the Hero, Promotions, and Reviews components are rendered
  expect(getByTestId("hero")).toBeCalled();
  expect(getByTestId("promotions")).toBeCalled();
  expect(getByTestId("reviews")).toBeCalled();
});
