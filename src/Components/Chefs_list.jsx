import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Chefs_list = ({chef}) => {
    return (
        <div className="card lg:w-96 border hover:border-[#488b8f] border-solid   bg-[] mx-auto p-2">
            
      <figure className="px-10 pt-10 h-60">
        <img className='rounded-sm' src={chef.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#488b8f]">{chef.name}</h2>
        <div className="text-[#4A4A4A] flex flex-col gap-3">
          <p className="badge border-[#488b8f] badge-outline">
            Experience: {chef.experience} years
          </p>
          <p className="badge border-[#488b8f] badge-outline">
            Recipes: {chef.recipes}
          </p>
          <p className="flex items-center justify-center gap-2 badge border-[#488b8f] badge-outline">
            {chef.likes} <FaHeart />
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/recipes/${chef.id}`}>
          <button className="p-3 bg-[#488b8f] rounded-md text-white hover:bg-[#488c8f8b]">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Chefs_list;