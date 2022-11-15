import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from './components/Footer';


function App() {
  return (
    <>
      {/* contains routes for pages and paths */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
