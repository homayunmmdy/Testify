"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Greet = () => {
  const [user, setUser] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    setUser("");
    toast.success(`Hi ${user}`);
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          value={user}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser(e.target.value)
          }
          className="input input-bordered mr-2"
          placeholder="Enter Your Name"
          type="text"
          autoFocus
        />
        <button className="btn btn-primary" disabled={!user} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Greet;
