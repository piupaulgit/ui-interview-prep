import React, { useState } from "react";
import "./temparatureConvertor.css";

function format(number) {
  return /\.\d{5}/.test(number) ? Number(number).toFixed(4) : number;
}

const TemparatureConvertor = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convert = (value, setDestination, calculatedValue) => {
    const numericValue = Number(value);
    const isValid = !Number.isNaN(numericValue) && Boolean(value);
    setDestination(isValid ? format(calculatedValue(numericValue)) : "");
  };

  return (
    <div>
      <h2>Temparature Convertor</h2>
      <div className="temparatureConvertor">
        <div className="input-holder">
          <label>Censius</label>
          <input
            type="number"
            value={celsius}
            onChange={(event) => {
              const newValue = event.target.value;
              setCelsius(newValue);
              convert(newValue, setFahrenheit, (value) => (value * 9) / 5 + 32);
            }}
          />
        </div>
        <span>=</span>
        <div className="input-holder">
          <label>Fahrenheit</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={(event) => {
              const newValue = event.target.value;
              SetFahrenheit(newValue);
              convert(newValue, setCelsius, (value) => ((value - 32) * 5) / 9);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TemparatureConvertor;
