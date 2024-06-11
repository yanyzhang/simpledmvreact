import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Message from "./dmvinfo";
import Main from "./main";
import Mainpart2 from "./mainpart2";
import Footer from "./footer";
import "./style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Message />
      <Main />
      <Mainpart2 />
      <Footer />
    </Router>
  );
}

export default App;
