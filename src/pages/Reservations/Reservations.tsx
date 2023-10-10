import React, { useState } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";

interface FormValues {
  [key: string]: any;
}

const Reservations: React.FC = () => {
  const [areAllFieldsFilled, setAllFieldsFilled] = useState<boolean>(false);

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent, formValues: FormValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    // Define the specific fields you want to be required
    const requiredFields = [
      "date",
      "time",
      "firstName",
      "adults",
      "children",
      "lastName",
      "email",
    ];

    // Check if all required fields are filled
    const areAllFieldsFilled = requiredFields.every(
      (field) => formValues[field]
    );

    if (areAllFieldsFilled) {
      // setIsPopupVisible(true);
      setAllFieldsFilled(true);
    }
  };

  const [formValues, setFormValues] = useState<FormValues>({
    date: new Date(),
    time: "",
    adults: "",
    firstName: "",
    children: "",
    lastName: "",
    email: "",
    phone: "",
    sendConfirmationEmail: false,
    specialRequests: "",
  });

  return (
    <div data-testid="reservations-component" className="reservation">
      <div className="reservation-card">
        <h1 className="reservation-title">Table Reservation</h1>
        <BookingForm
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </div>
    </div>
  );
};

export default Reservations;
