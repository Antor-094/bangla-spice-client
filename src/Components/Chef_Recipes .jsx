import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
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
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-20 lg:p-10 lg:w-[95%] mx-auto">
        {/* chef pic */}
        <div className="lg:w-[817px]">
          <img src={chefDetails.image} alt="" />
        </div>
        {/* chef details */}
        <div className="lg:w-[1000px] p-2">
          <p className="card-title text-[#5ea3a3]">Name: {chefDetails.name}</p>
          <p className="my-5">
            <span className="font-bold">Bio</span>:{" "}
            <span className="text-[#4E4E4F]">{chefDetails.bio}</span>
          </p>
          <div className="lg:card-actions justify-between">
            <p className="flex gap-3 items-center">
              <FaThumbsUp className="text-[#5ea3a3]"></FaThumbsUp>{" "}
              {chefDetails.likes} likes
            </p>
            <p className="flex gap-3 items-center">
              Number Of Recipes: {chefDetails.recipes}{" "}
              <BiFoodMenu className="text-[#5ea3a3]"></BiFoodMenu>
            </p>
            <p className="flex gap-3 items-center">
              Experience: {chefDetails.experience} years
              <GrUserExpert className="text-[#5ea3a3]"></GrUserExpert>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border border-solid shadow-sm lg:p-10 lg:w-[95%] mx-auto">
        <p className="text-[#488b8f] font-semibold mb-6 text-center">
          Chef's Special Recipes
        </p>
        <div className="border-t border-solid border-[#488b8f] grid lg:grid-cols-3 ">
          {chefDetails.recipes_info.map((recipe, index) => (
            <div key={recipe.name}>
              <div className="card p-3 mt-7 lg:w-96 border rounded-none border-solid ">
                <div className="card-body pt-3 pl-0 pe-0 pb-0">
                  <h2 className="card-title text-base text-[#488b8f]">
                    Recipe:{" "}
                    <span className="text-black font-thin">{recipe.name}</span>
                  </h2>
                  <div className="text-[#4A4A4A] text-sm ">
                    <h2 className="card-actions ps-0 text-base text-[#488b8f]">
                      Ingredients:
                    </h2>
                    <ol className="list-decimal px-4">
                      {recipe.ingredients.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <p className="text-[#488b8f]">Cooking Method :</p>
                    <p>
                      {recipe.cooking_method.length > 250 ? (
                        <>
                          {recipe.cooking_method.slice(0, 250)}...{" "}
                          <button>
                            <label
                              htmlFor="my-modal-3"
                              className="link link-hover text-[#488b8f]"
                            >
                              read more
                            </label>
                          </button>
                        </>
                      ) : (
                        <>{recipe.cooking_method}</>
                      )}
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="card-actions justify-between">
                    <div className="w-24">
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={recipe.rating}
                        readOnly
                      />
                    </div>
                    {/* heart button */}
                    <button
                      className="btn bg-[#5ea3a3] text-white font-medium hover:bg-[#E29F28]"
                      onClick={handleToast}
                    >
                      <MdOutlineFavorite></MdOutlineFavorite>
                      <span>Add to favorite</span>
                    </button>
                  </div>
                </div>
                {/* modal */}
                {/* The button to open modal */}

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      <p className="text-[#488b8f]">Cooking Method :</p>
                    </h3>
                    <p className="py-4">{recipe.cooking_method}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
