import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, increment, incrementBy } from "./counterSlice";

const CounterComponentWithToolkit = () => {
  const count = useSelector((state) => state.counter.counter);
  const { counter, data, loading, error } = useSelector(
    (state) => state.counter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData()); // Fetch data when the component mounts
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(incrementBy(5))}>incrementBy 5</button>
      </div>
      <h2>Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default CounterComponentWithToolkit;
