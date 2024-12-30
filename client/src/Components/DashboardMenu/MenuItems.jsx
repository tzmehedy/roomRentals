import React from 'react';
import { NavLink } from 'react-router';

const MenuItems = ({address,label,icon:Icon}) => {
    return (
      <NavLink
        to={address}
        className="flex items-center gap-2 font-bold text-lg text-slate-700"
      >
        <Icon/> {label}
      </NavLink>
    );
};

export default MenuItems;