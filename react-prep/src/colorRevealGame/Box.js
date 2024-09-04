import { useEffect } from "react";

const Box = ({ id, color, revealed, handleClick, selectedBoxes }) => {
  return (
    <div
      onClick={() => handleClick(id, color, revealed)}
      className="box"
      style={{
        background: selectedBoxes.get(color) ? color : "fff",
      }}
    ></div>
  );
};

export default Box;
