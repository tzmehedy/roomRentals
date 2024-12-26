import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Shared/Sidebar';

const Dashboard = () => {
    return (
      <div className="container mx-auto flex flex-col lg:flex-row">
        <Sidebar></Sidebar>
        <div className='ml-5 flex-1'>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;