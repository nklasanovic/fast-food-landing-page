import React, { useState } from "react";
import { data } from "../data/food.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((d) => {
        return d.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((d) => {
        return d.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type:</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={() => setFoods(data)} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button onClick={() => filterType('burger')} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button onClick={() => filterType('pizza')} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button onClick={() => filterType('salad')} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button onClick={() => filterType('chicken')} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filter Price:</p>
          <div className="w-full flex justify-between max-w-[390px]">
            <button onClick={() => filterPrice('$')} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={() => filterPrice('$$')} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={() => filterPrice('$$$')} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$')} className="border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((f) => (
          <div
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            key={f.id}
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={f.image}
              alt={f.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{f.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {f.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
