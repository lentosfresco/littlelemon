import React from "react";
import { render } from "@testing-library/react";
import ReviewCard from "./ReviewCard";

describe("ReviewCard Component", () => {
  const defaultProps = {
    name: "John Doe",
    location: "New York, NY",
    rating: 4.5,
    date: "2023-10-05",
    feedback: "This is a test review.",
  };

  it("should render ReviewCard component with provided props", () => {
    const { getByText } = render(<ReviewCard {...defaultProps} />);

    // Check if the name, location, date, and feedback are rendered
    expect(getByText("John Doe")).toBeCalled();
    expect(getByText("New York, NY")).toBeCalled();
    expect(getByText("2023-10-05")).toBeCalled();
    expect(getByText("This is a test review.")).toBeCalled();

    // Check if the rating is rendered
    expect(getByText("4.5")).toBeCalled();
  });
});
