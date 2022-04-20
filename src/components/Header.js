import React from "react";
import headerImage from "../assets/photos/header.PNG";
import "../styles/aimsStyle.css";

export default function Header() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 starter">
            <img src={headerImage} alt="" />
          </div>
        </div>
      </div>
      <div id="header">
        <div className="container ">
          <div className="row">
            <div className="col-md-2">
              <a href="AIMS.html" style={{ textDecoration: "none" }}>
                <h1 id="logo">AIMS</h1>
              </a>
            </div>
            <div className="col-md-4">
              <p
                style={{
                  color: "skyblue",
                  marginTop: 25,
                  marginLeft: 0,
                  fontSize: 18,
                }}
              >
                Building Information Management Capacity
              </p>
            </div>
            <div className="col-md-12">
              <nav className="menuBar" style={{ marginTop: -50 }}>
                <ul id="menu" className="">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  |
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  |
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  |
                  <li>
                    <a href="/maps">Maps</a>
                  </li>
                  |
                  <li>
                    <a href="/afghanistan">Afghanistan</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
