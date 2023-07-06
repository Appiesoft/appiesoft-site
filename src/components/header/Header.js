import React from "react";
import "./Header.css";
import {Row,Col} from 'react-bootstrap'
import mainlogo from "../../asset/mainlogoappie.png";
import maillogo from "../../asset/maillogo.png";
import phonelogo from "../../asset/phonelogo.png";
import Dropdown from 'react-bootstrap/Dropdown';
const Header = () => {
  const [selectedValue, setSelectedValue] = React.useState("Service");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div>
        <nav className="upper_navbar pt-4 pb-5 navbar navbar-expand-lg">
          <div className="container pb-3">
            <div className="row w-100 align-items-center d-flex">
              <div className="col-auto px-0">
                <img src={mainlogo} alt="" className="rounded-2"/>
              </div>
              <div className="col-auto ms-auto">
                <ul className="navbar-nav  mb-2 mb-lg-0">
                  <li className="d-flex">
                    <span className="mt-1">
                      <img src={maillogo} alt="" />
                    </span>{" "}
                    <h6 className="ms-2 text-white upper_navbar_text">
                    info@appiesoftwebsolutions.com
                    </h6>
                  </li>
                  <li className="d-flex ms-4">
                    <span>
                      <img src={phonelogo} alt="" />
                    </span>{" "}
                    <h6 className="ms-2 text-white upper_navbar_text">
                    +91-8847249971
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="container position-relative">
          <nav class="navbar navbar-expand-lg inner_navbar  position-absolute bg-white navbar-light bg-white mx-auto rounded-1 py-3">
            <div class="container-fluid">
              <Row className="row w-100">
              <Col lg={11} className="mx-auto d-flex align-items-center justify-content-evenly ">
                <div className="col-auto  parent_link px-0">
                  <a className="text-decoration-none text-capitalize navbar_linkFont ">
                    Home
                  </a>
                  <div className="hover_box"></div>
                </div>
                <div className="col-auto  parent_link px-0">
                  <a className="text-decoration-none text-capitalize navbar_linkFont ">
                    About
                  </a>
                  <div className="hover_box"></div>
                </div>
                <div className="col-auto  px-0">
                  <div class="dropdown">
                    <span className="navbar_linkFont  navbar">Services<i class="fa fa-angle-down ms-2" aria-hidden="true"></i></span>
                    <div className="hover_box"></div>
                    <div class="dropdown-content">
                      <p className="my-2">
                      <a  className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">Web & Graphic Design</a>
                      </p>
                      <p >
                      <a  className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">Web Development</a>
                      </p>
                      <p  className="my-2">
                      <a className="text-decoration-none text-capitalize  navbar_linkFont  inner_linkFont">Industrial Training</a>
                        </p>
                        <p>
                        <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">Ecommerce Websites</a>
                        </p>
                        <p  className="my-2">
                        <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">Apps Development</a>
                        </p>
                        <p>
                        <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">Search Engine Optimization</a>  
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-auto  parent_link px-0">
                  <a className="text-decoration-none text-decoration-none text-capitalize navbar_linkFont">
                    Our works
                  </a>
                  <div className="hover_box"></div>
                </div>
                <div className="col-auto  parent_link px-0">
                  <a className="text-decoration-none text-decoration-none text-capitalize navbar_linkFont">
                    Testimonials
                  </a>
                  <div className="hover_box"></div>
                </div>
                <div className="col-auto  parent_link px-0">
                  <a className="text-decoration-none text-decoration-none text-capitalize navbar_linkFont">
                    Contact
                  </a>
                  <div className="hover_box"></div>
                </div>
                <div className="col-auto">
                  <button className="main_button text-white rounded-3 py-3 px-5 border-0">
                    Industrial Training
                  </button>
                </div>
                </Col>
              </Row>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
