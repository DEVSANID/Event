import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function EventDetails() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <div className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">
          Event <span className="text-purple-500">Hive</span>
        </h1>
        <div className="space-x-4">
          <button className="text-gray-700">Login</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
            Signup
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative w-full max-w-[1320px] h-[595px] mx-auto mt-[50px] bg-cover bg-center flex items-center rounded-md text-white px-6"
        style={{ backgroundImage: "url('/allevents.png')" }}
      >
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <button className="bg-purple-500 px-4 py-2 rounded-lg">Back</button>
        </div>

        {/* Event Details */}
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold leading-tight">
            Dream world wide <br /> in Jakarta
          </h2>
          <p className="text-lg mt-2 font-semibold">IIT Sonepat</p>
          <p className="mt-4 text-white">
            DesignHub organized a 3D Modeling Workshop using Blender on 16th
            February at 5 PM. The workshop taught participants the magic of
            creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement.
          </p>
          <button className="mt-4 underline flex items-center">
            <FaMapMarkerAlt className="mr-2" /> View map
          </button>
        </div>

        {/* Event Sidebar (Date, Booking, etc.) */}
        <div className="absolute top-16 right-8 bg-white text-black p-6 rounded-lg shadow-lg w-80">
          <p className="text-sm font-semibold">Date & time</p>
          <p className="font-bold text-lg">Saturday, March 18, 2023, 9:30 PM</p>
          <button className="text-blue-500 mt-2 underline">Add to calendar</button>
          <button className="bg-purple-500 text-white w-full mt-4 py-2 rounded-lg">
            Book now
          </button>
          <button className="bg-gray-300 w-full mt-2 py-2 rounded-lg">
            Program promoter
          </button>
          <p className="text-sm text-center mt-2">No Refunds</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="container mx-auto px-4 p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-gray-700 mb-4">DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.

            DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>

          <h3 className="text-xl font-semibold mb-2">Hours</h3>
          <p className="text-gray-700"><span className="font-bold">Weekdays:</span> 7PM - 10PM</p>
          <p className="text-gray-700"><span className="font-bold">Sunday:</span> 7PM - 10PM</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold mb-2">Date & Time</h3>
          <p>Saturday, March 18 2023, 9:30PM</p>
          <button className="bg-purple-600 text-white w-full mt-4 py-2 rounded">Book Now</button>
        </div>
      </div>

      {/* Related Events */}
      <div className="container mx-auto px-4 p-6">
        <h3 className="text-xl font-semibold mb-4">Other events you may like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className="bg-white p-4 shadow rounded">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/event.png')" }}></div>
              <h4 className="text-lg font-semibold mt-2">BestSeller Book Bootcamp</h4>
              <p className="text-gray-600">Saturday, March 18, 9:30PM</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navyBlue text-white py-10">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="w-full pt-6">
            <h3 className="text-lg font-semibold">Event Hive</h3>
            <div className="mt-2 flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded text-black w-full sm:w-64 border border-gray-300 placeholder-gray-500"
              />
              <button className="bg-purple-600 text-white mt-2 sm:mt-0 sm:ml-2 py-2 px-4 rounded hover:bg-purple-700 transition">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-4 pb-6">
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
            <a href="/" className="text-gray-300 hover:text-white">About</a>
            <a href="/" className="text-gray-300 hover:text-white">Services</a>
            <a href="/" className="text-gray-300 hover:text-white">Get in Touch</a>
            <a href="/" className="text-gray-300 hover:text-white">FAQs</a>
          </div>
          <div className="w-full border-t border-gray-400 mt-6"></div>
        </div>
        <div className="text-center text-gray-400 mt-6 px-4">
          © 2023 Event Hive | Powered by Rich Technologies
        </div>
      </footer>
    </div>
  );
}
