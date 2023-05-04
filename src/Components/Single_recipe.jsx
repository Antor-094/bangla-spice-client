import React from 'react';
import { FaHeart, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import Swal from 'sweetalert2';

const SingleRecipe = ({ singleRecipe }) => {
  const { name, ingredients, cooking_method, rating } = singleRecipe;
  const handleToast = (event) => {
    const likeButton = event.currentTarget;
    likeButton.disabled = true;

    Swal.fire({
      icon: 'success',
      title: 'This recipe is your favorite!',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
      <div className="card-body p-6 d-flex flex-column">
  <h2 className="text-center font-sans font-bold text-3xl mb-6">{name}</h2>
  <div className="text-base text-gray-700 mb-6">
    <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
    <ul>
      {ingredients.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </ul>
  </div>
  <div className="mt-auto">
    <p className="text-base text-gray-700">{cooking_method}</p>
  </div>
</div>

      <div className="flex justify-between items-center px-6 py-4 bg-base-200">
        <span className="font-bold text-lg">
          <Rating
            style={{}}
            initialRating={rating}
            readonly
            fullSymbol={<FaStar className="text-yellow-400" />}
            emptySymbol={<FaStar className="text-gray-400" />}
            fractions={2}
            partialSymbol={<FaStarHalf className="text-yellow-400" />}
          />
        </span>
        <button className="btn btn-primary btn-heart" onClick={handleToast}>
          <FaHeart className="mr-2" />
          <span>like</span>
        </button>
      </div>
    </div>
  );
};

export default SingleRecipe;
