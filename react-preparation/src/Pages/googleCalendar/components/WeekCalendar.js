import React, { useEffect, useState } from "react";
import "./weekCalendar.css";
import { weekdays } from "../constants";

const WeekCalendar = ({ year, month }) => {
  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentWeekDays, setCurrentWeekDays] = useState([]);

  useEffect(() => {
    getCurrentWeekDays();
  }, []);

  const getTotalLastMonthDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getWeekDayNameByDate = (year, month, date) => {
    return new Date(year, month, date).getDay();
  };

  const getCurrentWeekDays = () => {
    const todaysDate = new Date().getDate();
    const todayDayName = getWeekDayNameByDate(
      currentYear,
      currentMonth,
      todaysDate
    );

    const totalNumberOfWeekDays = 7;
    const weekStartingDate = todaysDate - todayDayName;
    const thisWeekDays = [];
    if (weekStartingDate >= 1) {
      for (let i = 0; i < 7; i++) {
        thisWeekDays.push(weekStartingDate + i);
      }
    }

    const lastMonthTotalDays = getTotalLastMonthDays(
      currentYear,
      currentMonth,
      0
    );

    const lastMonthdays = [];

    for (let i = 2; i > 0; i--) {
      lastMonthdays.push(lastMonthTotalDays - i + 1);
    }

    setCurrentWeekDays(thisWeekDays);
  };

  return (
    <div className="week-calendar">
      <div className="week-calendar-header">
        <div>
          <h4>September-October, 2024</h4>
        </div>
        <div>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
      <div className="calendar-header">
        {weekdays.map((week, index) => {
          return (
            <div className="day-name" key={index}>
              {week}
            </div>
          );
        })}
        {currentWeekDays.map((date, index) => {
          return <div className="week-day">{date}</div>;
        })}
      </div>
    </div>
  );
};

export default WeekCalendar;
