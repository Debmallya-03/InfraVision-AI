import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/Home/HomePage";
import Navbar from "./landing_page/Navbar";
import ManPage from "./landing_page/Solution/ManMade/ManPage"; // ✅ Import ManPage
import Scanning from "./landing_page/Solution/ManMade/scanning_page/scanning";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/landing_page/Solution/ManMade/ManPage" element={<ManPage />} />
      <Route path="/landing_page/Solution/ManMade/scanning_page/scanning" element={<Scanning />} /> {/* ✅ Fixed Route */}
    </Routes>
  </BrowserRouter>
);
