import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="block">
      <div className="ml-10 flex items-baseline space-x-4">
        <NavLink
          to="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </NavLink>
        <NavLink
          to="Register"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Register
        </NavLink>
        <NavLink
          to="Login"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
