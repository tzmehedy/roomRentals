import React from "react";
import MenuItems from "./MenuItems";
import { FaBook } from "react-icons/fa";

const GuestMenu = () => {
  return (
    <div className="space-y-2">
      <MenuItems
        address="myBookings"
        label="My Bookings"
        icon={FaBook}
      ></MenuItems>
      <div>
        <button className="font-bold text-xl">Become a host</button>
      </div>
    </div>
  );
};

export default GuestMenu;
