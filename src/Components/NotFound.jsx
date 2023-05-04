import React from 'react';
import { Link } from 'react-router-dom';
// import image404 from '../../src/assets/banner/oops-404-error-with-broken-robot-concept-illustration_114360-1932' 
const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='md:w-[400px] md:h-[400px] mx-auto' src="https://i.ibb.co/PN6jbgv/404page.png" alt="" />
            <div>
               <h1 className='text-3xl text-red-500 font-bold'>PAGE NOT FOUND</h1>
               <p className='my-3'>The page you are looking for might have been removed had its name changed or its temporarily unavailable!</p>
               <Link to='/'><button className='bg-[#488b8f] font-bold text-white p-3 rounded-md'>GOT TO HOME PAGE</button></Link>
            </div>
        </div>
    );
};

export default NotFound;