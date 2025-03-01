import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react"
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage'; // Import the HomePage component
import Signup from './Components/Signup'; // Import the Signup component
import Signin from './Components/Signin'; // Import the Signin component
import Events from './Components/Events'; // Import the Signin component
import CreateEvents from './Components/CreateEvents'; // Import the CreateEvent component

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/CreateEvents" element={<CreateEvents />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();