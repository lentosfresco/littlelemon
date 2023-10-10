import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";
import UnderConstruction from "../UnderConstruction"; // Import the actual UnderConstruction component

// Mock the UnderConstruction component
jest.mock("../UnderConstruction", () => () => (
  <div data-testid="under-construction">Under Construction</div>
));

test("Menu component renders UnderConstruction component", () => {
  const { getByTestId } = render(<Menu />);

  // Check if the UnderConstruction component is rendered within the Menu component
  expect(getByTestId("under-construction")).toBeCalled();
});
