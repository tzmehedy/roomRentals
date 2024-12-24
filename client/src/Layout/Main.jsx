import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
      <div>
        <NavBar></NavBar>
        <div className="pt-20 min-h-[calc(100vh-68px)] container mx-auto">
          <Outlet></Outlet> 
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;