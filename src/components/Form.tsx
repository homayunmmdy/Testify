import { CountriesType } from "@/type/entities";
import React from "react";
import { Countries } from "../data/staticData";

const Form: React.FC = () => {
  return (
    <>
      <p className="font-bold text-center text-xl mb-5">Personal Information</p>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="please enter your name"
          required
          autoFocus
          className="input input-bordered mb-4"
        />
        <input
          className="input input-bordered mb-4"
          type="number"
          min={18}
          max={99}
          placeholder="Please Enter your age"
          required
        />
        <textarea
          className="textarea textarea-bordered mb-5"
          placeholder="Tell us about your self a little bit"
        ></textarea>
        <select aria-label="combobox" className="select select-bordered w-full max-w-xs mb-5">
          <option disabled selected>
            Please select your country
          </option>
          {Countries.map((country: CountriesType) => (
            <option key={country.id}>{country.name}</option>
          ))}
        </select>
        <label data-testid="remember" className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input  type="checkbox" className="toggle" defaultChecked />
        </label>
        <label data-testid="privaicyPolicy" className="label cursor-pointer">
          <span className="label-text">Agree with Privacy and Policy</span>
          <input  required type="checkbox" defaultChecked className="checkbox" />
        </label>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
