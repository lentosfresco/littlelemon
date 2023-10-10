import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TimePickerComponent from "./TimePickerComponent";
import "@types/jest";

describe("TimePickerComponent", () => {
  it("should render without errors", () => {
    const { container } = render(<TimePickerComponent />);
    expect(container).toBeTruthy();
  });

  it("should update the selected time when a time is picked", () => {
    const { getByLabelText } = render(<TimePickerComponent />);
    const timePickerInput = getByLabelText("Select Time") as HTMLInputElement;

    // Simulate selecting a time (e.g., 13:30)
    fireEvent.change(timePickerInput, { target: { value: "13:30" } });

    // Check if the selected time has been updated
    expect(timePickerInput.value).toBe("13:30");
  });

  it("should not allow selecting a time outside the specified range", () => {
    const { getByLabelText } = render(<TimePickerComponent />);
    const timePickerInput = getByLabelText("Select Time") as HTMLInputElement;

    // Try to select a time before the minTime (e.g., 10:00 AM)
    fireEvent.change(timePickerInput, { target: { value: "10:00" } });

    // Check if the selected time remains an empty string (unchanged)
    expect(timePickerInput.value).toBe("");

    // Try to select a time after the maxTime (e.g., 12:00 AM)
    fireEvent.change(timePickerInput, { target: { value: "00:00" } });

    // Check if the selected time remains an empty string (unchanged)
    expect(timePickerInput.value).toBe("");
  });
});
