import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedPage } from "../../../../features/reducers/stateReducer";

import { Menus } from "../../../../product/constants/sidebar_constants";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-blue-700 h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="/assets/control.png"
        alt="_"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
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
          Designer
        </h1>
      </div>
      <ul className=" pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 group  hover:bg-white
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
            onClick={() => dispatch(setSelectedPage(Menu.route))}
          >
            {Menu.src}
            <span
              className={`${
                !open && "hidden"
              } origin-left  text-lg group-hover:text-black`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
