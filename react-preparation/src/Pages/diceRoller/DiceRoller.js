import React, { useState } from "react";
import "./diceRoller.css";

const DiceRoller = () => {
  const [numberOfDice, setNumberOfDice] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const rollDice = () => {
    if (numberOfDice > 12) {
      alert("maximum 12 number is allowed");
      return;
    }

    let newNumbers = [];
    for (let i = 0; i < numberOfDice; i++) {
      newNumbers.push(Math.ceil(Math.random() * 6));
    }

    setNumbers(newNumbers);
  };

  return (
    <div>
      <h2>Dice Roller</h2>
      <div>
        <input
          type="number"
          onChange={(event) => setNumberOfDice(event.target.value)}
          min="1"
          max="12"
        />
        <button onClick={rollDice}>Roll Dice</button>
      </div>
      <div className="dice-holder">
        {numbers.length > 0 &&
          numbers.map((num, index) => {
            return (
              <div className={`dice dice-with-${num}`}>
                <div className="dots">
                  {Array(num)
                    .fill(num)
                    .map((_, index) => {
                      return <span className="dot"></span>;
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DiceRoller;
