import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Lists from "./pages/Lists";
import Favorits from "./pages/Favorits";
import Login from "./pages/Login";
import Genres from "./pages/Genres";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/genres/:id" element={<Genres />} />
            <Route path="/favorits" element={<Favorits />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);
