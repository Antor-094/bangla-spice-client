import React from "react";

const JonUs = () => {
  return (
    <div>
      <div className="hero lg:w-[80%] mx-auto">
        <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse bg-[#FFFFFF]  rounded-lg shadow-lg lg:px-20">
          <img
            src="https://i.ibb.co/9gP4nHh/pexels-kampus-production-8511871.jpg"
            className="lg:w-[490px] w-full"
          />
          <div>
            <p className="text-[#488b8f] mb-3">JOIN US</p>
            <h1 className="lg:text-5xl text-xl font-semibold text-[#0D0D0D] mb-7">
              Let's start sharing your awesome recipes
            </h1>

            <button className="btn-main  bg-[#488b8f] p-2 rounded font-bold text-white">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JonUs;
