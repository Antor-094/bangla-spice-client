import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/3YV9mvf/Personal-chef-design-powerpoint-slide.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Explore the Best Bangladeshi Recipes Online with Bangla Spice</h1>
          <p className="mb-5">
          Welcome to Bangla Spice, your go-to source for delicious Bangladeshi recipes created by our talented chefs. From classic curries to modern twists on traditional dishes, we're here to help you bring the flavors of Bangladesh to your kitchen
          </p>
          <button className="bg-[#488b8f] p-3 rounded font-bold">Explore recipes</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
