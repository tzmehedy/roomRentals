import React from 'react';
import { CgMenu } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import axios from 'axios';

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handelLogout = async () => {
    try {
      await logOut();
      toast.success("Logout Successful");
    } catch (err) {
      toast.error(err.message);
    }
  };
    const navLinks = (
      <>
        {user ? (
          <>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <Link onClick={handelLogout} className="">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Sign Up</Link>
            </li>
          </>
        )}
      </>
    );

    const handelBecomeAHost = () =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to become a host!!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Continue",
      }).then(async(result) => {
        if (result.isConfirmed) {
          const currentUserInfo = {
          email: user?.email,
          role: "guest",
          status: "requested",
        };
        const { data } = await axios.put(
          "http://localhost:5000/users",
          currentUserInfo
        )
        if(data.modifiedCount>0){
          toast.success("Please Wait a few moment to admin approval")
        }
        else{
          toast.error("You already submitted the request. Please wait for admin approval")
        }
          Swal.fire({
            title: "The request successfully submitted!",
            icon: "success",
          });
        }
      });
    }

    
    return (
      <div className="fixed z-50 w-full border-b-2 border-slate-300">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {user ? (
                  <>
                    <li>
                      <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    </li>
                    <li>
                      <Link onClick={handelLogout} className="">
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                      <Link to={"/signup"}>Sign Up</Link>
                    </li>
                    <li>
                      <Link>Host Your Home</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link to={"/"} className="btn btn-ghost text-2xl">
              Room <span className="text-[#F09167]">Rental</span>
            </Link>
          </div>

          <div className="navbar-end space-x-5">
            <button onClick={handelBecomeAHost} className="font-bold hidden md:inline-block">
              Host Your Home
            </button>
            <div className="dropdown dropdown-end">
              <button
                className="flex justify-center items-center space-x-2 border-2 px-2 py-1 rounded-2xl  "
                tabIndex={0}
              >
                <CgMenu className="text-2xl"></CgMenu>

                {user ? (
                  <img
                    className="w-7 h-7 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserCircle className="text-2xl"></FaUserCircle>
                )}
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NavBar;