import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/Home/HomePage";
import Navbar from "./landing_page/Navbar";
import ManPage from "./landing_page/Solution/ManMade/ManPage"; // ✅ Import ManPage
import Scanning from "./landing_page/Solution/ManMade/scanning_page/scanning";
import ContactUs from "./landing_page/contact";
import About from "./landing_page/about";
import Aibot from './landing_page/Aibot';
import SignIn from './landing_page/SignIn';
import SignUp from "./landing_page/SignUp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/landing_page/SignIn" element={<SignIn />} />
  <Route path="/landing_page/SignUp" element={<SignUp />} />
  </Routes>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/landing_page/Solution/ManMade/ManPage" element={<ManPage />} />
      <Route path="/landing_page/Solution/ManMade/scanning_page/scanning" element={<Scanning />} /> {/* ✅ Fixed Route */}
      <Route path="/landing_page/contact.js" element={<ContactUs/>} />
      <Route path="/landing_page/about.js" element={<About/>} />
      
    </Routes>
    <Aibot />
  </BrowserRouter>
);