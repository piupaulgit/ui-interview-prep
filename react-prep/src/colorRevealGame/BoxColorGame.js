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
  const [selectedBoxes, setSelectedBoxes] = useState(new Map());

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

  const handleOnclick = (id, color, revealed) => {
    if (revealed !== false) {
      const isBoxAlreadySelectedCount = selectedBoxes.get(color) + 1 || 0 + 1;
      setBoxList(
        boxList.map((bx) => (bx.id === id ? { ...bx, revealed: true } : bx))
      );
      setSelectedBoxes((prev) => prev.set(color, isBoxAlreadySelectedCount));

      if (isBoxAlreadySelectedCount === 2) {
        console.log("win");
      } else {
        console.log("lose");
      }
    }
  };

  return (
    <div className="container">
      <div className="boxes">
        {boxList &&
          boxList.map((box) => {
            return (
              <Box
                key={box.id}
                {...box}
                handleClick={handleOnclick}
                selectedBoxes={selectedBoxes}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BoxColorGame;

// 1. Render ui with box countBy
// 2. generate randor colors
// 3. assign random color to the boxes
// 4. handle click of the boxes
//     first Selection
//       reveal color

//     second select
//       reveal color
//       increase countBy

//       check if the colors are same
//         same:
//           save store
//           stay with true colors
//         not same:
//           back to white

// reset functionlaity
