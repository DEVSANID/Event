import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left Section - 2/3 Width */}
      <div className="flex flex-col justify-center items-center w-full lg:w-2/3 px-6 sm:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center">
  <Link to="/" >
    Event <span className="text-primary">Hive</span>
  </Link>
</h1>
          <h2 className="text-xl font-semibold mb-6 text-center">
            Sign In to Event Hive
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <a href="/" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <button className="w-full bg-primary text-white p-3 rounded-md hover:bg-purple-600 transition">
              Sign In
            </button>

            <div className="text-center text-gray-500">Or</div>

            <button className="w-full flex items-center justify-center border p-3 rounded-md hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>

      {/* Right Section - 1/3 Width */}
      <div
        className="flex flex-col justify-center items-center w-full lg:w-1/3 min-h-[40vh] lg:min-h-screen bg-center bg-cover relative"
        style={{ backgroundImage: "url('/Sign.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-6 sm:px-10">
          <h2 className="text-2xl font-bold">Hello Friend</h2>
          <p className="mt-2 text-sm sm:text-base">
            To stay connected with us, sign up with your personal details
          </p>
          <button
            className="mt-4 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
