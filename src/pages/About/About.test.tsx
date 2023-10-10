import React from "react";
import { getByTestId, render } from "@testing-library/react";
import About from "./About";

// Mock the assets and components used in the About component
jest.mock("../../assets/restaurant chef B.jpg", () => "ImageR");
jest.mock("../../assets/restaurant.jpg", () => "ImageL");
jest.mock("../../assets/Mario and Adrian A.jpg", () => "ImageBL");
jest.mock("../../assets/Mario and Adrian b.jpg", () => "ImageBR");
jest.mock("../UnderConstruction", () => {
  return {
    __esModule: true,
    default: () => (
      <div data-testid="under-construction">Under Construction</div>
    ),
  };
});

test("About component renders correctly", () => {
  const { getByText, getByAltText } = render(<About />);

  // Check if the title and subtitle are in the document
  expect(getByText("Little Lemon")).toBeCalled();
  expect(getByText("About")).toBeCalled();

  // Check if the images are present
  expect(getByAltText("Restaurant food (Left)")).toBeCalled();
  expect(getByAltText("Restaurant food (Right)")).toBeCalled();
});
