import React from "react";
import { render } from "@testing-library/react";
import Reviews from "./Reviews";
import reviews from "./data.json";

describe("Reviews Component", () => {
  it("should render Reviews component with review cards", () => {
    const { getByText } = render(<Reviews />);

    // Check if each review from the data.json file is rendered
    reviews.forEach((review) => {
      expect(getByText(review.name)).toBeCalled();
      expect(getByText(review.location)).toBeCalled();
      expect(getByText(String(review.rating))).toBeCalled();
      expect(getByText(review.date)).toBeCalled();
      expect(getByText(review.feedback)).toBeCalled();
    });
  });
});
