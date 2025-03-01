import React from "react";

const SignIn = () => {
  return (
    <div className="flex h-screen justify-center items-center relative rounded-r-3xl bg-backgroundGrey">
      {/* Left Side - Form */}
      <div className="absolute w-[578px] h-[708px] left-[131px] top-[96px] flex flex-col justify-center items-center  bg-white p-10  ">
        <h1 className="text-3xl font-bold mb-2">
          Event <span className="text-purple-600">Hive</span>
        </h1>
        <h2 className="text-xl font-semibold mb-6">Sign In to Event Hive</h2>

        <div className="w-full max-w-md">
          <label className="block text-sm font-medium">YOUR EMAIL</label>
          <input
            type="email"
            placeholder="Enter your mail"
            className="w-full p-3 border rounded-lg mt-1 mb-4"
          />

          <label className="text-sm font-medium flex justify-between">
            PASSWORD
            <span className="text-gray-600 cursor-pointer text-sm">
              Forgot your password?
            </span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg mt-1 mb-6"
          />

          <button className="w-full bg-purple-600 text-white p-3 rounded-lg mb-4">
            Sign In
          </button>

          <div className="text-center text-sm mb-4">Or</div>

          <button className="w-full flex justify-center items-center gap-2 border p-3 rounded-lg">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>
        </div>
      </div>

      {/* Right Side - Image and CTA */}
      <div className="absolute w-[600px] h-[900px] left-[840px] top-0 flex items-center justify-center bg-cover bg-center rounded-r-3xl" style={{ backgroundImage: "url('/Sign.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Hello Friend</h2>
          <p className="text-sm mb-4">To keep connected with us provide us with your information</p>
          <button onClick={() => window.location.href='/signup'} className="bg-white text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;