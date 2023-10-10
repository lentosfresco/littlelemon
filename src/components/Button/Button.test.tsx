import React, { MouseEvent } from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom/extend-expect";

interface ButtonProps {
  title: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void; // Make it required
  type?: "button" | "submit" | "reset";
}

const onClickMock = jest.fn();

const defaultProps: ButtonProps = {
  title: "Click Me",
  onClick: onClickMock,
  type: "button",
};

describe("Button Component", () => {
  const defaultProps: ButtonProps = {
    title: "Click Me",
    onClick: jest.fn(),
    type: "button",
  };

  it("should render correctly", () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText("Your Text")).toBeCalledWith; // Use matcher
  });

  it("should render without errors", () => {
    const { container } = render(<Button {...defaultProps} />);
    expect(container).toBeTruthy();
  });

  it("should display the correct title", () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeCalledWith;
  });

  //   it("should call the onClick handler when clicked", () => {
  //     const { getByText } = render(<Button {...defaultProps} />);
  //     const buttonElement = getByText("Click Me");

  //     // Simulate a button click
  //     fireEvent.click(buttonElement);

  //     // Check if the onClick function was called
  //     expect(defaultProps.onClick).toHaveBeenCalled();
  //   });

  it("should call the onClick handler when clicked", () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const buttonElement = getByText("Click Me");

    // Check if onClick is defined before simulating a click
    if (defaultProps.onClick) {
      // Simulate a button click
      fireEvent.click(buttonElement);

      // Check if the onClick function was called
      expect(defaultProps.onClick).toHaveBeenCalled();
    } else {
      // Handle the case where onClick is not defined (optional)
      // You might choose to skip the test or add different assertions
      // depending on your testing requirements.
    }
  });
});
