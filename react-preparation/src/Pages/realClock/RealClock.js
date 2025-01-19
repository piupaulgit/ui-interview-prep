import React, { useEffect, useState } from "react";
import "./realClock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timeId);
  });

  const seconds = time.getSeconds();
  const minuts = time.getMinutes();
  const hours = time.getHours();

  const secondsAngle = seconds * 6;
  const minutesAngle = minuts * 6 + seconds * 0.1;
  const hoursAngle = (hours % 12) * 30 + minuts * 0.5;

  return (
    <div className="real-clock">
      <span
        className="second_hand hand"
        style={{ rotate: `${secondsAngle}deg` }}
      ></span>
      <span
        className="minute_hand hand"
        style={{ rotate: `${minutesAngle}deg` }}
      ></span>
      <span
        className="hour_hand hand"
        style={{ rotate: `${hoursAngle}deg` }}
      ></span>
    </div>
  );
};

const RealClock = () => {
  return (
    <div>
      <Clock />
    </div>
  );
};

export default RealClock;
