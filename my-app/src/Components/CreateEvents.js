import React from "react";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="w-full flex justify-between items-center max-w-6xl p-4">
        <Link to="/" className="text-2xl font-bold">
          Event <span className="text-purple-600">Hive</span>
        </Link>
        <div className="space-x-4">
          <button className="text-gray-600">Login</button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Signup
          </button>
        </div>
      </header>

      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Event</h2>

        <div className="space-y-4">
          <label className="block font-semibold">Event Title</label>
          <input type="text" placeholder="Enter event title" className="w-full p-3 border rounded-md" />
          
          <label className="block font-semibold">Event Venue</label>
          <input type="text" placeholder="Enter event venue" className="w-full p-3 border rounded-md" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Start Time</label>
              <input type="text" placeholder="Enter start time" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block font-semibold">End Time</label>
              <input type="text" placeholder="Enter end time" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block font-semibold">Start Date</label>
              <input type="text" placeholder="Enter start date" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block font-semibold">End Date</label>
              <input type="text" placeholder="Enter end date" className="w-full p-3 border rounded-md" />
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4 text-center">Event Description</h2>
        <div className="space-y-4">
          <label className="block font-semibold">Event Image</label>
          <div className="w-full h-40 bg-gray-200 border rounded-md"></div>
          
          <label className="block font-semibold">Event Description</label>
          <textarea placeholder="Type here..." className="w-full p-3 border rounded-md h-24"></textarea>
        </div>

        <button className="w-full mt-6 p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Create event
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
