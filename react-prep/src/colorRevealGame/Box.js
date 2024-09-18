import { useEffect, useState } from "react";
const DEFAULT_COLOR = "#FFFFFF";

const Box = ({ color, handleClick, revealedColors, activeColor }) => {
  const isReveald = revealedColors.has(color);
  const [backgroundColor, setBackgroundColor] = useState(
    isReveald ? color : DEFAULT_COLOR
  );

  const handleBoxClick = () => {
    if (backgroundColor !== DEFAULT_COLOR) {
      return;
    }
    setBackgroundColor(color);
    handleClick(color);
  };

  useEffect(() => {
    if (!isReveald && activeColor.length == 0) {
      setBackgroundColor(DEFAULT_COLOR);
    }
  }, [revealedColors, activeColor]);

  const startSession = () => {
    show();
    if (color) {
      setBackgroundColor("red");
    }
  };

  const show = () => {
    console.log("gg");
  };

  return (
    <div
      onClick={handleBoxClick}
      className="box"
      style={{
        background: backgroundColor,
      }}
    ></div>
  );
};

export default Box;
