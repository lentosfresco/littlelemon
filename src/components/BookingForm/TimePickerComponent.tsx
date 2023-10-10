import React, { useState } from "react";
// import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function TimePickerComponent() {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleTimeChange = (newTime: Date | null) => {
    setSelectedTime(newTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Select Time"
        value={selectedTime}
        onChange={handleTimeChange}
        openTo="hours"
        views={["hours", "minutes"]}
        ampm={false}
        minutesStep={30}
        minTime={new Date(0, 0, 0, 11, 0)} // 11:00 AM
        maxTime={new Date(0, 0, 0, 23, 30)} // 11:30 PM
      />
    </LocalizationProvider>
  );
}

export default TimePickerComponent;
