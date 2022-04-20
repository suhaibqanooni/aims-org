import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";

export default function Afghanistan() {
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
              {/* <nav className="menuBar">
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
              </nav> */}
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 left-side">
            <p id="about-box">Afghanistan</p>
            <table>
              <tr>
                <td>
                  <p>
                    Afghanistan is a landlocked country of 647,500 sq.km. It is
                    bounded to the west by Iran, to the south and the east by
                    Pakistan and to the north by Turkmenistan, Uzbekistan and
                    Tajikistan. It also has small border with Peoples Republic
                    of China in the far north east. The geography of Afghanistan
                    is dominated by mountains. The Hindu Kush sweeps down from
                    the north east through the central regions of the country
                    and flattens out into the deserts of the southwest plateau.
                    On either side of these majestic mountains, to the north,
                    and to the east, the land is more fertile, and it is in
                    these areas that most agricultural activity takes place.
                  </p>
                </td>
                <td style={{ width: 300, height: 200 }}>
                  <img
                    id="undp-logo"
                    src="http://unosat-maps.web.cern.ch/unosat-maps/AF/Watershed_all_revised.jpg"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </td>
              </tr>
            </table>

            <div className="row">
              <div className="col-md-12">
                <h1 id="brows-services">Sub Sections</h1>
                <a href="afghanistan_district_profile.html">
                  &#9830; District Profiles
                </a>
                <br />
                <p style={{ color: "gray" }}>[216 Documents ]</p>
                <p>
                  District Profiles contain a wide range of information
                  concerning population and the general situation in the
                  districts.
                </p>
                <a href="afghanistan_weather.html">&#9830; Weather</a>
                <br />
                <p style={{ color: "gray" }}>[6 Documents]</p>
                <p>
                  At an altitude of 1300 – 2400 m above sea level the climate is
                  temperate or almost temperate, four seasons are clearly
                  marked, and annual precipitation is up to 400 mm.
                </p>
                <h1 id="brows-services">Documents</h1>
                <a href="afghanistan_overview.html">&#9830; Overview</a>
                <br />
                <br />
                <a href="calander.pdf">
                  &#9830; AIMS Afghanistan Year 1387 (08 - 09) Poster Calendar{" "}
                </a>
                [579.00 KB PDF]
                <p>(08 Apr 2008)</p>
                <a href="calander1.pdf">
                  &#9830; AIMS Afghanistan Year 1387 (08 - 09) Calendar{" "}
                </a>
                [864.00 KB PDF]
                <p>(01 Jan 2008)</p>
                <a href="calander2.pdf">
                  &#9830; AIMS Afghanistan Year 1386 (07 - 08) Calendar{" "}
                </a>
                [701.00 KB PDF]
                <p>(18 Apr 2007)</p>
                <a href="calander3.pdf">
                  &#9830; AIMS Afghanistan Year 1385 (06 - 07) Calendar{" "}
                </a>
                [1.16 MB PDF]
                <p>(02 May 2006)</p>
                <a href="calander4.pdf">
                  &#9830; AIMS Afghanistan Year 1384 (05 - 06) Calendar{" "}
                </a>
                [958.00 KB PDF]
                <p>(17 Mar 2005)</p>
              </div>
            </div>
            <a href="/home" className="back_to_top">
              Back to top
            </a>
          </div>

          <div className="col-md-3 right-side">
            <div>
              <h1 id="brows-services">Site New Updates</h1>
              <a href="/home">&#8226; AIMS Monthly Update for October 2008</a>
              <br />
              <a href="/home">&#8226; AIMS Partners</a>
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
            <a href="/home" style={{ float: "right" }}>
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
            <a href="/home" style={{ float: "right" }}>
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
            <a href="/home" style={{ float: "right" }}>
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
