import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row max-w-[1440px] min-h-[900px] w-full h-screen mx-auto">
    {/* Left Side - Welcome Section (Image) */}
    <div
      className="relative flex items-center justify-center w-full lg:w-1/3 min-h-[40vh] lg:min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/signupp.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-white text-center px-6 sm:px-10">
        <h2 className="text-3xl font-bold">Welcome back</h2>
        <p className="mt-2">To keep connected with us provide us with your information</p>
        <Link to="/signin">
          <button className="mt-4 bg-white opacity-40 text-black px-4 py-2 rounded hover:bg-gray-200 transition">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  
    {/* Right Side - Sign Up Form */}
    <div className="flex flex-col justify-center items-center w-full lg:w-2/3 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          <Link to="/" className="text-black">
            Event <span className="text-primary">Hive</span>
          </Link>
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-6">
          Sign Up to Event Hive
        </h3>
  
        {/* Name Input */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">YOUR NAME</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border rounded mt-1"
          />
        </div>
  
        {/* Password Input */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">PASSWORD</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border rounded mt-1"
          />
        </div>
  
        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">CONFIRM PASSWORD</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border rounded mt-1"
          />
        </div>
  
        {/* Sign Up Button */}
        <button className="w-full bg-primary text-white p-2 rounded hover:bg-purple-600 transition">
          Sign Up
        </button>
  
        {/* Divider */}
        <div className="text-center my-4 text-gray-500">Or</div>
  
        {/* Google Sign Up Button */}
        <button className="w-full flex items-center justify-center border p-2 rounded hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
  
        {/* Already have an account? */}
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-purple-600 font-semibold">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default SignUp;
