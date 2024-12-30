import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { GoGraph } from "react-icons/go";
import { FaHome, FaList } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import MenuItems from "../Components/DashboardMenu/MenuItems";
import useUserRole from "../Hooks/useUserRole";
import HostMenu from "../Components/DashboardMenu/HostMenu";
import GuestMenu from "../Components/DashboardMenu/GuestMenu";
import AdminMenu from "../Components/DashboardMenu/AdminMenu";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [role, isLoading] = useUserRole();
  const { user,logOut } = useAuth();
  const navigate = useNavigate()

  const handelLogout = async () => {
    try {
      await logOut();
      toast.success("Logout Successful");
      navigate("/")
    } catch (err) {
      toast.error(err.message);
    }
  };
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
        className={`w-64  h-screen  bg-slate-200  transition duration-200 ease-in-out  lg:translate-x-0 ${
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
            <MenuItems
              address="/dashboard"
              label="Statistics"
              icon={GoGraph}
            ></MenuItems>

            {role === "guest" && <GuestMenu></GuestMenu>}
            {role === "host" && <HostMenu></HostMenu>}
            {role === "admin" && <AdminMenu></AdminMenu>}
          </div>

          <div className="divider"></div>

          <div className="p-5 space-y-5 bottom-0">
            <NavLink
              to={"profile"}
              className="flex items-center gap-2 font-bold text-lg text-slate-700"
            >
              <ImProfile></ImProfile> Profile
            </NavLink>
            <Link
              onClick={handelLogout}
              className="flex items-center gap-2 font-bold text-lg text-slate-700"
            >
              <FiLogOut></FiLogOut> Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
