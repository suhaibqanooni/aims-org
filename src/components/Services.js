import React from "react";
import Footer from "./Footer";
import MenuWithImage from "./MenuWithImage";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";

export default function Services() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12 starter">
            <img src="header.PNG" alt="" />
          </div>
        </div>
      </div>
      <div id="header">
        <div class="container ">
          <div class="row">
            <div class="col-md-2">
              <a href="AIMS.html" style={{ textDecoration: "none" }}>
                <h1 id="logo">AIMS</h1>
              </a>
            </div>
            <div class="col-md-4">
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
            <div class="col-md-6">
              {/* <Navbar /> */}
              <MenuWithImage />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-9 left-side">
            <p id="about-box">AIMS Services</p>
            <img src="services_chart.PNG" alt="" />
            <p>
              AIMS is providing services in five broad areas, for building
              Information Management capacity in government and assistance
              community accross Afghanistan.
            </p>
            <div class="row">
              <div class="col-md-12">
                <h1 id="brows-services">Sub Sections</h1>
                <a href="/">&#9830; Customer Services</a>
                <br />
                <p style={{ color: "gray" }}>[13 Documents ]</p>
                <p>
                  Throughout the past two years AIMS has earned an excellent
                  reputation for customer relations based on our responsive,
                  client focused services. In an environment where data and
                  information are often piecemeal and difficult to access, AIMS
                  offers a storefront where customers can browse our selection
                  of maps, or speak with a specialist on a variety of topics. A
                  varied selection of standard and customized products is
                  available including maps, reports, data, and GIS tools. Our
                  main customer services department is open to everyone and is
                  easily accessible at our location in downtown Kabul. The
                  regional customer service departments are located at the AIMS
                  office in the UNAMA compounds.
                </p>

                <a href="/">&#9830; Institutional Relations and Development</a>
                <br />
                <p style={{ color: "gray" }}>[34 Documents]</p>
                <p>
                  Afghanistan is currently undergoing radical change as
                  government reforms and seeks to establish effective line
                  ministries and implement large national programmes in all
                  areas promoting poverty reduction, good governance, democracy
                  & human rights; infrastructure reconstruction and development.
                  Improved open information management lies at the centre of
                  many of these activities directly promoting and enabling
                  reform, visibility of operations, providing tools for
                  management. AIMS has a mandate to firstly build “Geographic
                  Information Management Capacity” in the government of
                  Afghanistan, and secondly to provide “Information Management
                  Services” to the government and the broader development
                  community.
                </p>

                <a href="/">&#9830; Regional Services</a>
                <br />
                <p style={{ color: "gray" }}>[101 Documents]</p>
                <p>
                  A network of five regional offices augments AIMS' main office
                  in Kabul. AIMS regional services were initially in mapping,
                  database and information management support to the
                  humanitarian and AID community in emergency situation.
                </p>

                <a href="/">&#9830; Training Services</a>
                <br />
                <p style={{ color: "gray" }}>[92 Documents]</p>
                <p>
                  AIMS will deliver a clearly structured range of certified AIMS
                  training courses which will ensure that capacity for GIS
                  expertise may be established and maintained in government.
                </p>

                <a href="/">&#9830; GIS / Mapping Services</a>
                <br />
                <p style={{ color: "gray" }}>[163 Documents]</p>
                <p>
                  GIS services are the most advanced information management
                  service currently offered by AIMS. Integration of these
                  activities into government shall 'prove' the model for
                  institutionalizing information management capability.
                </p>

                <a href="/">&#9830; MIS / Web Services</a>
                <br />
                <p style={{ color: "gray" }}>[52 Documents]</p>
                <p>
                  AIMS has a long term mandate in building information
                  management (IM) capacity. The AIMS MIS/Web section largely
                  focuses on the development of high quality information systems
                  & products for the government of Afghanistan, UN and the
                  development partners.
                </p>
                <p>
                  The MIS/Web section activities are:
                  <br />
                  Database Development, Website Development, Intranet
                  Development, Database Trainings, MIS Training, Systems
                  analysis and Providing Advisory Services.
                </p>

                <a href="/">&#9830; Sectoral Services</a>
                <br />
                <p style={{ color: "gray" }}>[726 Documents]</p>
                <p>
                  In order to facilitate the exchange of information within the
                  different sectors of humanitarian work currently continuing
                  inside Afghanistan, we have grouped available data under the
                  appropriate heading.
                </p>

                <a href="/">&#9830; Advisory Services</a>
                <br />
                <p style={{ color: "gray" }}>[7 Documents]</p>
                <p>
                  AIMS provides advisory services to clients on a walk-in and
                  appointment basis at all of our offices. International or
                  Afghan GIS and database specialists are available for
                  consultations. The unique experience and skills of the AIMS
                  staff enable them to comment on a wide variety of topics, with
                  a clarity and expertise rarely found in similar environments.
                  Many of the requests involve semi-technical questions
                  regarding the nature of mapping, data collection and GIS in
                  Afghanistan. Most clients are unfamiliar with the special
                  problems of geographic and demographic data in Afghanistan and
                  require guidance for implementing projects, surveys, or
                  programs.
                </p>
              </div>
            </div>
            <a href="/" class="back_to_top">
              Back to top
            </a>
          </div>

          <div class="col-md-3 right-side">
            <div>
              <h1 style={{ color: "orange", fontSize: 18 }}>
                Site New Updates
              </h1>
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

      <Footer />
      {/* <!--Side Bar Icons------------------------> */}
      <SocialIcons />
    </>
  );
}
