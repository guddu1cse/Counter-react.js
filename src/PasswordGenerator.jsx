import React from "react";
import { useState, useEffect } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [length, setLength] = useState(6);

  useEffect(() => {
    passwordGenerator();
  }, [charAllowed, numberAllowed, length]);

  const passwordGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) {
      str += "!@#$%^&*";
    }

    if (numberAllowed) {
      str += "0123456789";
    }

    for (let i = pass.length; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col">
        <div className="w-[30vw] flex justify-center items-center z-10">
          <input
            className="w-[30vw] border border-gray-500 p-2 rounded-l-lg"
            type="text"
            readOnly
            value={password}
          />
          <button
            className="border border-gray-500 bg-blue-400 p-2 rounded-r-lg"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            COPY
          </button>
        </div>

        <div className="w-[30vw] flex gap-3 flex-col bg-slate-400 p-3 rounded-b-lg relative bottom-2">
          <div className="flex justify-center items-center gap-3">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="text-center"
            />
            <label>length: {length}</label>
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="checkbox"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Include Character</label>
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="checkbox"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Include Number</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
