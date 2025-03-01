import React, { useState, useEffect } from "react";
import { FaSearch, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaEllipsisH, FaStar } from "react-icons/fa";


const HomePage = () => {
  // State to store fetched events
  const [events, setEvents] = useState([]);
  // State to store fetched blogs
  const [, setBlogs] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch events
    setEvents([
  { id: 1, title: "Tech Conference 2025", image: "/conf.jpg" },
  { id: 2, title: "Music Festival", image: "/music.jpg" },
  { id: 3, title: "Startup Meetup", image: "/start.jpeg" },
  { id: 4, title: "Art Exhibition", image: "/art.jpeg" },
  { id: 5, title: "Business Summit", image: "/summit.jpeg" },
  { id: 6, title: "Gaming Convention", image: "/gaming.jpeg" },
    ]);

    // Simulate API call to fetch blogs
    setBlogs([
      { id: 1, title: "How to Organize an Event" },
      { id: 2, title: "Top 10 Event Planning Tips" },
      { id: 3, title: "Why Networking Events Matter" }
    ]);
  }, []);

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="w-[1200px] h-[49px] mx-auto flex justify-between items-center p-6 bg-white mt-6">
        <h1 className=" text-3xl font-bold">
          Event <span className="text-primary">Hive</span></h1>
        <div>
          <button onClick={() => window.location.href='/signin'} className="mr-4 text-black px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Login </button>
          <button onClick={() => window.location.href='/signup'} className="bg-primary text-white px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Signup</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className=" w-[1320px] h-[596px] mx-auto bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold rounded-2xl mt-6" 
      style={{ backgroundImage: "url('/Banner.png')" }}
      >
        <h1 className="w-[560px] h-[156px] absolute text-[50px] font-bold text-white text-center leading-[60px]" style={{ top: "229px", left: "440px" }}>
           MADE FOR THOSE <br />WHO DO 
        </h1>
      </section>

      {/* Event Search Bar */}
      <div className="bg-navyBlue w-[1200px] h-[144px] p-6 flex justify-center gap-6 rounded-2xl relative -top-16 mx-auto shadow-lg text-white">
  {/* Looking For */}
  <div className="flex flex-col ">
    <label className="mb-2 text-sm font-medium relative top-4">Looking for</label>
    <select className="p-2 rounded-md bg-backgroundGrey text-black w-[290px] h-[40px]  relative top-5">
      <option>Choose event type</option>
    </select>
  </div>

  {/* Location */}
  <div className="flex flex-col">
    <label className="mb-2 text-sm font-medium relative top-4">Location</label>
    <select className="p-2 rounded-md bg-backgroundGrey text-black w-[290px] h-[40px]  relative top-5">
      <option className="font-small text-navy">Choose location</option>
    </select>
  </div>

  {/* When */}
  <div className="flex flex-col">
    <label className="mb-2 text-sm font-medium relative top-4">When</label>
    <select className="p-2 rounded-md bg-backgroundGrey text-black w-[290px] h-[40px]  relative top-5">
      <option>Choose date and time</option>
    </select>
  </div>

  {/* Search Button */}
  <button className="bg-primary p-4 rounded-lg text-white flex items-center justify-center w-[70px] h-[70px] mt-6">
    <FaSearch size={20} />
  </button>
</div>

      {/* Upcoming Events Section */}
      <section className="w-full bg-backgroundGrey py-10 px-6">
        {/* Section Title */}
        <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            Upcoming <span className="text-primary">Events</span>
          </h2>

          {/* Filter Dropdowns */}
          <div className="flex space-x-4">
            <select className="px-4 py-2 bg-backgroundGrey rounded-md">
              <option>Weekdays</option>
            </select>
            <select className="px-4 py-2 bg-backgroundGrey rounded-md">
              <option>Event type</option>
            </select>
            <select className="px-4 py-2 bg-backgroundGrey rounded-md">
              <option>Any category</option>
            </select>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden">
            
              {/* Event Image */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                 <p className="text-sm text-purple-500 mt-1 mx-4">
                Saturday, March 18, 9:30PM
              </p>
              <p className="text-xs text-gray-500 mt-1 mx-4">
                ONLINE EVENT - Attend anywhere
              </p>
                {/* Free Badge */}
                <span className="absolute top-2 left-2 bg-white text-primary text-xs font-xs px-2 py-1 rounded-md">
                  FREE
                </span>
              </div>

              {/* Event Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-primary mt-1">{event.date}</p>
                <p className="text-xs text-gray-500 mt-1">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      

      {/* Create Your Event Section */}
      <div className="relative bg-navyBlue text-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
  {/* Image positioned on top and allowed to overflow */}
  <div className="absolute -top-9 left-[100px] w-[300px] md:w-[400px]">
    <img
      src="/Logo.png"
      alt="Event Illustration"
      className="w-full h-auto rounded-lg"
    />
  </div>

  {/* Text content */}
  <div className="w-1/2 pl-10">
    <h2 className="text-3xl mx-[125px] font-bold">Make your own Event</h2>
    <p className="mt-2 mx-[125px] text-lg text-gray-300">
      Create and manage your own events easily
    </p>
    <button className="mt-4 mx-[125px] bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg">
      Create Events
    </button>
  </div>
</div>

      {/* Brand Logos Section */}
      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold">
          Join these <span className="text-indigo-600">brands</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-lg">
          <img src="/Google.png" alt="Google" className="h-12 max-w-[100px] object-contain" />
          <img src="/Spotify.png" alt="Spotify" className="h-12 max-w-[100px] object-contain" />
          <img src="/Microsoft.png" alt="Microsoft" className="h-12 max-w-[100px] object-contain" />
          <img src="/Uber.png" alt="Uber" className="h-12 max-w-[100px] object-contain" />
          <img src="/Zoom.png" alt="Zoom" className="h-12 max-w-[100px] object-contain" />
          <img src="/Stripe.png" alt="Stripe" className="h-12 max-w-[100px] object-contain" />
        </div>
      </section>

      {/* Trending Colleges Section */}
      <section className="w-full bg-white py-10 px-6">
        {/* Section Title */}
        <div className="max-w-6xl mx-auto mb-6">
          <h2 className="text-3xl font-bold">
            Trending <span className="text-purple-500">colleges</span>
          </h2>
        </div>

        {/* College Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Harvard University */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/harvard.jpeg" alt="Harvard University" className="w-full h-56 object-cover" />
              <span className="absolute top-2 left-2 flex items-center bg-white text-black text-xs font-bold px-2 py-1 rounded-md">
                <FaStar className="text-yellow-500 mr-1" /> 4.8
              </span>
              <span className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-md">
                EXCLUSIVE
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Harvard University</h3>
              <p className="text-sm text-gray-500 mt-1">Cambridge, Massachusetts, UK</p>
              <div className="mt-3 flex justify-end">
                <FaEllipsisH className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Stanford University */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/stanford.jpeg" alt="Stanford University" className="w-full h-56 object-cover" />
              <span className="absolute top-2 left-2 flex items-center bg-white text-black text-xs font-bold px-2 py-1 rounded-md">
                <FaStar className="text-yellow-500 mr-1" /> 4.8
              </span>
              <span className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-md">
                EXCLUSIVE
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Stanford University</h3>
              <p className="text-sm text-gray-500 mt-1">Stanford, California</p>
              <div className="mt-3 flex justify-end">
                <FaEllipsisH className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Nanyang University */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/nanyang.jpeg" alt="Nanyang University" className="w-full h-56 object-cover" />
              <span className="absolute top-2 left-2 flex items-center bg-white text-black text-xs font-bold px-2 py-1 rounded-md">
                <FaStar className="text-yellow-500 mr-1" /> 4.8
              </span>
              <span className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-md">
                EXCLUSIVE
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Nanyang University</h3>
              <p className="text-sm text-gray-500 mt-1">Nanyang Ave, Singapura</p>
              <div className="mt-3 flex justify-end">
                <FaEllipsisH className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="max-w-6xl mx-auto mt-8 flex justify-center">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-md">
            Load more...
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full bg-white py-10 px-6">
        {/* Section Title */}
        <div className="max-w-6xl mx-auto mb-6">
          <h2 className="text-3xl font-bold">

            Our <span className="text-primary">Blogs</span>
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/book.jpeg"
                alt="Blog 1"
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-md">
                FREE
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow
              </h3>
              <p className="text-sm text-purple-500 mt-1">
                Saturday, March 18, 9:30PM
              </p>
              <p className="text-xs text-gray-500 mt-1">
                ONLINE EVENT - Attend anywhere
              </p>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/book2.jpeg"
                alt="Blog 2"
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-md">
                FREE
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow
              </h3>
              <p className="text-sm text-purple-500 mt-1">
                Saturday, March 18, 9:30PM
              </p>
              <p className="text-xs text-gray-500 mt-1">
                ONLINE EVENT - Attend anywhere
              </p>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/book3.jpeg"
                alt="Blog 3"
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-md">
                FREE
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow
              </h3>
              <p className="text-sm text-purple-500 mt-1">
                Saturday, March 18, 9:30PM
              </p>
              <p className="text-xs text-gray-500 mt-1">
                ONLINE EVENT - Attend anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-navyBlue text-white p-12 text-center">
        <h2 className="text-3xl font-bold">Event <span className="text-primary">Hive</span></h2>
        <div className="mt-4">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-md w-full max-w-md" />
          <button className="bg-primary text-white px-6 py-2 rounded-lg ml-4">Subscribe</button>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <FaFacebook className="text-white text-2xl cursor-pointer" />
          <FaInstagram className="text-white text-2xl cursor-pointer" />
        </div>
        <p className="mt-6 text-gray-400">Non-Copyrighted © 2023 Uploaded by Event Hive</p>
      </footer>
    </div>
  );
};

export default HomePage;
