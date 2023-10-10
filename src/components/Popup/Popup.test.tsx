import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Popup from "./Popup";

describe("Popup Component", () => {
  const defaultProps = {
    title: "Test Popup",
    description: "This is a test popup.",
    onClose: jest.fn(), // Mock onClose function
  };

  it("should render Popup component with provided props", () => {
    const { getByText, getByTestId } = render(<Popup {...defaultProps} />);

    // Check if the title and description are rendered
    expect(getByText("Test Popup")).toBeCalled();
    expect(getByText("This is a test popup.")).toBeCalled();

    // Check if the close button is rendered
    expect(getByText("Close")).toBeCalled();

    // Check if the popup background is rendered
    expect(getByTestId("popup-background")).toBeCalled();
  });

  it("should call onClose when clicking the close button", () => {
    const { getByText } = render(<Popup {...defaultProps} />);

    // Click the close button
    fireEvent.click(getByText("Close"));

    // Check if onClose function is called
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("should call onClose when clicking the popup background", () => {
    const { getByTestId } = render(<Popup {...defaultProps} />);

    // Click the popup background
    fireEvent.click(getByTestId("popup-background"));

    // Check if onClose function is called
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
