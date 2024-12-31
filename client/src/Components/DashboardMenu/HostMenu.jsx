import React from 'react';
import MenuItems from './MenuItems';
import { FaHome, FaList } from 'react-icons/fa';

const HostMenu = () => {
    return (
      <div>
        <MenuItems
          address="addRoom"
          label="Add Room"
          icon={FaHome}
        ></MenuItems>
        <MenuItems
          address="myListings"
          label="My Listings"
          icon={FaList}
        ></MenuItems>

       
      </div>
    );
};

export default HostMenu;