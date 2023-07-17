import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import location from "../../asset/location.png";
import mainlogoappie from "../../asset/mainlogoappie.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Footer = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
 <>

      <footer className="bg_footer_color">
        <section>
          <Container>
            <div className="footer_top">
    		    <ul>
    		        <li>
                <img
                      alt="team"
                      className=""
                      src={location}
                    />
    		            <div className="sav_rgt">
                    <h2 className=" footer_info ">SEND YOUR MESSAGE</h2>
                      <p className="text-white inner_footer_info ">
                        info@appiesoftwebsolutions.com
                      </p>
    		            </div>
    		        </li>
    		        <li>
                <img
                      alt="team"
                      className=""
                      src={location}
                    />
    		            <div className="sav_rgt">
                    <h2 className=" footer_info ">CALL US</h2>
                      <p className="text-white inner_footer_info">+91-8847249971</p>
                    
    		            </div>
    		        </li>
    		        <li>
                <img
                      alt="team"
                      className=""
                      src={location}
                    />
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
                lg={12} md={12}
                className="d-md-flex justify-content-md-center bg_content_footer_gap flex-wrap"
              >
                <Col lg={4} md={12} className="mt-4 mt-md-0 mt-lg-0">
                  <Link to="/">
                    <img src={mainlogoappie} alt="" className="rounded-2" />
                  </Link>
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
                    <li className="my-2">
                      <a>Home </a>
                    </li>
                    <li>
                      <a>About</a>
                    </li>
                    <li className="my-2">
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Our Works</a>
                    </li>
                    <li className="my-2">
                      <a>Testimonials</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                  </nav>
                </Col>
                <Col lg={2} md={3} className="mt-md-4 mt-lg-0">
                  <h2 className=" text-white text-start head_links mb-3">
                    Services
                  </h2>
                  <nav className="list-none mb-10 inner_links text-start">
                    <li className="my-2">
                      <a>Web Development</a>
                    </li>
                    <li>
                      <a>Web & Graphics Design</a>
                    </li>
                    <li className="my-2">
                      <a>Ecommerce Websites</a>
                    </li>
                    <li>
                      <a>Apps Development</a>
                    </li>
                    <li className="my-2">
                      <a>Search Engine Optimization</a>
                    </li>
                    <li>
                      <a>Industrial Training</a>
                    </li>
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
                    <Link to="https://www.facebook.com/appiesoftwebsolutions/">
                      <i
                        className="fa fa-facebook text-white"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.instagram.com/appiesoftweb/?hl=en">
                      <i className="fa-brands fa-instagram text-white"></i>{" "}
                    </Link>
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


