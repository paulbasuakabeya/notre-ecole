import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navBar";
import AddThing from "./pages/addThing";
import EditThing from "./pages/editThing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-thing" element={<AddThing />} />
        <Route path="/edit-thing/:id" element={<EditThing />} />
      </Routes>
    </Router>
  );
};

export default App;
