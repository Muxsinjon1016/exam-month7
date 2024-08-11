import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";
import { Navigate, Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { BiSolidLeftArrow } from "react-icons/bi";

export const MainLayout = () => {
  const user = loadState("user");

  if (!user) {
    return <Navigate replace to={"/login"} />;
  }

  return (
    <>
      <div className="flex">
        <div className="w-[8%] shadow-sm py-[30px] px-[24px] fixed bg-[#5b5ce2] min-h-screen">
          <Link to={"/"}>
            <img
              className="block mx-auto w-[65px] mb-[38px] h-auto"
              src="logo.svg"
              alt="logo"
            />
          </Link>
          <div>
            <div className="relative link">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "p-[15px] block rounded-6 bg-[#6c6de5]"
                    : "p-[15px] block rounded-6 bg-transparent"
                }
              >
                <div className="absolute tooltip top-3 -right-28 bg-gray-300 rounded-12 py-2 px-4 text-sm font-semibold">
                  <div className="relative">
                    <BiSolidLeftArrow className="absolute -left-7 w-5 text-gray-300 h-auto" />
                    All categories
                  </div>
                </div>
                <IoMdSettings className="w-[39px] text-white mx-auto h-auto" />
              </NavLink>
            </div>
            <div className="relative link">
              <NavLink
                to={"/goods"}
                className={({ isActive }) =>
                  isActive
                    ? "p-[15px] block rounded-6 bg-[#6c6de5]"
                    : "p-[15px] block rounded-6 bg-transparent"
                }
              >
                <div className="absolute tooltip top-3 -right-44 bg-gray-300 rounded-12 py-2 px-4 text-sm font-semibold">
                  <div className="relative">
                    <BiSolidLeftArrow className="absolute -left-7 w-5 text-gray-300 h-auto" />
                    CRUD page for Admin
                  </div>
                </div>
                <FaUser className="w-[40px] border-4 pt-1 rounded-[100%] border-[#9999EE] text-white mx-auto h-auto" />
              </NavLink>
            </div>
            <div className="relative link">
              <NavLink
                to={"/add"}
                className={({ isActive }) =>
                  isActive
                    ? "p-[15px] block rounded-6 bg-[#6c6de5]"
                    : "p-[15px] block rounded-6 bg-transparent"
                }
              >
                <div className="absolute tooltip top-3 -right-28 bg-gray-300 rounded-12 py-2 px-4 text-sm font-semibold">
                  <div className="relative">
                    <BiSolidLeftArrow className="absolute -left-7 w-5 text-gray-300 h-auto" />
                    All products
                  </div>
                </div>
                <img
                  className="w-[39px] text-white mx-auto h-auto"
                  src="bag.svg"
                  alt="icon"
                />
              </NavLink>
            </div>
            <NavLink
              to={"/pay"}
              className={({ isActive }) =>
                isActive
                  ? "p-[15px] block rounded-6 bg-[#6c6de5]"
                  : "p-[15px] block rounded-6 bg-transparent"
              }
            >
              <img
                className="w-[39px] text-white mx-auto h-auto"
                src="card.svg"
                alt="icon"
              />
            </NavLink>
          </div>
        </div>
        <div className="w-[92%] ml-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
