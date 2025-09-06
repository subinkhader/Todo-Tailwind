import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  // const [Data, SetData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",

  // });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    SetFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const { name, email, password } = formData;
    try {
      const response = await axios.post("http://localhost:3001/user/register", {
        name,
        email,
        password,
      });
      console.log("Sucess:", response.data);
      setError("");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    } finally {
      SetFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="flex content-center justify-center top-[3rem] max-sm:top-[100px]  sm:top-[85px] relative">
      <div className="bg-[rgb(30,59,33,0.3)] border border-slate-400 rounded-md p-7 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
        <h1 className="text-4xl text-whitefont-bold text-center mb-6 max-sm:text-2xl">
          Registration page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            <input
              className="input-field"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label className=" sm:text-2xl input-label peer" htmlFor="">
              Your name
            </label>
            <BiUser className="absolute top-9 right-1 max-sm:right-9" />
          </div>

          <div className="input-div">
            <input
              className="input-field"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label className=" sm:text-2xl input-label peer" htmlFor="">
              Your Email
            </label>
            <TfiEmail className="absolute top-9 right-1 max-sm:right-9" />
          </div>

          <div className="input-div">
            <input
              className="input-field"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label className=" sm:text-2xl input-label peer" htmlFor="">
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-9 right-1 max-sm:right-9" />
          </div>

          <div className="input-div">
            <input
              className="input-field"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <label className=" sm:text-2xl input-label peer" htmlFor="">
              Your Confirm Password
            </label>
            <RiLockPasswordLine className="absolute top-9 right-1 max-sm:right-9" />
          </div>

          <button
            className="w-full mb-2 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 "
            type="submit"
          >
            Login
          </button>
          <div>
            <span className="m-4 max-sm:text-sm">
              Already Create an Account?{" "}
              <Link className="text-blue-500" to="/login">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
