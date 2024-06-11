import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Message from "./dmvinfo";
import Main from "./main";
import Mainpart2 from "./mainpart2";
import Footer from "./footer";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="Components">
    <Navbar />
    <Message />
    <Main />
    <Mainpart2 />
    <Footer />
  </div>
);
