import { useEffect, useState } from "react";
import Light from "./Light";
export default function Lights({ initaLight = "green", config }) {
  const [currentColor, setCurrentColor] = useState(initaLight);

  useEffect(() => {
    const { next, duration } = config[currentColor];

    let time = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(time);
    };
  }, [currentColor]);

  return (
    <div className="traffic-lights">
      {Object.keys(config).map((color, key) => {
        return (
          <Light
            key={key}
            backgroundColor={color === currentColor ? color : undefined}
          />
        );
      })}
    </div>
  );
}
