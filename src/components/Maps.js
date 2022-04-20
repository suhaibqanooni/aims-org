import React from "react";
import Footer from "./Footer";
import SocialIcons from "./SocialIcons";

export default function Maps() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 starter">
            <img src="header.PNG" alt="" />
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
            <div className="col-md-6">
              <nav className="menuBar">
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
      <div className="container">
        <div className="row">
          <div className="col-md-9 left-side">
            <p id="about-box">Maps</p>
            <table>
              <tr>
                <td>
                  <p>
                    Most AIMS maps are based on sources such as the United State
                    Defense Mapping Agency 1958 1:100,000, Soviet 1990 1:50,000,
                    recent satellite imagery of varying resolutions or current
                    survey data provided by different organizations. Additional
                    layers may be created by using GPS data, surveys and
                    assessments, client specific data or remotely sensed
                    information. All maps are checked in-house for errors, and
                    printed and distributed through our customer service
                    section.
                  </p>
                </td>
                <td style={{ width: "25%" }}>
                  <img
                    id="undp-logo"
                    src="map_pic.gif"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </td>
              </tr>
            </table>
            <br />
            <div className="row">
              <div className="col-md-12">
                <h1 id="brows-services">Sub Sections</h1>

                <a href="">&#9830; Standard Maps</a>
                <br />
                <p style={{ color: "gray" }}>[564 Documents ]</p>
                <p>
                  Standard maps are maps distributed by AIMS for the general
                  public. Although they have a variety of uses they are not
                  intended for any specific purpose or client. Standard maps
                  typically represent physical features and/or administrative
                  boundaries.
                </p>

                <a href="">&#9830; Regional Maps</a>
                <br />
                <p style={{ color: "gray" }}>[1 Documents]</p>
                <p>
                  AIMS has six Regional Offices in Central, Western, Northern,
                  North Eastern, Eastern and Southern regions of Afghanistan.
                </p>

                <a href="">&#9830 Custom Maps</a>
                <br />
                <p style={{ color: "gray" }}>[1 Documents]</p>
                <p>
                  Most of the AIMS custom maps are produced for clients from
                  different organizations for a specific purpose.
                </p>

                <a href="">&#9830 External Resources' Maps</a>
                <br />
                <p style={{ color: "gray" }}>[1 Documents]</p>
                <p>
                  AIMS is in contact with various UN organizations, where they
                  provide us their products for publicizing through the AIMS
                  website.
                </p>
              </div>
            </div>
            <a href="#" className="back_to_top">
              Back to top
            </a>
          </div>

          <div className="col-md-3 right-side">
            <div>
              <h1 style={{ color: "peru", fontSize: 18 }}>Site New Updates</h1>
              <a href="">&#8226; AIMS Monthly Update for October 2008</a>
              <br />
              <a href="">&#8226; AIMS Partners</a>
            </div>
            <hr id="lines" />
            <img
              src="https://geospatial.blogs.com/.a/6a00d83476d35153ef0115720d7280970b-800wi"
              id="map-img"
              alt=""
            />
            GeoBase is a mission critical system, which is developed and
            Maintained by AIMS. The objective of the GeoBase is to establish an
            activity tracking database or management information system ...
            <br />
            <a href="#" style={{ float: "right" }}>
              more...
            </a>
            <br />
            <hr id="lines" />
            <img
              src="http://www.gisuser.com/gisusertoday/images/GIS-UserLogo-Retx3.png"
              id="map-img"
              alt=""
            />
            GIS Users Community (GUC) in Afghanistan consists of a group of
            people who focus more on GIS related matters. The GUC is formed to
            promote data discovering, sharing, standards, dissemination and
            exchange of GIS related ideas and suggestions
            <br />
            <a href="#" style={{ float: "right" }}>
              more...
            </a>
            <br />
            <hr id="lines" />
            <h1 id="parters">AIMS Partners</h1>
            As AIMS gains more momentum and moves towards becoming a sustainable
            organization, working with multiple partners both in the government
            and that of the international community becomes inevitable. AIMS has
            been able to establish its partnership with numerous....
            <br />
            <a href="#" style={{ float: "right" }}>
              more...
            </a>
            <br />
          </div>
        </div>
      </div>
      <Footer />
      {/* <!--Side Bar Icons------------------------> */}
      <SocialIcons />
    </>
  );
}
