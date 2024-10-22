import "./day.css";

const Day = ({ date, isInActiveDate }) => {
  return (
    <div className={`day ${isInActiveDate && "inactive-days"}`}>
      <h4>{date}</h4>
      <div></div>
    </div>
  );
};

export default Day;
