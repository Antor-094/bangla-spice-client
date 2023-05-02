import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider';

const App = () => {
  return (
    <div className="mt-2">
      <AuthProvider><Navbar></Navbar></AuthProvider>
      <div className="min-h-[calc(100vh-26px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;