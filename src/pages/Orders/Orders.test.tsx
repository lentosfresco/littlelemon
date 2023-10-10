import React from "react";
import { render } from "@testing-library/react";
import Orders from "./Orders";
import UnderConstruction from "../UnderConstruction"; // Import the actual UnderConstruction component

// Mock the UnderConstruction component
jest.mock("../UnderConstruction", () => () => (
  <div data-testid="under-construction">Under Construction</div>
));

test("Orders component renders UnderConstruction component", () => {
  const { getByTestId } = render(<Orders />);

  // Check if the UnderConstruction component is rendered within the Orders component
  expect(getByTestId("under-construction")).toBeCalled();
});
