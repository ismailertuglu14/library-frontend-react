import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpen,
  setSelectedPage,
} from "../../../../features/reducers/stateReducer";
import { MdLogin, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";

import { Menus } from "../../../../product/constants/sidebar_constants";
import SidebarElements from "./SidebarElements";

const Sidebar = () => {
  const navigate = useNavigate();
  const open = useSelector((state) => state.stateReducer.open);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div
      className={` ${
        open ? "w-60" : "w-20 "
      } bg-blue-700 h-screen p-5  pt-8 relative  duration-300 `}
    >
      <img
        src="/assets/control.png"
        alt="_"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => dispatch(setOpen())}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="/assets/logo.png"
          alt="_"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Online-Library
        </h1>
      </div>
      <ul className=" pt-6">
        {Menus.map((Menu, index) => (
          <SidebarElements Menu={Menu} index={index} />
        ))}
      </ul>
      <ul className="absolute bottom-12 cursor-pointer hover:bg-red-500 p-1 rounded-md duration-300">
        {user == null ? (
          <MdLogin size={30} onClick={() => navigate("/login")} />
        ) : (
          <MdLogout size={30} />
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
