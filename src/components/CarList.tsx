"use client";
import { Cars } from "../data/staticData";
import { CarType } from "@/type/entities";
import React, { useState } from "react";

const CarList: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  const filterCars = Cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="p-8">
        <input
          className="input input-bordered my-2 w-full cars"
          placeholder="search"
          onChange={handleChange}
          type="search"
          autoFocus
        />
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {filterCars.length > 0 ? (
              filterCars.map((car: CarType) => (
                <tr key={car.id}>
                  <th>{car.id}</th>
                  <th>{car.name}</th>
                </tr>
              ))
            ) : (
              <div className="p-5 text-center font-bold">Not Found Any Cars</div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarList;
