import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

test("Hero component renders correctly and triggers navigation", () => {
  // Mock the navigate function from useNavigate
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

  const { getByText, getByAltText } = render(<Hero />);

  // Check if the title, subtitle, and button are in the document
  expect(getByText("Little Lemon")).toBeCalled();
  expect(getByText("Chicago")).toBeCalled();
  expect(getByText("Reserve a table")).toBeCalled();

  // Find and click the "Reserve a table" button
  const reserveButton = getByText("Reserve a table");
  fireEvent.click(reserveButton);

  // Check if the navigate function is called with the expected path
  expect(mockNavigate).toHaveBeenCalledWith("/reservations");

  // Check if the image is present
  expect(getByAltText("Restaurant food")).toBeCalled();
});
