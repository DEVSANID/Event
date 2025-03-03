import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="grid grid-cols-3 h-screen">
      {/* Left Side - Welcome Section */}
      <div className="relative bg-cover bg-center flex items-center justify-center col-span-1">
        <img
          src="/signupp.png"
          alt="Signup"
          className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-6 text-center">
          <h2 className="text-3xl font-bold">Welcome back</h2>
          <p className="mt-2">To keep connected with us provide us with your information</p>
          <Link to="/signin">
            <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition ">Sign In</button>
          </Link>
        </div>
      </div>
      
      {/* Right Side - Sign Up Form */}
      <div className="col-span-2 flex items-center justify-center bg-white">
        <div className="w-96 p-6 bg-white rounded-lg ">
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
          <button className="w-full bg-primary text-white p-2 rounded hover:bg-purple-600 transition">Sign Up</button>
          
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
            <Link to="/signin" className="text-purple-600 font-semibold">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
