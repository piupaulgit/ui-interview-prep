import "./day.css";

const Day = ({ date, dayName }) => {
  return (
    <div className="day">
      <h3>{dayName}</h3>
      <h4>{date}</h4>
      <div></div>
    </div>
  );
};

export default Day;
