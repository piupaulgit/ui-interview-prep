import React, { useState } from "react";
import "./tabs.css";

const Tabs = ({ items }) => {
  const [activeValue, setActiveValue] = useState(items[0].value);

  const changeActiveTab = (value) => {
    setActiveValue(value);
  };
  return (
    <div className="tabs">
      <ul>
        {items.length > 0 &&
          items.map((tab, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => changeActiveTab(tab.value)}
                  className={activeValue === tab.value ? "active" : ""}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
      </ul>
      <div>
        {items.length > 0 &&
          items.map((tab, index) => {
            return (
              <div key={index} hidden={tab.value !== activeValue}>
                {tab.panel}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tabs;
