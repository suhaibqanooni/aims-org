import React from "react";
import "../styles/aimsStyle.css";

import Footer from "./Footer";
import SocialIcons from "./SocialIcons";
import MenuWithImage from "./MenuWithImage";
import Marquee from "react-fast-marquee";
export default function Home() {
  // const [isOpen, setIsOpen] = useState(false);
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
              {/* <Navbar /> */}
              <MenuWithImage />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 left-side">
            <Marquee
              className="scroll_news"
              pauseOnHover
              style={{ width: "100%", marginTop: 5 }}
            >
              <a href="/">AIMS office location map</a> &nbsp; | &nbsp;
              <a href="/">Job Vicancies</a> &nbsp; | &nbsp;
              <a href="/">GeoBase</a> &nbsp; | &nbsp;
              <a href="/">Training Services</a> &nbsp; | &nbsp;
              <a href="/">Technology Awareness Workshops</a> &nbsp; | &nbsp;
              <a href="/">GIS Users Community</a>&nbsp; | &nbsp;
              <a href="/">Geocodes</a> &nbsp; | &nbsp;
              <a href="/">Metadata</a> &nbsp; | &nbsp;
              <a href="/">Afghanistan Education Facilities Maps</a>
            </Marquee>
            <table>
              <tr>
                <td>
                  <a href="/" style={{ textDecoration: "none" }}>
                    Afghanistan Information Management Services
                  </a>
                  <br />
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
                  <br />
                  <a href="/" style={{ float: "right" }}>
                    more...
                  </a>
                  <br />
                </td>
                <td>
                  <img id="undp-logo" src="UNDP.png" alt="" />
                </td>
              </tr>
            </table>

            <div className="row">
              <h1 id="brows-services">Browse Our Serivces</h1>
              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <a href="/">Institutional Relations and Development | </a>
                      <a href="/"> Executive Briefing Sessions | </a>
                      <a href="/"> Government Services | </a>
                      <a href="/"> Mins. & Deps. Map & Contact</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://solutions.rent/wp-content/uploads/2019/07/spotkanie-biznesowe.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <a href="/">GIS / Mapping Services | </a>
                      <a href="/"> Geocodes & Settlements DB | </a>
                      <a href="/"> Shape Files | </a>
                      <a href="/"> GIS Users Community</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKZ_cauTlBIsxcQTy_RsjBdLKZqkqb5VDC2O6qDRe4NTlZPEtowrUYOXidWmHugPs4zk&usqp=CAU"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <a href="/">Customer Services |</a>
                      <a href="/"> Map / Data Request Form |</a>
                      <a href="/"> Publications | </a>
                      <a href="/"> Library</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2Z04lHFTowQAEHrt6ZcejZIHjFcN7u7SUI7RDH5IPdUgmWv11qj2X3t37RkpNbvpeCQ&usqp=CAU"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <a href="/">MIS / Web Services | </a>
                      <a href="/"> Team Structure & Expertise | </a>
                      <a href="/"> Development Standards & Best Practices | </a>
                      <a href="/"> Our Products</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1IKsGboYQCzgeT9HhWf2qsimSiuBSZl__w&usqp=CAU"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <a href="/">Training Services | </a>
                      <a href="/"> Special Trainings (Short Terms) | </a>
                      <a href="/"> AIMS Training Courses | </a>
                      <a href="/"> AIMS Training Materials</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1FSKI8LSTzhfaS5_bOpG45yU2IqKpJ-QS_A&usqp=CAU"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <a href="/">Regional Services | </a>
                      <a href="/"> Regional Office Mazar | </a>
                      <a href="/"> Regional Office Jalalabad | </a>
                      <a href="/"> Regional Office Hirat</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h1 id="brows-services">What's Hot?</h1>
                <a
                  href="http://web.archive.org/web/20081030064816/http://www.aims.org.af/sroots.aspx?seckeys=70&seckeyo=44&seckeyz=37"
                  style={{ color: "brown", textDecoration: "none" }}
                >
                  &#9830; GIS Users Community
                </a>
                <br />
                <a href="/" style={{ color: "gray", textDecoration: "none" }}>
                  &#9830; Vacancy Announcements within AIMS
                </a>
                <br />
                <a
                  href="/"
                  style={{ color: "yellowgreen", textDecoration: "none" }}
                >
                  &#9830; AIMS Office Location Map
                </a>
                <br />
                <a
                  href="/"
                  style={{ color: "skyblue", textDecoration: "none" }}
                >
                  &#9830; AIMS Afghanistan Year 1387 (08 - 09) Calendar
                </a>
                <br />
                <a href="/" style={{ color: "green", textDecoration: "none" }}>
                  &#9830; Special Achievement in GIS Award for AIMS
                </a>
                <br />
                <a href="/" style={{ color: "brown", textDecoration: "none" }}>
                  &#9830; Badakhshan Earthquake Map (03 April 07)
                </a>
                <br />
                <a href="/" style={{ color: "gray", textDecoration: "none" }}>
                  &#9830; Afghanistan Latest Floods (Maps & Data)
                </a>
                <br />
                <a
                  href="/"
                  style={{ color: "skyblue", textDecoration: "none" }}
                >
                  &#9830; Link to DDP's Website
                </a>
              </div>
              <div className="col-md-6">
                <h1 id="brows-services">Site New Updates</h1>
                <a href="/">&#8226; AIMS Monthly Update for October 2008</a>
                <br />
                <a href="/">&#8226; AIMS Partners</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 right-side">
            <a href="/">Where are we?</a>
            <table>
              <tr>
                <td>
                  <img
                    id="map-img"
                    src="https://www.seekpng.com/png/detail/363-3636791_asia-pharma-is-distributing-its-products-and-services.png"
                    alt=""
                  />
                </td>
                <td>
                  <a href="/">Kabul</a>
                  <br />
                  <a href="/">Jalalabad</a>
                  <br />
                  <a href="/">Kandahar</a>
                  <br />
                  <a href="/">Kunduz</a>
                  <br />
                  <a href="/">Hirat</a>
                  <br />
                  <a href="/">Mazar-e-Sharif</a>
                </td>
              </tr>
            </table>
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
      <Footer />
      <SocialIcons />
    </>
  );
}
