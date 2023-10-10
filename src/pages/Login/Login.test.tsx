import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";
import UnderConstruction from "../UnderConstruction"; // Import the actual UnderConstruction component

// Mock the UnderConstruction component
jest.mock("../UnderConstruction", () => () => (
  <div data-testid="under-construction">Under Construction</div>
));

test("Login component renders UnderConstruction component", () => {
  const { getByTestId } = render(<Login />);

  // Check if the UnderConstruction component is rendered within the Login component
  expect(getByTestId("under-construction")).toBeCalled();
});
