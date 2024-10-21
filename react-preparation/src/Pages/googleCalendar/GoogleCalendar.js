import PageHeader from "../../components/mainAppComponents/PageHeader";
import Calendar from "./components/Calendar";
import EventForm from "./components/EventForm";

const GoogleCalendar = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  return (
    <div className="googleCalendar">
      <PageHeader text="Google Calendar"></PageHeader>
      <Calendar year={year} month={month} />
      <EventForm />
    </div>
  );
};

export default GoogleCalendar;
