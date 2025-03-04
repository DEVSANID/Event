import React, { useState, useEffect } from "react";
import { FaSearch, FaRegCircle, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaEllipsisH, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";



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
      <header className="w-full max-w-[1200px] h-auto min-h-[49px] mx-auto flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-white mt-4 sm:mt-6">

        <Link to="/" className="text-2xl sm:text-[40px] font-sans font-bold mb-3 sm:mb-0">
          Event <span className="text-primary">Hive</span>
        </Link>

        <div>
          <button onClick={() => window.location.href = '/signin'} className="mr-2 sm:text-[16px] sm:mr-4 font-sans text-black px-4 sm:px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Login </button>
          <button onClick={() => window.location.href = '/signup'} className="bg-primary sm:text-[16px] font-sans text-white px-4 sm:px-6 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-200">Signup</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto bg-cover bg-center flex items-center justify-center text-white rounded-lg md:rounded-2xl mt-4 md:mt-6 h-[300px] md:h-[400px] lg:h-[596px]"
        style={{ backgroundImage: "url('/Banner.png')" }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-[64px] font-sans font-bold text-white text-center leading-tight md:leading-[60px] px-4">
          MADE FOR THOSE <br />WHO DO
        </h1>
      </section>

      {/* Event Search Bar */}
      <div className="w-full flex justify-center px-4">
      <div className="bg-navyBlue w-full max-w-[1200px] h-auto py-6 px-4 sm:px-6 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 rounded-2xl relative -top-8 sm:-top-12 md:-top-16 mx-auto shadow-lg text-white">
        {/* Looking For */}
        <div className="flex flex-col w-full sm:w-[290px]">
          <label className="mb-2 text-sm font-medium">Looking for</label>
          <select className="p-2 rounded-md bg-backgroundGrey text-black w-full h-[40px]">
            <option>Choose event type</option>
          </select>
        </div>

        {/* Location */}
        <div className="flex flex-col w-full sm:w-[290px]">
          <label className="mb-2 text-sm font-medium">Location</label>
          <select className="p-2 rounded-md bg-backgroundGrey text-black w-full h-[40px]">
            <option>Choose location</option>
          </select>
        </div>

        {/* When */}
        <div className="flex flex-col w-full sm:w-[290px]">
          <label className="mb-2 text-sm font-medium">When</label>
          <select className="p-2 rounded-md bg-backgroundGrey text-black w-full h-[40px]">
            <option>Choose date and time</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="w-full flex justify-center sm:w-auto">
          <button className="bg-primary p-4 rounded-lg text-white flex items-center justify-center w-[70px] h-[70px] mt-4 sm:mt-3 mx-6">
            <FaSearch size={20} />
          </button>
        </div>
      </div>
    </div>

      {/* Upcoming Events Section */}
      <section className="w-full bg-white py-10 px-4 sm:px-6">
        {/* Section Title */}
        <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-inter font-bold">
            Upcoming <span className="text-primary">Events</span>
          </h2>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <select className="px-3 sm:px-4 py-2 bg-backgroundGrey rounded-md text-sm">
              <option>Weekdays</option>
            </select>
            <select className="px-3 sm:px-4 py-2 bg-backgroundGrey rounded-md text-sm">
              <option>Event type</option>
            </select>
            <select className="px-3 sm:px-4 py-2 bg-backgroundGrey rounded-md text-sm">
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
        <div className="max-w-6xl mx-auto mt-8 flex justify-center">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-md">
            Load more...
          </button>
        </div>
      </section>

      {/* Create Your Event Section */}
      <div className="relative bg-navyBlue text-white p-6 sm:p-7 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between my-8 mx-4 sm:mx-auto max-w-6xl">
  {/* Image (Fully Responsive) */}
  <div className="w-full sm:w-1/2 flex justify-center sm:justify-start relative">
    <img
      src="/Logo.png"
      alt="Event Illustration"
      className="w-[180px] xs:w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-auto sm:absolute sm:-top-[130px] sm:left-10"
    />
  </div>

  {/* Text Content */}
  <div className="w-full sm:w-1/2 text-center sm:text-left sm:pl-10 mt-4 sm:mt-0">
    <h2 className="text-xl xs:text-2xl sm:text-3xl font-sans font-bold -mx-[60px]  ">Make your own Event</h2>
    <p className="mt-2 text-sm xs:text-base sm:text-lg text-gray-300 -mx-[60px]">
      Create and manage your own events easily
    </p>
    <button
      onClick={() => window.location.href = '/CreateEvents'}
      className="mt-4 bg-primary hover:bg-primary text-white font-semibold py-2 px-4 xs:px-5 sm:px-6  rounded-lg -mx-[60px]"
    >
      Create Events
    </button>
  </div>
</div>




      {/* Brand Logos Section */}
      <section className="p-6 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-[36px] font-bold">
          Join these <span className="text-primary">brands</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-lg">
          <img src="/Google.png" alt="Google" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Spotify.png" alt="Spotify" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Microsoft.png" alt="Microsoft" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Uber.png" alt="Uber" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Zoom.png" alt="Zoom" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
          <img src="/Stripe.png" alt="Stripe" className="h-8 sm:h-12 max-w-[80px] sm:max-w-[100px] object-contain" />
        </div>
      </section>

      {/* Trending Colleges Section */}
      <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6">
        {/* Section Title */}
        <div className="max-w-6xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-[36px] font-sans font-bold">
            Trending <span className="text-purple-500">colleges</span>
          </h2>
        </div>

        {/* College Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Harvard University */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/harvard.jpeg" alt="Harvard University" className="w-full h-48 sm:h-56 object-cover" />
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
              <img src="/stanford.jpeg" alt="Stanford University" className="w-full h-48 sm:h-56 object-cover" />
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
              <img src="/nanyang.jpeg" alt="Nanyang University" className="w-full h-48 sm:h-56 object-cover" />
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
      <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6">
        {/* Section Title */}
        <div className="max-w-6xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-[36px] font-sans font-bold">
            Our <span className="text-primary">Blogs</span>
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/book.jpeg"
                alt="Blog 1"
                className="w-full h-48 sm:h-56 object-cover"
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
                className="w-full h-48 sm:h-56 object-cover"
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
                className="w-full h-48 sm:h-56 object-cover"
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
      <footer className="bg-blue-900 text-white py-8 px-4 md:px-16 ">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-[40px] font-sans font-bold mb-4">
      Event <span className="text-purple-400">Hive</span>
    </h2>
    <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
      <input
        type="email"
        placeholder="Enter your mail"
        className="px-4 py-2 rounded-md text-black w-full sm:w-64 md:w-80 max-w-xs sm:max-w-none"
      />
      <button className="bg-purple-500 px-6 py-2 rounded-md text-white font-semibold w-full sm:w-auto max-w-xs md:ml-2">
        Subscribe
      </button>
    </div>
    <nav className="mt-6">
      <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm">
        <li className="cursor-pointer hover:text-purple-300">Home</li>
        <li className="cursor-pointer hover:text-purple-300">About</li>
        <li className="cursor-pointer hover:text-purple-300">Services</li>
        <li className="cursor-pointer hover:text-purple-300">Get in touch</li>
        <li className="cursor-pointer hover:text-purple-300">FAQs</li>
      </ul>
    </nav>
    <hr className="border-white/full my-3" />
    <div className="flex flex-col md:flex-row items-center justify-between text-sm">
      
      <div className="flex gap-4 mt-4 md:mt-0">
        <FaLinkedin className="text-xl cursor-pointer hover:text-purple-300" />
        <FaInstagram className="text-xl cursor-pointer hover:text-purple-300" />
        <FaRegCircle className="text-xl cursor-pointer hover:text-purple-300" />
      </div>
      <p className="mt-4 md:mt-0 text-xs">Non Copyrighted © 2023 Upload by EventHive</p>
    </div>
  </div>
  <div className="flex gap-2 md:gap-4">
        <button className="bg-purple-500 px-3 py-1 rounded-md text-white text-xs">English</button>
        <span className="cursor-pointer hover:text-purple-300">French</span>
        <span className="cursor-pointer hover:text-purple-300">Hindi</span>
      </div>
</footer>

    </div>
  );
};

export default HomePage;