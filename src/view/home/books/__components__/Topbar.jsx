import React from "react";
import { useState } from "react";
import { MdFilterList } from "react-icons/md";

const Topbar = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const enterPressed = (e) => {
    if (e.keyCode == 13) {
      console.log(`Value =>${name}`);
    }
  };
  return (
    <div className="flex flex-row h-16   justify-center items-center">
      {/* Search Bar Start */}

      <div class="max-w-2xl w-full   ">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-black border">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2  "
            type="text"
            id="_customSearch"
            value={name}
            onKeyDown={enterPressed}
            onChange={handleChange}
            placeholder="Search something.."
          />
        </div>
      </div>
      {/* Search Bar End */}
      <div className="pl-4 cursor-pointer">
        <MdFilterList size={40} />
      </div>
    </div>
  );
};

export default Topbar;
