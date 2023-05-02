import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/foods_images/istockphoto-1152493500-1024x1024.jpg';
import { FaGithub,FaFacebook,FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const [error,setError] = useState('')
  const handleLogin = (e)=>{

    e.preventDefault();
    setError('')
    if ((email && password)) {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          // navigate("/");
          
          e.target.reset();
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message)
        });
    }
  }
    return (
        <div className="flex items-center justify-center mt-20 p-2">
        <div className="flex flex-col md:flex-row md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          {/* Left side */}
          <div className="md:w-1/2 bg-cover">
            <img className='h-full' src={backgroundImage} alt="" />
               
          </div>
  
          {/* Right side */}
          <div className="md:w-1/2 px-6 py-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-4">Log in to your account</h2>
            <form>
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
              <div className="items-center justify-between">
                <button
                onClick={handleLogin}
                  className="bg-[#488b8f] hover:bg-[#add2c9] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Log in
                </button>
                <p className="my-4">
                   Don't have account?<Link className='inline-block align-baseline font-bold text-sm #488b8f hover:text-[#add2c9]' to='/register'>Register!!</Link>
                </p>
              </div>
              <h2 className='text-[#488b8f] font-bold text-center'>Login with</h2>
              <div className='flex items-center justify-evenly bg-[#faf9f9] p-4'>
                   <span ><FaGoogle></FaGoogle></span> <span><FaFacebook></FaFacebook></span> <span><FaGithub/></span>
              </div>
              <p>{error}</p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
