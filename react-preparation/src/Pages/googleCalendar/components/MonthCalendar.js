import "./monthCalendar..css";
import { useEffect, useState } from "react";
import Day from "./Day";
import { weekdays, monthNames } from "../constants";

const MonthCalendar = ({ year, month }) => {
  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month);
  const [calendarMonthGrid, setCalendarMonthGrid] = useState([]);

  useEffect(() => {
    setCalendarMonthGrid(getMonthCalendarDays(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

  const getTotalDaysInAMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDay = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const getMonthCalendarDays = (year, month) => {
    const totalNumberOfGrids = 42; //7columns*6rows
    const firstDayOfCurrentMonth = getFirstDay(year, month);
    const totalDaysOfCurrentMonth = getTotalDaysInAMonth(year, month);

    const prevMonth = month === 11 ? 0 : month - 1;
    const prevYear = month === 11 ? year - 1 : year;

    const totalNumberOfDaysPrevMonth = getTotalDaysInAMonth(
      prevYear,
      prevMonth
    );

    const prevMonthDays = [];
    const nextMonthDays = [];
    const currentMonthDays = new Array(totalDaysOfCurrentMonth)
      .fill()
      .map((_, index) => index + 1);

    for (let i = firstDayOfCurrentMonth; i > 0; i--) {
      prevMonthDays.push(totalNumberOfDaysPrevMonth - i + 1);
    }
    const remainingDays =
      totalNumberOfGrids - (prevMonthDays.length + totalDaysOfCurrentMonth);

    for (let i = 0; i < remainingDays; i++) {
      nextMonthDays.push(i + 1);
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const changeYearAndMonth = (type) => {
    let updatedMonth;
    let updatedYear;
    if (type == "next") {
      updatedMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      updatedYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    } else {
      updatedMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      updatedYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    }

    setCurrentMonth(updatedMonth);
    setCurrentYear(updatedYear);
  };

  return (
    <div className="calendar">
      <header className="calendar-header">
        <h2>
          {monthNames[currentMonth]}, {currentYear}
        </h2>
        <div>
          <button onClick={() => changeYearAndMonth("prev")}>Previous</button>
          <button onClick={() => changeYearAndMonth("next")}>Next</button>
        </div>
      </header>
      <div className="month-calendar-grid">
        {weekdays.map((dayName, index) => {
          return (
            <div className="day-name" key={index}>
              {dayName}
            </div>
          );
        })}
        {calendarMonthGrid.map((date, index) => {
          return (
            <Day
              date={date}
              key={index}
              isInActiveDate={
                index < getFirstDay(currentYear, currentMonth) ||
                index + 1 >
                  getTotalDaysInAMonth(currentYear, currentMonth) +
                    getFirstDay(currentYear, currentMonth)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default MonthCalendar;
