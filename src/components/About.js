import React from "react";
import MenuWithImage from "./MenuWithImage";
import SocialIcons from "./SocialIcons";

export default function About() {
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
              <MenuWithImage />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 left-side">
            <div id="about-box" className="col-md-12">
              <table>
                <tr>
                  <td style={{ width: "60%" }}>
                    <p id="p1">About AIMS</p>
                  </td>
                  <td style={{ width: "40%", paddingLeft: 50 }}>
                    <p id="p2">
                      <i className="far fa-envelope"></i> info@aims.org.af
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="fas fa-phone"></i> +93700248827
                    </p>
                  </td>
                </tr>
              </table>
            </div>
            <table>
              <tr>
                <td>
                  <p>
                    The AIMS project is building information management capacity
                    in government and delivers information management services
                    to organisations across Afghanistan. AIMS seeks to build
                    appropriate skills in government to manage information
                    management systems. AIMS seeks to exit from information
                    system activities once capability exists within government
                    to manage line activities with the specific information
                    systems concerned.
                  </p>
                </td>
                <td style={{ width: "30%" }}>
                  <img
                    id="undp-logo"
                    src="abt1.jpg"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </td>
              </tr>
            </table>
            <p>
              AIMS is firstly developing capacity in government to manage
              information systems, secondly, handing operational line activities
              to the relevant departments and thirdly developing and maintaining
              advanced technological expertise in Afghan staff. Through this
              approach AIMS seeks to develop a model for establishing different
              information management systems within appropriate government
              bodies. In so doing specialized expertise in these information
              management systems will be retained in Afghanistan to provide
              future services and advice to government and facilitate ministries
              to move up the experience curve. Using this approach AIMS will be
              instrumental in further developing the capability for Afghanistan
              to: improve efficiency, accountability and transparency in the
              civil service; increase alignment of external resources with
              national plans and priorities and improve the effectiveness and
              efficiency of reconstruction and development.
            </p>

            <div className="row">
              <div className="col-md-12">
                <h1 id="brows-services">Sub Sections</h1>
                <a href="about_monthly_update.html">
                  &#9830; AIMS Monthly Updates
                </a>
                <br />
                <p style={{ color: "gray" }}>[12 Documents 1 New ]</p>
                <a href="/">&#9830; AIMS Administeration</a>
                <br />
                <p style={{ color: "gray" }}>[145 Documents]</p>
                <p>
                  AIMS activities and services are conducted by the AIMS
                  Programme staff in Kabul and each of the five regional offices
                  in Kandahar, Mazar, Jalalabad, Kunduz and Herat.
                </p>
                <a href="/">&#9830; AIMS Project reports</a>
                <br />
                <p style={{ color: "gray" }}>[26 Documents]</p>
                <p>
                  AIMS is engaged in a wide variety of capacity building and
                  project activities. AIMS has reporting structures in place to
                  ensure timely and accurate updates of all activities. In
                  addition to simple progress reports the various teams are
                  encouraged to document creative solutions to problems
                  encountered, lessons learned, and suggestions for future
                  activities.
                </p>
                <a href="/">&#9830; Vacancy Announcements within AIMS</a>
                <br />
                <p style={{ color: "gray" }}>[66 Documents]</p>
                <h1 id="brows-services">Documents</h1>
                <a href="/">&#9830; AIMS Partners</a>[15.40 KB HTML]
                <p>(16 Oct 2008)</p>
                <a href="org_chart.pdf">&#9830; AIMS Organization Chart </a>
                [53.90 KB PDF]
                <p>(24 Sep 2008)</p>
                <a href="/">&#9830; Vision & Strategy </a>[5.80 KB Excel]
                <p>(01 Dec 2004)</p>
                <a href="map.pdf">&#9830; Office Location Map </a>[840.00 KB
                PDF]
                <p>(09 Sep 2008)</p>
                <a href="/">&#9830; History </a>[3.57 KB HTML]
                <p>(01 Dec 2004)</p>
                <a href="/">&#9830; Site Map </a>
              </div>
            </div>
            <a href="/" className="back_to_top">
              Back to top
            </a>
          </div>

          <div className="col-md-3 right-side">
            <div>
              <h1 id="brows-services">Site New Updates</h1>
              <a href="/">&#8226; AIMS Monthly Update for October 2008</a>
              <br />
              <a href="/">&#8226; AIMS Partners</a>
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
            <a href="/" style={{ float: "right" }}>
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
            <a href="/" style={{ float: "right" }}>
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
            <a href="/" style={{ float: "right" }}>
              more...
            </a>
            <br />
          </div>
        </div>
      </div>
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
            <a href="about.html">Contact Us</a> |<a href="/">Feedback</a> |
            <a href="/">External Links</a>
          </div>
        </div>
      </div>
      {/* <!--Side Bar Icons------------------------> */}
      <SocialIcons />
    </>
  );
}
