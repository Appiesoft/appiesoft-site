import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import location from "../../asset/location.png";
import mainlogoappie from "../../asset/mainlogoappie.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import Iframe from "react-iframe";
const Footer = () => {
  
  const [menuItems, setMenuItems] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 300; 
    setShowButton(scrollY > showThreshold);
  };
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    useEffect(() => {
        // Replace the API endpoint with your WordPress API URL
        const apiUrl = 'https://xploreseo.com/react-wordpress-api/wp-json/custom/v1/menu/main-menu';
    
        // Fetch the menu data using axios
        axios
          .get(apiUrl)
          .then(response => {
            setMenuItems(response.data);
          })
          .catch(error => {
            console.error('Error fetching menu data:', error);
          });
      }, []);

    const currentYear = new Date().getFullYear();
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
                    <NavLink to="mailto:info@appiesoftwebsolutions.com" target="_blank">
                    <p className="text-white inner_footer_info ">
                      info@appiesoftweb<br/>solutions.com
                    </p>
                    </NavLink>
                  </div>
                </li>
                <li>
                  <img alt="team" className="" src={location} />
                  <div className="sav_rgt">
                    <h2 className=" footer_info ">CALL US</h2>
                    <NavLink to="tel:8847249971" target="_blank"  >
                    <p className="text-white inner_footer_info">
                      +91-8847249971
                    </p></NavLink>
                  </div>
                </li>
                <li>
                  <img alt="team" className="" src={location} />
                  <div className="sav_rgt">
                  <h2 className=" footer_info ">ADDRESS</h2>
                  <NavLink to='https://goo.gl/maps/VPcbY3Z4u4uw49687' target="_blank">
                    <h2 className="inner_footer_info text-white">
                      SCF 80 FF, Phase 11, Sector 65, Sahibzada Ajit Singh
                      Nagar, Punjab 160065
                    </h2> </NavLink>
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
                      <NavLink to='web-development'>React Development</NavLink>
                    </li>
                    <li>
                      <NavLink to='web-and-graphic'>Web & Graphics Design</NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink to='ecommerce'>Ecommerce Websites</NavLink>
                    </li>
                    <li>
                      <NavLink to='app-development'>Apps Development</NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink to='web-development'>Web Development</NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink to='search-engine-optimization'>Search Engine Optimization</NavLink>
                    </li>
                  </nav>
                </Col>
                <Col lg={3} md={4} className="col-12 mt-md-4 mt-lg-0">
                <h2 className="text-white text-start head_links mb-3">
                    Our Location
                  </h2>
                  <div className="map_width">
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219564.90228666205!2d76.67961046689979!3d30.698670868389545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed842c2eef47%3A0xa42b34ac79161bd3!2sAppiesoft%20Web%20Solutions%20Pvt%20ltd!5e0!3m2!1sen!2sin!4v1691063065285!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                  </div>
                </Col>
              </Col>
              <div className="text-white text-center border-top my-5">
                <div className="mt-5">
                  Copyright © {currentYear} Appiesoft Web Solutions Pvt Ltd. All rights
                  reserved.
                </div>
                <p className="text-center mt-3">
                  <span className="mx-4">
                    <NavLink to="https://www.facebook.com/appiesoftwebsolutions/" target="_blank">
                      <i
                        className="fa fa-facebook text-white"
                        aria-hidden="true"
                      ></i>
                    </NavLink>
                  </span>
                  <span>
                    <NavLink to="https://www.instagram.com/appiesoftweb/?hl=en" target="_blank">
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
