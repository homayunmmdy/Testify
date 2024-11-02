"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const EvenOdd: React.FC = () => {
  const [number, setNumber] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (number % 2 === 0) {
      toast.success("Your Number is EVEN");
    } else {
      toast.success("Your number is ODD");
    }
  };
  return (
    <>
      <Toaster />
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          value={number}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNumber(e.target.value as any)
          }
          className="input input-bordered mr-2"
          placeholder="Enter Your Number"
          type="number"
          autoFocus
        />
        <button className="btn btn-primary" disabled={!number} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default EvenOdd;
