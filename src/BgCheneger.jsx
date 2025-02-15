import React from "react";
import { useState } from "react";
const BgChanger = () => {
  const [color, setColor] = useState("red");
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "black",
    "orange",
    "violet",
    "purple",
    "pink",
    "brown",
    "gray",
    "teal",
    "turquoise",
    "silver",
    "maroon",
  ];

  return (
    <div style={{ backgroundColor: color }} className="w-[100vw] h-[100vh]">
      <div
        className={`h-[10vh] absolute top-[85vh] w-[80vw] left-[10vw] rounded-full bg-gray-600 border border-gray-500 flex justify-center items-center`}
      >
        {colors.map((selectedColor) => {
          return (
            <div
              key={selectedColor}
              onClick={() => {
                console.log(selectedColor);
                setColor(selectedColor);
              }}
              style={{ backgroundColor: selectedColor }}
              className="flex p-3 w-[70px] text-white justify-center m-1 items-center border rounded-[20px] border-gray-500 gap-5 hover:bg-gray-800 cursor-pointer"
            >
              {selectedColor}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BgChanger;
