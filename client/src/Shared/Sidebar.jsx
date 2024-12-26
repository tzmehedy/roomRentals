import React from 'react';
import { Link, NavLink } from 'react-router';
import { GoGraph } from "react-icons/go";
import { FaHome, FaList } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
    return (
      <div className="w-64 h-screen bg-slate-200 flex flex-col relative">
        <div className="text-center shadow-lg p-2">
          <Link className="font-bold text-2xl " to={"/"}>
            Room <span className="text-[#F09167] ">Rental</span>
          </Link>
        </div>

        <div className="">
          <div className="p-5 space-y-5">
            <NavLink
              to={"statistics"}
              className="flex items-center gap-2 font-bold text-lg text-slate-700"
            >
              <GoGraph></GoGraph> Statistics
            </NavLink>
            <NavLink
              to={"addRoom"}
              className="flex items-center gap-2 font-bold text-lg text-slate-700"
            >
              <FaHome></FaHome> Add Room
            </NavLink>
            <NavLink
              to={"myListings"}
              className="flex items-center gap-2 font-bold text-lg text-slate-700"
            >
              <FaList></FaList> My Listings
            </NavLink>
            <NavLink
              to={"manageBookings"}
              className="flex items-center gap-2 font-bold text-lg text-slate-700"
            >
              <MdManageHistory /> Manage Bookings
            </NavLink>
          </div>

          <div className="p-5 space-y-5 absolute bottom-0">
        
              <NavLink
                to={"profile"}
                className="flex items-center gap-2 font-bold text-lg text-slate-700"
              >
                <ImProfile></ImProfile> Profile
              </NavLink>
              <Link className="flex items-center gap-2 font-bold text-lg text-slate-700">
                <FiLogOut></FiLogOut> Logout
              </Link>
           
          </div>
        </div>
      </div>
    );
};

export default Sidebar;