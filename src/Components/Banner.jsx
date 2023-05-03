import React, { useState, useEffect } from "react";

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerImages = [
    "https://i.ibb.co/3YV9mvf/Personal-chef-design-powerpoint-slide.jpg",
    "https://i.ibb.co/nb99rmH/pexels-photo-1267320.jpg",
    "https://i.ibb.co/x1d514k/pexels-photo-2544829.webp",
    "https://i.ibb.co/r4kx6qJ/pexels-photo-2814828.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change the image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const style = {
    backgroundImage: `url("${bannerImages[bannerIndex]}")`,
    transition: "background-image 1s ease-in-out",
  };

  return (
    <div className="hero min-h-screen mb-7" style={style}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Explore the Best Bangladeshi Recipes Online with Bangla Spice
          </h1>
          <p className="mb-5">
            Welcome to Bangla Spice, your go-to source for delicious Bangladeshi
            recipes created by our talented chefs. From classic curries to
            modern twists on traditional dishes, we're here to help you bring
            the flavors of Bangladesh to your kitchen
          </p>
          <button className="bg-[#488b8f] p-3 rounded font-bold">
            Explore recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
