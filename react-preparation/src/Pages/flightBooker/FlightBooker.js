import React, { useState } from "react";
import "./flightBooker.css";
const today = new Date();
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart("2", 0);
  const day = date.getDate().toString().padStart("2", 0);

  return [year, month, day].join("-");
};

const FlightBooker = () => {
  const [flightBookingType, setFlightBookingType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(
    formatDate(new Date(Date.now() + DAY_IN_SECONDS))
  );
  const [arrivalDate, setArrivalDate] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (flightBookingType === "one-way") {
      console.log(`You have booked a one-way flight on ${departureDate}`);
      return;
    }

    console.log(
      `You have booked a return flight, departing on ${departureDate} and returning on ${arrivalDate}`
    );
  };

  return (
    <div className="flight-booker-container">
      <h2>Book your flight</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            onChange={(event) => setFlightBookingType(event.target.value)}
            value={flightBookingType}
          >
            <option value="one-way">One Way</option>
            <option value="two-way">Two Way</option>
          </select>
        </div>
        <div>
          <label htmlFor="oneWay">One Way</label>
          <input
            type="date"
            id="oneWay"
            value={departureDate}
            onChange={(event) => {
              setDepartureDate(event.target.value);
            }}
            min={formatDate(today)}
          />
        </div>
        {flightBookingType === "two-way" && (
          <div>
            <label htmlFor="return">Two Way</label>
            <input
              type="date"
              id="return"
              value={arrivalDate}
              min={departureDate}
              onChange={(event) => {
                setArrivalDate(event.target.value);
              }}
            />
          </div>
        )}
        <div>
          <button>Book Now</button>
        </div>
      </form>
    </div>
  );
};

export default FlightBooker;
