"use client";
import { CountriesType } from "@/type/entities";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Countries } from "../data/staticData";

const Form: React.FC = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (age < 18 || age > 99) {
      toast.error("you're age must be between 18 to 99 year's old");
      return
    }

    toast.success(`Your're welcome ${name}`)
  };
  return (
    <>
      <Toaster />
      <p className="font-bold text-center text-xl mb-5">Personal Information</p>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="please enter your name"
          required
          autoFocus
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          className="input input-bordered mb-4"
        />
        <input
          className="input input-bordered mb-4"
          type="number"
          value={age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value as any)}
          placeholder="Please Enter your age"
          required
        />
        <textarea
          className="textarea textarea-bordered mb-5"
          placeholder="Tell us about your self a little bit"
        ></textarea>
        <select
          aria-label="combobox"
          className="select select-bordered w-full max-w-xs mb-5"
        >
          <option disabled selected>
            Please select your country
          </option>
          {Countries.map((country: CountriesType) => (
            <option key={country.id}>{country.name}</option>
          ))}
        </select>
        <label data-testid="remember" className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" className="toggle" defaultChecked />
        </label>
        <label data-testid="privaicyPolicy" className="label cursor-pointer">
          <span className="label-text">Agree with Privacy and Policy</span>
          <input required type="checkbox" defaultChecked className="checkbox" />
        </label>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
