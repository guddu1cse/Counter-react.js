import React, { useState, useRef } from "react";

const StopWatch = ({ minute, second }) => {
  const [sec, setSec] = useState(second);
  const [min, setMin] = useState(minute);
  const intervalRef = useRef(null);

  function stop() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function reset() {
    setSec(second);
    setMin(minute);
    stop();
  }

  function timer() {
    setSec((prevSec) => {
      if (prevSec === 0) {
        setMin((prevMin) => {
          if (prevMin === 0) {
            alert("Time is up");
            stop();
          }
          return prevMin - 1;
        });
        return 59;
      } else {
        return prevSec - 1;
      }
    });
  }

  function start() {
    if (intervalRef.current !== null) {
      alert("Stopwatch is already running");
      return;
    }
    intervalRef.current = setInterval(timer, 1000);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-8 mb-5 text-teal-200 text-3xl">⏳STOP WATCH⏳</h1>
      <h2 className="w-[200px] m-2 p-2 text-4xl space-x-0 text-black bg-yellow-200 rounded-lg">
        {String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}
      </h2>
      <div className="flex space-x-2">
        <button onClick={stop} className="bg-red-500 p-2 w-[80px] rounded m-2">
          STOP
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 p-2 w-[80px] rounded m-2"
        >
          RESET
        </button>
        <button
          onClick={start}
          className="bg-green-500 p-2 w-[80px] rounded m-2"
        >
          START
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
