import React from "react";
import { FaArrowRight, FaHeart, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
const Chefs_list = ({ chef }) => {
  return (
    <div className="card lg:w-96 border hover:border-[#488b8f] border-solid bg-white mx-auto p-2 shadow-md">
      <figure className="px-1 pt-10 h-60">
        <LazyLoad>
          <img
            className="rounded-md w-full h-full object-cover"
            style={{ height: "100%", objectFit: "cover" }}
            src={chef.image}
            alt={chef.name}
          />
        </LazyLoad>
      </figure>

      <div className="card-body">
        <h2 className="card-title text-[#488b8f] text-2xl font-bold mb-2">
          {chef.name}
        </h2>
        <div className="text-[#4A4A4A] flex flex-col gap-3">
          <p className="badge border-[#488b8f] badge-outline px-3 py-2">
            Experience: {chef.experience} years
          </p>
          <p className="badge border-[#488b8f] badge-outline px-3 py-2">
            Recipes: {chef.recipes}
          </p>
          <p className="flex items-center justify-center gap-2 badge border-[#488b8f] badge-outline px-3 py-2">
            {chef.likes} <FaThumbsUp />
          </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/recipes/${chef.id}`}>
            <button className="p-3 bg-[#488b8f] rounded-md text-white hover:bg-[#488c8f8b] flex justify-center items-center">
              View Recipes
              <span className="ms-1">
                {" "}
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chefs_list;
