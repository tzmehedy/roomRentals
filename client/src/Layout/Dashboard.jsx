import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Shared/Sidebar';

const Dashboard = () => {
    return (
      <div className="container mx-auto flex">
        <Sidebar></Sidebar>
        <div className='ml-5'>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;