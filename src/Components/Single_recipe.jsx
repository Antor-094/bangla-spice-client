import React from "react";
import { FaHeart } from "react-icons/fa";

const Single_recipe = ({ singleRecipe }) => {
  const { name, ingredients, cooking_method, rating } = singleRecipe;
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
      <div className="card-body p-6">
        <h2 className="text-center font-sans font-bold text-3xl mb-6">{name}</h2>
        <p className="text-base text-gray-700 mb-6">
          <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
          <ul>
            {ingredients.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        </p>
        <p className="text-base text-gray-700">{cooking_method}</p>
      </div>
      <div className="flex items-center justify-center p-4 bg-base-200">
        <button className="btn btn-primary">
          <FaHeart className="mr-2" />
          <span>Like</span>
        </button>
      </div>
    </div>
  );
};

export default Single_recipe;
