import { useEffect, useState } from "react";
import _, { result } from "lodash";
import "./game.css";

const Game = ({ data }) => {
  const [gameData, setGameData] = useState(Object.entries(data).flat());
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [correctAns, setCorrectAns] = useState([]);
  const [inCorrectAns, setInCorrectAns] = useState([]);
  const [matched, setMatched] = useState(new Set());

  useEffect(() => {
    setGameData(_.shuffle(gameData));
  }, []);

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    const newValues = selectedOptions.concat(value);

    if (newValues.length <= 2 && !selectedOptions.includes(value)) {
      setSelectedOptions(newValues);
    }

    if (newValues.length === 2) {
      if (
        data[newValues[0]] === newValues[1] ||
        data[newValues[1]] === newValues[0]
      ) {
        setCorrectAns(newValues);
        setTimeout(() => {
          setMatched(new Set([...matched, ...newValues]));
        }, 1000);
      } else {
        setInCorrectAns(newValues);
      }

      setTimeout(() => {
        setSelectedOptions([]);
        setCorrectAns([]);
        setInCorrectAns([]);
      }, 1000);
    }
  };

  if (matched.size === gameData.length) {
    return <h2 className="congratualtions">Congratulations!!!</h2>;
  }

  return (
    <div className="country-capital-game">
      {gameData.length && (
        <ul>
          {gameData.map((option) => {
            if (matched.has(option)) {
              return null;
            }
            const isSelected = selectedOptions.includes(option);
            const isCorrect =
              selectedOptions.length === 2 && correctAns.includes(option);
            const isInCorrect =
              selectedOptions.length === 2 && inCorrectAns.includes(option);
            return (
              <li
                className={`${isSelected && "selected"} ${
                  isCorrect && "correct"
                } ${isInCorrect && "inCorrect"}`}
                key={option}
                onClick={handleClick}
                data-value={option}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Game;
