import React, { useEffect, useState } from "react";
import "./progressBarThree.css";

const ProgressBar = ({ ind, transitionCompleted, activeTranstionbar }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (ind === activeTranstionbar) {
      setStartAnimation(true);
    }
  }, [activeTranstionbar]);

  return (
    <div className={`progress-bar-three ${startAnimation && "animate"}`}>
      <span onTransitionEnd={() => transitionCompleted()}></span>
    </div>
  );
};

const ProgressBarThree = () => {
  const [bars, setBars] = useState(0);
  const [currentActiveBar, setCurrentActiveBar] = useState(0);
  return (
    <div>
      <h2>Progress Bar Three</h2>
      <button onClick={() => setBars((prev) => prev + 1)}>Add</button>
      <div className="bars-three-holder">
        {Array(bars)
          .fill(null)
          .map((_, index) => {
            return (
              <ProgressBar
                key={index}
                ind={index}
                activeTranstionbar={currentActiveBar}
                transitionCompleted={() =>
                  setCurrentActiveBar((prev) => prev + 1)
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProgressBarThree;
