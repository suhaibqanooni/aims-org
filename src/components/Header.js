import React from "react";
import headerImage from "../assets/photos/header.PNG";
import "../styles/aimsStyle.css";
import MenuWithImage from "./MenuWithImage";

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
              {/* <Navbar /> */}
              <MenuWithImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
