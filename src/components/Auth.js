import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../Store/store";

const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch= useDispatch();
  

  const changeHandle = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(AuthActions.login())
    
  };

  return (
    <form
      className="max-w-sm mx-auto mt-12 p-6 bg-gray-100 shadow-xl rounded-lg"
      onSubmit={formHandler}
    >
      <div className="flex flex-col mb-6">
        <label
          htmlFor="email"
          className="text-gray-700 font-semibold mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={changeHandle}
          className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="password"
          className="text-gray-700 font-semibold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={changeHandle}
          className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <button
        className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition duration-300"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Auth;
