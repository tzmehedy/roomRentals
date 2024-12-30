import React from 'react';
import { MdManageHistory } from 'react-icons/md';
import MenuItems from './MenuItems';

const AdminMenu = () => {
    return (
      <div>
        <MenuItems
          address="/dashboard/manageUser"
          label="Manage Users"
          icon={MdManageHistory}
        ></MenuItems>
      </div>
    );
};

export default AdminMenu;