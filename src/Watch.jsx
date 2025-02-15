import React from "react";
import { useState } from "react";

const Watch = () => {
  let [time, setTime] = useState(new Date());
  setInterval(() => {
    setTime(new Date());
  });
  return <div>{time.toLocaleTimeString()}</div>;
};

export default Watch;
