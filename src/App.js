import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Signup from "./Routes/Signup";
import Login from "./Routes/Login";
import DashBoard from "./Routes/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
