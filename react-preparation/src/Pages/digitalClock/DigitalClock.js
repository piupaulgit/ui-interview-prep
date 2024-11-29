import React, { useEffect } from "react";
import Digit from "./Digit";
import Separator from "./Separator";
import useTime from "./UseTime";
import "./clock.css";

const DigitalClock = () => {
  const time = useTime();

  let hours = time.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="clock">
      <Digit number={parseInt(hours / 10, 10)} />
      <Digit number={hours % 10} />
      <Separator />
      <Digit number={parseInt(minutes / 10, 10)} />
      <Digit number={minutes % 10} />
      <Separator />
      <Digit number={parseInt(seconds / 10, 10)} />
      <Digit number={seconds % 10} />
    </div>
  );
};

export default DigitalClock;
