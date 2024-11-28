import React from "react";
import Lights from "./Lights";
import "./trafficLight.css";

const config = {
  red: {
    backgroundColor: "red",
    duration: 4000,
    next: "green",
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 600,
    next: "red",
  },
  green: {
    backgroundColor: "green",
    duration: 3000,
    next: "yellow",
  },
};

const TrafficLight = () => {
  return <Lights config={config} />;
};

export default TrafficLight;
