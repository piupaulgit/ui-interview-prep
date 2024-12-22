import React, { useEffect, useState } from "react";
import "./progressBar2.css";

const ProgressBar = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);
  return (
    <div className={`progressbar-two ${startAnimation && "animate"}`}>
      <span></span>
    </div>
  );
};

const ProgressBar2 = () => {
  const [bars, setBars] = useState(0);
  return (
    <div>
      <h2>ProgressBar Two</h2>
      <button onClick={() => setBars((prev) => prev + 1)}>Add</button>
      <div className="progressbar-two-holder">
        {bars}
        {Array(bars)
          .fill(null)
          .map((_, index) => {
            return <ProgressBar key={index} />;
          })}
      </div>
    </div>
  );
};

export default ProgressBar2;
