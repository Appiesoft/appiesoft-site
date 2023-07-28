import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import location from "../../asset/location.png";
import mainlogoappie from "../../asset/mainlogoappie.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Footer = () => {
  const [menuItems, setMenuItems] = useState([]);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    // Show/hide the scroll-up button based on the scroll position
    const scrollY = window.scrollY;
    const showThreshold = 300; // Adjust this value to control when the button appears
    setShowButton(scrollY > showThreshold);
  };
  const handleScrollUp = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Add event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Replace the API endpoint with your WordPress API URL
    const apiUrl =
      "https://xploreseo.com/react-wordpress-api/wp-json/custom/v1/menu/main-menu";

    const fetchMenuData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenuData();
  }, []);
  return (
    <>
      {showButton && (
        <button className="scroll-up-button" onClick={handleScrollUp}>
        <i class="fa-sharp fa-solid fa-caret-down fa-flip-vertical"></i>
        </button>
      )}
      <footer className="bg_footer_color">
        <section>
          <Container>
            <div className="footer_top">
              <ul>
                <li>
                  <img alt="team" className="" src={location} />
                  <div className="sav_rgt">
                    <h2 className=" footer_info ">SEND YOUR MESSAGE</h2>
                    <p className="text-white inner_footer_info ">
                      info@appiesoftwebsolutions.com
                    </p>
                  </div>
                </li>
                <li>
                  <img alt="team" className="" src={location} />
                  <div className="sav_rgt">
                    <h2 className=" footer_info ">CALL US</h2>
                    <p className="text-white inner_footer_info">
                      +91-8847249971
                    </p>
                  </div>
                </li>
                <li>
                  <img alt="team" className="" src={location} />
                  <div className="sav_rgt">
                    <h2 className="inner_footer_info text-white">
                      SCF 80 FF, Phase 11, Sector 65, Sahibzada Ajit Singh
                      Nagar, Punjab 160065
                    </h2>
                  </div>
                </li>
              </ul>
            </div>
            <Row className="mx-auto">
              <Col
                lg={12}
                md={12}
                className="d-md-flex justify-content-md-center bg_content_footer_gap flex-wrap"
              >
                <Col lg={4} md={12} className="mt-4 mt-md-0 mt-lg-0">
                  <NavLink to="/">
                    <img src={mainlogoappie} alt="" className="rounded-2" />
                  </NavLink>
                  <p className="img_para  text-start mt-4 ">
                    We are energetic about creating Brand value and Development
                    and this nearly keep running into our veins. We are
                    altogether dedicated toward our work, looking for chances to
                    make stylish items over the advanced range
                  </p>
                </Col>
                <Col lg={2} md={3} className="mt-3 mt-md-4 mt-lg-0">
                  <h2 className="text-white text-start mb-3 head_links">
                    Quick Links
                  </h2>
                  <nav className="list-none mb-10 text-start inner_links">
                    {menuItems.map((item) => {
                      return (
                        <>
                          <li key={item.ID} className="mt-2">
                            <NavLink to={item.url}>{item.title}</NavLink>
                          </li>
                        </>
                      );
                    })}
                  </nav>
                  {/* <nav className="list-none mb-10 text-start inner_links">
                    <li className="my-2">
                      <NavLink>Home </NavLink>
                    </li>
                    <li>
                      <NavLink>About</NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink>Services</NavLink>
                    </li>
                    <li>
                      <NavLink>Our Works</NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink>Testimonials</NavLink>
                    </li>
                    <li>
                      <NavLink>Contact</NavLink>
                    </li>
                  </nav> */}
                </Col>
                <Col lg={2} md={3} className="mt-md-4 mt-lg-0">
                  <h2 className=" text-white text-start head_links mb-3">
                    Services
                  </h2>
                  <nav className="list-none mb-10 inner_links text-start">
                    <li className="my-2">
                      <NavLink>Web Development</NavLink>
                    </li>
                    <li>
                      <NavLink>Web & Graphics Design</NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink>Ecommerce Websites</NavLink>
                    </li>
                    <li>
                      <NavLink>Apps Development</NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink>Search Engine Optimization</NavLink>
                    </li>
                    {/* <li>
                      <NavLink>Industrial Training</NavLink>
                    </li> */}
                  </nav>
                </Col>
                <Col lg={3} md={4} className="col-12 mt-md-4 mt-lg-0">
                  <h2 className="text-white text-start head_links mb-3">
                    Our Location
                  </h2>
                  <div className="map_width">
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "" }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}
                    >
                      <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                      />
                    </GoogleMapReact>
                  </div>
                </Col>
              </Col>
              <div className="text-white text-center border-top my-5">
                <div className="mt-5">
                  Copyright © 2023 Appiesoft Web Solutions Pvt Ltd. All rights
                  reserved.
                </div>
                <p className="text-center mt-3">
                  <span className="mx-4">
                    <NavLink to="https://www.facebook.com/appiesoftwebsolutions/">
                      <i
                        className="fa fa-facebook text-white"
                        aria-hidden="true"
                      ></i>
                    </NavLink>
                  </span>
                  <span>
                    <NavLink to="https://www.instagram.com/appiesoftweb/?hl=en">
                      <i className="fa-brands fa-instagram text-white"></i>{" "}
                    </NavLink>
                  </span>
                </p>
              </div>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default Footer;
