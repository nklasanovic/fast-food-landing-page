import React from "react";
import { categories } from "../data/food.js";

const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((c) => (
          <div
            className="bg-gray-200 ronded-lg p-4 flex justify-between items-center"
            key={c.id}
          >
            <h2 className="font-bold sm:text-xl">{c.name}</h2>
            <img className="w-20" src={c.image} alt={c.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
