import React from "react";
import "../styles/aimsStyle.css";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 footer">
          <p>Copyright @ 2001 - 2008, aims.org.af - All Rights Reserved</p>
          <p>
            <i className="far fa-envelope"></i> info@aims.org.af
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fas fa-phone"></i> +93700248827
          </p>
          <a href="about.html">Site Map</a> |
          <a href="afghanistan.html">Location</a> |
          <a href="about.html">Contact Us</a> |<a href="">Feedback</a> |
          <a href="">External Links</a>
        </div>
      </div>
    </div>
  );
}
