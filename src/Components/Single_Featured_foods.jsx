import React from "react";

const Single_Featured_foods = ({ food }) => {
  const { id, name, image, description } = food;
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={image}
          className="h-[300px] w-[400px] object-cover"
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Single_Featured_foods;
