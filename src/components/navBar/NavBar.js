import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

const NavBar = () => {
  const { logged } = useSelector((state) => state.auth);
  return (
    <nav className="relative bg-[#fffffe] text-[#0d0d0d]">
      <div className="min-w-screen mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
          <Link to="/">
            <span className="hover:opacity-90 text-2xl font-medium relative after:content-['app'] after:text-yellow-js after:rounded-md after:bg-black after:text-[#fffffe] after:px-1">
              TODO
            </span>
          </Link>
          <div className=" md:flex items-center justify-end md:flex-1 lg:w-0">
            {logged ? (
              <Dropdown />
            ) : (
              <>
                <Link
                  to="/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Ingresar
                </Link>
                <Link
                  to="/register"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-[#0d0d0d] bg-[#ff8e3c]"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
