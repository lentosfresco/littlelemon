import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../Button/Button";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import {
  CalendarFill,
  PeopleFill,
  PersonFill,
  ClockFill,
  ChatLeftDotsFill,
  TelephoneFill,
  EnvelopeFill,
  Check2Circle,
} from "react-bootstrap-icons";
import "./BookingForm.css";
import Popup from "../Popup/Popup";
import pages from "../../pages/pages";
import { useNavigate, Link } from "react-router-dom";

interface BookingFormProps {
  onFormSubmit: (e: FormEvent, formValues: FormValues) => void;
  isFormSubmitted: boolean;
  // availableTimes: string[];
  dispatchOnDateChange?: (date: Date) => void;
}

interface FormValues {
  date: string;
  time: string;
  adults: string;
  firstName: string;
  children: string;
  lastName: string;
  email: string;
  phone: string;
  sendConfirmationEmail: boolean;
  specialRequests: string;
}

const BookingForm: React.FC<BookingFormProps> = ({
  onFormSubmit,
  isFormSubmitted,
  // availableTimes,
  dispatchOnDateChange,
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    date: "",
    // time: defaultTime,
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

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "date") {
      setSelectedDate(dayjs(value).toDate());
    } else if (name === "time") {
      setSelectedTime(dayjs(value, "HH:mm").toDate());
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const showPopup = () => {
    if (
      // formValues.date &&
      // formValues.time &&
      formValues.adults &&
      formValues.children &&
      formValues.firstName &&
      formValues.lastName &&
      formValues.email &&
      formValues.phone
    ) {
      setPopupVisible(true);
      console.log("Popup visible");
    } else {
      return (
        <Popup
          title="Reservation is Unsuccessful!"
          description="Please make sure that all required entries are complete!"
          onClose={closePopup}
        />
      );
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
    navigate("/");
  };

  return (
    <form
      method="submit"
      onSubmit={(e) => onFormSubmit(e, formValues)}
      className="reservation-form"
    >
      <table className="reservation-table-top">
        <tbody>
          {/* First Row - Labels */}
          <tr>
            <td>
              <div className="reservation-label">
                <CalendarFill className="input-icon" />
                <label htmlFor="date" className="container-item-title">
                  Date
                </label>
              </div>
            </td>
            <td>
              <div className="reservation-label">
                <ClockFill className="input-icon" />
                <label htmlFor="time" className="container-item-title">
                  Time
                </label>
              </div>
            </td>
          </tr>
          {/* Second Row - Date and Time */}
          <tr>
            <td>
              <div className="reservation-date">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="res-date"
                    label=""
                    value={selectedDate}
                    onChange={(newDate: Date | null) => {
                      setSelectedDate(newDate);
                      const formattedDate = newDate
                        ? dayjs(newDate).format("YYYY-MM-DD")
                        : "";
                      handleInputChange({
                        target: {
                          name: "date",
                          value: formattedDate,
                        },
                      } as ChangeEvent<HTMLInputElement>);
                    }}
                  />
                </LocalizationProvider>
              </div>
            </td>
            <td>
              <div className="reservation-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileTimePicker
                    className="res-time"
                    value={selectedTime}
                    onChange={(newTime: Date | null) => {
                      setSelectedTime(newTime);
                      const formattedTime = newTime
                        ? dayjs(newTime).format("HH:mm")
                        : "";
                      handleInputChange({
                        target: {
                          name: "time",
                          value: formattedTime,
                        },
                      } as ChangeEvent<HTMLInputElement>);
                    }}
                  />
                </LocalizationProvider>
              </div>
            </td>
          </tr>
          {/* Third Row - Labels */}
          <tr>
            <td>
              <div className="reservation-label">
                <PeopleFill className="input-icon" />
                <label htmlFor="adults" className="container-item-title">
                  Adults
                </label>
              </div>
            </td>
            <td>
              <div className="reservation-label">
                <PeopleFill className="input-icon" />
                <label htmlFor="children" className="container-item-title">
                  Children
                </label>
              </div>
            </td>
          </tr>

          {/* Fourth Row - Adult and Children */}
          <tr>
            <td>
              <div className="reservation-input">
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  placeholder="# of adults - required"
                  required
                  min={1}
                  max={10}
                  onChange={handleInputChange}
                  className={
                    isFormSubmitted && !formValues.adults ? "error" : ""
                  }
                />
              </div>
            </td>
            <td>
              <div className="reservation-input">
                <input
                  type="number"
                  id="children"
                  name="children"
                  placeholder="# of children - required"
                  required
                  min={0}
                  max={10}
                  onChange={handleInputChange}
                  className={
                    isFormSubmitted && !formValues.children ? "error" : ""
                  }
                />
              </div>
            </td>
          </tr>
          {/* Fifth Row - label */}
          <tr>
            <td>
              <div className="reservation-label">
                <PersonFill className="input-icon" />
                <label htmlFor="firstName" className="container-item-title">
                  First Name
                </label>
              </div>
            </td>
            <td>
              <div className="reservation-label">
                <PersonFill className="input-icon" />
                <label htmlFor="lastName" className="container-item-title">
                  Last Name
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="reservation-input">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="required"
                  required
                  onChange={handleInputChange}
                  className={
                    isFormSubmitted && !formValues.firstName ? "error" : ""
                  }
                />
              </div>
            </td>
            <td>
              <div className="reservation-input">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="required"
                  required
                  onChange={handleInputChange}
                  className={
                    isFormSubmitted && !formValues.lastName ? "error" : ""
                  }
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="reservation-table-bottom">
        <tbody>
          {/* Email */}
          <tr>
            <td>
              <div className="reservation-label">
                <EnvelopeFill className="input-icon" />
                <label htmlFor="email" className="container-item-title">
                  Email
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="reservation-input-bottom">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="required"
                  required
                  onChange={handleInputChange}
                  className={
                    isFormSubmitted && !formValues.email ? "error" : ""
                  }
                />
              </div>
            </td>
          </tr>
          {/* Phone */}
          <tr>
            <td>
              <div className="reservation-label">
                <TelephoneFill className="input-icon" />
                <label htmlFor="phone" className="container-item-title">
                  Phone
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="reservation-input-bottom">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="required"
                  required
                  onChange={handleInputChange}
                  className={
                    isFormSubmitted && !formValues.phone ? "error" : ""
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            {/* Special Requests */}
            <td>
              <div className="reservation-label">
                <ChatLeftDotsFill className="input-icon" />
                <label
                  htmlFor="specialRequests"
                  className="container-item-title"
                >
                  Special Requests
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="reservation-input-bottom">
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  placeholder="Optional"
                  onChange={handleInputChange}
                  className={
                    isFormSubmitted && !formValues.specialRequests ? "" : ""
                  }
                ></textarea>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Send Confirmation Email */}
      <div className="reservation-label">
        <Check2Circle className="input-icon" />
        <label className="send-email-label">Send a Confirmation Email</label>
        <input
          type="checkbox"
          id="sendConfirmationEmail"
          name="sendConfirmationEmail"
          checked={formValues.sendConfirmationEmail}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              sendConfirmationEmail: e.target.checked,
            })
          }
        />
      </div>
      {/* Reserve button */}
      <div className="reservation-button">
        <Button title="Reserve" type="submit" onClick={showPopup} />
        {isPopupVisible && (
          <Popup
            title="Reservation is Successful!"
            description="If email was checked, then please check your email for a confirmation! Thank you for dining at Little Lemon! Looking forward to seeing you soon!"
            onClose={closePopup}
          />
        )}
      </div>
    </form>
  );
};

export default BookingForm;
