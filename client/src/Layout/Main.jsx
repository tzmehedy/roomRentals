import React from 'react';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;