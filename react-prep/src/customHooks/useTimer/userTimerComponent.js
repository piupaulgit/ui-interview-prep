import React, { useEffect } from "react";
import useTimer from "./useTimer";

const UseTimerComponent = () => {
  const { isRunning, start, stop, seconds } = useTimer(10);

  return (
    <div className="component-wrapper">
      <h2>Timer Component</h2>
      {isRunning ? <h3>{seconds}</h3> : <p>Timer not running</p>}
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
};

export default UseTimerComponent;
