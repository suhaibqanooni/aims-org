import React from "react";
import "../styles/aimsStyle.css";
export default function MenuWithImage() {
  return (
    <nav className="navbar-expand-lg navbar navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" id="menu">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/maps">
              Maps
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/afghanistan">
              Afghanistan
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
