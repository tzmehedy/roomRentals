import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { GoGraph } from "react-icons/go";
import { FaHome, FaList } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
    const [active,setActive] = useState(false)
    
    return (
      <div>
        {/* Small screen navbar */}
        <div className="lg:hidden shadow-lg flex justify-end w-full">
          <button
            onClick={() => setActive(!active)}
            htmlFor="my-drawer"
            className=" text-2xl"
          >
            <MdMenu></MdMenu>
          </button>
        </div>

        {/* Large screen navbar */}
        <div
          className={`w-64  h-screen bg-slate-200  transition duration-200 ease-in-out  lg:translate-x-0 ${
            active && "absolute -translate-x-full"
          }`}
        >
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
                <MdManageHistory className="" /> Manage Bookings
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
      </div>
    );
};

export default Sidebar;