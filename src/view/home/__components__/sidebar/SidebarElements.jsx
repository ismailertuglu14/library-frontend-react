import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPage } from "../../../../features/reducers/stateReducer";

const SidebarElements = ({ Menu, index }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.stateReducer.open);

  return (
    <li
      key={index}
      className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 group  hover:bg-white
      ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
      onClick={() => dispatch(setSelectedPage(Menu.route))}
      data-bs-toggle="tooltip"
      title={Menu.title}
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
  );
};

export default SidebarElements;
