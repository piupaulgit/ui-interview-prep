import React, { useEffect, useState } from "react";
import "./gridLights.css";

const GRID_NUMBERS = 9;

const GridLights = () => {
  const [selectedGrids, setSelectedGrids] = useState(new Set());

  useEffect(() => {
    if (selectedGrids.size === GRID_NUMBERS) {
      setTimeout(() => {
        startRemoving();
      }, 300);
    }
  }, [selectedGrids]);

  const startRemoving = () => {
    let arrayFromSet = Array.from(selectedGrids);

    const removeNext = () => {
      if (arrayFromSet.length == 0) {
        return;
      }

      let lastItem = arrayFromSet.pop();
      setSelectedGrids((prev) => {
        let newSet = new Set(prev);
        newSet.delete(lastItem);
        return newSet;
      });

      setTimeout(removeNext, 300);
    };

    removeNext();
  };

  const selectGrids = (id) => {
    let newSelectedGrid = new Set(selectedGrids);

    if (!newSelectedGrid.has(id)) {
      newSelectedGrid.add(id);
    }

    setSelectedGrids(newSelectedGrid);
  };

  return (
    <div>
      <h2>Grid Lights</h2>
      <div className="grid-holder">
        {Array(GRID_NUMBERS)
          .fill(null)
          .map((_, index) => {
            let isSelected = selectedGrids.has(index);
            return (
              <div
                className={`grid ${isSelected && "selected"}`}
                key={index}
                onClick={() => selectGrids(index)}
              >
                {index}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GridLights;
