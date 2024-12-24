import React from 'react';
import { CgMenu } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router';

const NavBar = () => {
    const navLinks = (
      <>
        <li>
          <Link>Login</Link>
        </li>
        <li>
          <Link>Sign Up</Link>
        </li>
      </>
    );
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
                <li>
                  <Link>Login</Link>
                </li>
                <li>
                  <Link>Sign Up</Link>
                </li>
                <li>
                  <Link>Host Your Home</Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl">
              Room <span className="text-[#F09167]">Rental</span>
            </a>
          </div>

          <div className="navbar-end space-x-5">
            <button className="font-bold hidden md:inline-block">
              Host Your Home
            </button>
            <div className="dropdown dropdown-end">
              <button
                className="flex space-x-2 border-2 px-2 py-1 rounded-2xl  "
                tabIndex={0}
              >
                <CgMenu className="text-2xl"></CgMenu>
                <FaUserCircle className="text-2xl"></FaUserCircle>
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