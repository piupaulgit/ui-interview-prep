import React from "react";
import useVirtualScroll from "./useVirtualScroll";
import "./virtualScroll.css";

const VirtualScrollActualComponent = ({
  renderItems,
  data,
  itemHeight,
  containerHeight,
}) => {
  const { visibleItem, startIndex, totalHeight, handleScroll, containerRef } =
    useVirtualScroll(data, itemHeight, containerHeight);
  return (
    <div className="virtual-scroll">
      <div
        className="container"
        style={{
          height: `${containerHeight}px`,
          overflowY: "auto",
          position: "relative",
          border: "1px solid #ddd",
        }}
        ref={containerRef}
        onScroll={handleScroll}
      >
        <div
          className="totalHeightContainer"
          style={{ height: `${totalHeight}px`, position: "relative" }}
        >
          {visibleItem.length > 0 &&
            visibleItem.map((item, index) => {
              return (
                <div
                  className="item"
                  style={{
                    position: "absolute",
                    top: `${(startIndex + index) * itemHeight}px`,
                    height: `${itemHeight}px`,
                    lineHeight: `${itemHeight}px`,
                    borderBottom: "1px solid #f0f0f0",
                    padding: "0 10px",
                    boxSizing: "border-box",
                  }}
                  key={`${startIndex + index}`}
                >
                  {item}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const VirtualScroll = () => {
  const data = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

  const renderItems = (item, index) => {
    return (
      <div>
        <strong>{index + 1}</strong>: {item}
      </div>
    );
  };
  return (
    <div>
      <h2>Virtual Scroll</h2>
      <VirtualScrollActualComponent
        data={data}
        itemHeight={40}
        containerHeight={400}
        renderItems={renderItems}
      />
    </div>
  );
};

export default VirtualScroll;
