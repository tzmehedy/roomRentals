import React from 'react';
import { Link, NavLink } from 'react-router';
import { GoGraph } from "react-icons/go";
import { FaHome, FaList } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
    return (
      <>
        <div className="w-64  hidden lg:inline-block h-screen bg-slate-200  relative">
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

        <div className="drawer  lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content shadow-lg flex justify-between w-full">
            {/* Page content here */}
            <div className="text-center p-2">
              <Link className="font-bold text-2xl " to={"/"}>
                Room <span className="text-[#F09167] ">Rental</span>
              </Link>
            </div>

            <label htmlFor="my-drawer" className=" text-2xl drawer-button">
              <MdMenu></MdMenu>
            </label>
          </div>
          <div className="drawer-side w-2/3">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
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
            </ul>
          </div>
        </div>
      </>
    );
};

export default Sidebar;