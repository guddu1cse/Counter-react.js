import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          margin: "10px",
          border: "1px solid black",
          background: "lightblue",
          borderRadius: "5px",
          height: "30px",
          padding: "5px",
        }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          margin: "10px",
          border: "1px solid black",
          background: "lightblue",
          borderRadius: "5px",
          height: "30px",
          padding: "5px",
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
