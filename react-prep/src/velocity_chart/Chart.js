import { useMemo, useState } from "react";
import "./chart.css";

const Bar = ({ data, height }) => {
  return (
    <div
      className="bar"
      style={{
        height: `${height}%`,
        background: `${data.colour}`,
      }}
    >
      <span>
        {data.name}-{data.ticketCount}
      </span>
    </div>
  );
};
const Chart = ({ data }) => {
  const maxTicketCount = useMemo(() => {
    return Math.max(...data.map((item) => item.ticketCount));
  }, []);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <button className="btn" onClick={() => setIsOpen((prev) => !prev)}>
        Toggle
      </button>
      {isOpen && (
        <div className="chart-container">
          {data.map((data, index) => {
            return (
              <Bar
                key={data.id}
                height={(data.ticketCount / maxTicketCount) * 100}
                data={data}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Chart;
