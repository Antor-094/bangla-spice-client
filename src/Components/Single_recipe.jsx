import React from 'react'
import { FaHeart } from 'react-icons/fa';
import Swal from "sweetalert2";

const Single_recipe = ({ singleRecipe }) => {
  const { name, ingredients, cooking_method, rating } = singleRecipe;
  const handleToast = (event) => {
    const likeButton = event.currentTarget;
    likeButton.disabled = true;
    
    Swal.fire({
      icon: 'success',
      title: 'this recipe is your favorite!',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
      <div className="card-body p-6">
        <h2 className="text-center font-sans font-bold text-3xl mb-6">{name}</h2>
        <div className="text-base text-gray-700 mb-6">
          <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
          <ul>
            {ingredients.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        </div>
        <p className="text-base text-gray-700">{cooking_method}</p>
      </div>
      <div className="flex items-center justify-center p-4 bg-base-200">
        <button className="btn btn-primary btn-heart" onClick={handleToast}>
          <FaHeart className="" />
          <span>like</span>
        </button>
      </div>
    </div>
  );
};
export default Single_recipe