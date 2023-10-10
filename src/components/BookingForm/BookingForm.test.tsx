import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Define FormValues type
interface FormValues {
  date: string;
  time: string;
  adults: string;
  // Define other fields as needed
}

// Define BookingFormProps type
interface BookingFormProps {
  onFormSubmit: (e: React.FormEvent, formValues: FormValues) => void;
  isFormSubmitted: boolean;
  // Define other props if needed
}

describe("BookingForm Component", () => {
  const defaultProps: BookingFormProps = {
    onFormSubmit: jest.fn(),
    isFormSubmitted: false,
  };

  it("should render without errors", () => {
    const { container } = render(<BookingForm {...defaultProps} />);
    expect(container).toBeTruthy();
  });

  it("should handle form submission", async () => {
    const { getByText, getByLabelText } = render(
      <BookingForm {...defaultProps} />
    );

    // Fill out the form fields
    fireEvent.change(getByLabelText("Date"), {
      target: { value: "2023-10-05" },
    });
    fireEvent.change(getByLabelText("Time"), { target: { value: "14:30" } });
    // Add more fireEvent.change statements for other fields...

    // Check the "Send a Confirmation Email" checkbox
    fireEvent.click(getByLabelText("Send a Confirmation Email"));

    // Click the "Reserve" button
    fireEvent.click(getByText("Reserve"));

    // Wait for the form submission to be handled
    await waitFor(() => {
      expect(defaultProps.onFormSubmit).toHaveBeenCalledWith(
        expect.anything(),
        {
          date: "2023-10-05",
          time: "14:30",
          // Add more expected form values here...
        }
      );
    });
  });
});
