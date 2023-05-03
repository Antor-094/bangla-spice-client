import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Single_recipe from "./Single_recipe";

const Chef_Recipes = () => {
  const recipes_page = useLoaderData();
  const { id, name, bio, image, likes, recipes, experience,recipes_info } = recipes_page;
  // console.log(id)
  // console.log(recipes);
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 to-purple-400 sm:min-h-screen py-10 px-6 md:px-20 lg:px-40 xl:px-60">
  <div className="flex flex-col md:flex-row items-center md:items-start">
    <img
      src={image}
      alt={name}
      className="w-full md:w-2/5 h-auto rounded-lg shadow-xl mb-8 md:mb-0 md:h-[450px] object-cover"
    />
    <div className="md:w-3/5 md:ml-8 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{name}</h1>
      <p className="text-lg md:text-xl text-gray-200 mb-6">{bio}</p>
      <div className="flex items-center justify-center md:justify-start space-x-4">
        <div className="flex items-center text-gray-200 text-lg md:text-xl">
          <FaThumbsUp className="mr-2" />
          <span>{likes}</span>
        </div>
        <div className="text-gray-200 text-lg md:text-xl">
          <span className="font-bold">{recipes}</span> recipes
        </div>
        <div className="text-gray-200 text-lg md:text-xl">
          <span className="font-bold">{experience}</span> years of experience
        </div>
      </div>
    </div>
  </div>
</div>

    <p className="text-3xl text-center font-bold my-6">Recipes</p>
    <div className="grid md:grid-cols-3 my-10 gap-2 p-1">
      {
        recipes_info.map((singleRecipe,index) => <Single_recipe key={index} singleRecipe={singleRecipe}></Single_recipe> )
      }
    </div>
    </div>
  );
};

export default Chef_Recipes;
