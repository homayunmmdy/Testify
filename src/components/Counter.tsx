"use client";
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="flex w-ful h-full justify-center items-center flex-col my-8">
        <p className="font-bold">Counter : {counter}</p>
        <div className="flex gap-2 my-4">
          <button
            className="btn btn-success"
            onClick={() => setCounter(counter + 1)}
          >
            Incress
          </button>
          <button
            className="btn btn-error"
            disabled={counter <= 0}
            onClick={() => setCounter(counter - 1)}
          >
            Decress
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
