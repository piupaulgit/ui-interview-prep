import React from "react";
import "./progressbar.css";
let MIN = 0;
let MAX = 100;
const ProgressBar = ({ value }) => {
  let formatedValue = Math.min(Math.max(value, MIN), MAX);
  return (
    <div className="progress-bar">
      <span style={{ width: `${formatedValue}%` }}>{formatedValue}%</span>
    </div>
  );
};

const ProgressBarPage = () => {
  return (
    <div className="progressbar-page">
      <h2>Progress Bar</h2>
      <ProgressBar value="90" />
      <ProgressBar value="0" />
      <ProgressBar value="20" />
      <ProgressBar value="67" />
      <ProgressBar value="647" />
      <ProgressBar value="-10" />
      <ProgressBar value="34" />
    </div>
  );
};

export default ProgressBarPage;
