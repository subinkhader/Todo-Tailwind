import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const result = await response.data;
      console.log(result);
      localStorage.setItem("token", result.token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data); // Backend response
        console.log(error.response.status); // HTTP status
      } else {
        console.log(error.message);
      }
    } finally {
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="  flex content-center justify-center pt-16 sm:pt-40 ">
      <div className="bg-[rgb(30,59,33,0.3)] border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-whitefont-bold text-center mb-6">
          Login page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            <input
              className="input-field"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
            <label className=" sm:text-2xl  input-label peer" htmlFor="">
              Your Email
            </label>
            <BiUser className="absolute top-9 right-1" />
          </div>
          <div className="input-div">
            <input
              className="input-field"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
            />
            <label className=" sm:text-2xl  input-label peer" htmlFor="">
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-9 right-1" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember me">Remember me</label>
            </div>
            <Link to="" className="text-blue-500">
              Forgot Password ?
            </Link>
          </div>
          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 "
            type="submit"
          >
            Login
          </button>
          <div>
            <span className="m-4">
              New Here?{" "}
              <Link className="text-blue-500" to="/register">
                Create an Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
