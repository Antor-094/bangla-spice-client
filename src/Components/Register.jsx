import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/foods_images/istockphoto-1152493500-1024x1024.jpg';
import { FaGithub,FaFacebook,FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <div className="flex items-center justify-center mt-20 p-2">
        <div className="flex flex-col md:flex-row md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          {/* Left side */}
          <div className="md:w-1/2 bg-cover">
            <img className='h-full' src={backgroundImage} alt="" />
               
          </div>
  
          {/* Right side */}
          <div className="md:w-1/2 px-6 py-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-4 text-center">Register</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                  PhotoURL
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="text"
                  placeholder="photo url"
                />
              </div>
              <div className="items-center justify-between">
                <button
                  className="bg-[#488b8f] hover:bg-[#add2c9] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign Up
                </button>
                <p className="my-4">
                   already have an account?<Link className='inline-block align-baseline font-bold text-sm #488b8f hover:text-[#add2c9]' to='/login'>Login!!</Link>
                </p>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
