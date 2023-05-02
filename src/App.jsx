import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="mt-2">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-26px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;