import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginPath } from "../../../core/constants/network_constants";
import { userLogin } from "../../../features/reducers/userReducer";
import { toPath } from "../../../features/utils/to_path";

const Login = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData({ ...formData, [name]: value });
  };
  const login = (e) => {
    console.log(toPath(loginPath));
    console.log(formData);
    dispatch(userLogin(formData));
    e.preventDefault();
  };
  return (
    <div className="flex w-screen h-screen">
      <div className="flex w-[40%] h-full bg-yellow-500">
        <img src="assets/Lib-bg.jpg" alt="library" className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-center items-center  bg-gradient-to-tr from-transparent via-orange-200 to-purple-100">
        <form className="flex flex-col  w-1/2 h-1/2 " onSubmit={login}>
          <p className="text-4xl font-bold mx-auto my-4">Online - Library</p>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="p-2 my-2 border border-black rounded-md"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="p-2 my-2 border border-black rounded-md"
          />
          <button
            type="submit"
            className="m-auto w-1/3 h-8 rounded-lg my-2 border bg-black  text-white hover:bg-red-500 hover:text-black duration-200 cursor-pointer "
          >
            Login
          </button>
          {user == null ? "Null" : "User"}
        </form>
      </div>
    </div>
  );
};

export default Login;
