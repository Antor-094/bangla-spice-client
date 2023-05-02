import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/foods_images/istockphoto-1152493500-1024x1024.jpg';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {

    // const { registerUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [photo,setPhoto] = useState('')
    const [error, setError] = useState("");
    const { createUser, updateProf} = useContext(AuthContext);
    const handleRegistration = (event) => {
        
      event.preventDefault();
      
      setError('')
      if (password.length < 6) {
        setError("The password should be less than 6 characters");
        return;
      }
      createUser(email, password)
      .then(result => {
          updateProf(name,photo)
          const loggedUser = result.user;
          Swal.fire("Good job!", "You logged in your account", "success");
          console.log(loggedUser)
          
      })
      .catch(error => {
          console.log(error);
          setError(error.message);
      })

    };
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
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                  
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                  PhotoURL
                </label>
                <input
                onChange={(e) => setPhoto(e.target.value)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="text"
                  placeholder="photo url"
                  required
                />
              </div>
              <div className="items-center justify-between">
                <button
                  className="bg-[#488b8f] hover:bg-[#add2c9] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" onClick={handleRegistration}
                >
                  Sign Up
                </button>
                <p className="my-4">
                   already have an account?<Link className='inline-block align-baseline font-bold text-sm #488b8f hover:text-[#add2c9]' to='/login'>Login!!</Link>
                </p>
              </div>
              <p className='text-error'>{error}</p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
