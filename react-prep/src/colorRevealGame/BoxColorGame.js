import { useEffect, useMemo, useState } from "react";
import Box from "./Box";
import "./game.css";
import getRandomColorList from "./util";

const shuffleColors = (colors) => {
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [colors[i], colors[j]] = [colors[j], colors[i]];
  }
  return colors;
};

const BoxColorGame = ({ boxCount }) => {
  const [boxList, setBoxList] = useState([]);
  const [activeColor, setActiveColor] = useState([]);
  const [revealedColors, setRevealedColors] = useState(new Set());
  const [roundCount, setRoundCount] = useState(0);

  useMemo(() => {
    const randomColors = getRandomColorList(boxCount / 2);
    const colors = shuffleColors([...randomColors, ...randomColors]);

    const boxes = [];
    colors.map((color, index) => {
      boxes[index] = {
        id: index,
        color: color,
        isRevealed: false,
      };
    });
    setBoxList(boxes);
  }, [boxCount]);

  const handleOnclick = (currentColor) => {
    if (activeColor.length === 0) {
      setActiveColor([currentColor]);
      return;
    }

    if (activeColor[0] === currentColor) {
      setRevealedColors((prev) => new Set(prev.add(currentColor)));
      setActiveColor([]);
    } else {
      setTimeout(() => {
        setActiveColor([]);
      }, 1000);
    }

    setRoundCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      {revealedColors.size === boxCount / 2 ? (
        <p>Game Over</p>
      ) : (
        <div className="boxes">
          {boxList &&
            boxList.map((box) => {
              return (
                <Box
                  key={box.id}
                  {...box}
                  revealedColors={revealedColors}
                  activeColor={activeColor}
                  handleClick={handleOnclick}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default BoxColorGame;
