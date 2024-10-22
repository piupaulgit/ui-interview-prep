import { useState } from "react";
import PageHeader from "../../components/mainAppComponents/PageHeader";
import EventForm from "./components/EventForm";
import "./googleCalendar.css";
import MonthCalendar from "./components/MonthCalendar";
import WeekCalendar from "./components/WeekCalendar";

const GoogleCalendar = () => {
  const [view, setView] = useState("week");
  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  const changeView = (e) => {
    setView(e.target.value);
  };
  return (
    <div className="googleCalendar">
      <div className="calendar-header">
        <PageHeader text="Google Calendar"></PageHeader>
        <select onChange={changeView} value={view}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>
      {view === "month" && <MonthCalendar year={year} month={month} />}
      {view === "week" && <WeekCalendar year={year} month={month} />}
      <EventForm />
    </div>
  );
};

export default GoogleCalendar;
