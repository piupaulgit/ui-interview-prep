import "./calendar.css";
import { useEffect, useState } from "react";

const Calendar = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [calendarGrid, setCalendarGrid] = useState([]);

  useEffect(() => {
    setCalendarGrid(getCalendarDays(year, month));
  }, [year, month]);

  const getTotalDaysInAMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDay = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const getCalendarDays = (year, month) => {
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
      updatedMonth = month === 11 ? 0 : month + 1;
      updatedYear = month === 11 ? year + 1 : year;
    } else {
      updatedMonth = month === 0 ? 11 : month - 1;
      updatedYear = month === 0 ? year - 1 : year;
    }

    setMonth(updatedMonth);
    setYear(updatedYear);
  };

  return (
    <div className="calendar">
      <header className="calendar-header">
        <h2>
          {monthNames[month]}, {year}
        </h2>
        <div>
          <button onClick={() => changeYearAndMonth("prev")}>Previous</button>
          <button onClick={() => changeYearAndMonth("next")}>Next</button>
        </div>
      </header>
      <div className="calendar-grid">
        {weekdays.map((dayName, index) => {
          return (
            <div className="day-name" key={index}>
              {dayName}
            </div>
          );
        })}
        {calendarGrid.map((date, index) => {
          return (
            <div
              className={`day ${
                (index < getFirstDay(year, month) ||
                  index + 1 >
                    getTotalDaysInAMonth(year, month) +
                      getFirstDay(year, month)) &&
                "inactive-days"
              }`}
              key={index}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
