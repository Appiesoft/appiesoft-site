import React from "react";
import "./Header.css";
import { Row, Col } from "react-bootstrap";
import mainlogo from "../../asset/mainlogoappie.png";
import maillogo from "../../asset/maillogo.png";
import phonelogo from "../../asset/phonelogo.png";
import Dropdown from "react-bootstrap/Dropdown";
const Header = () => {
  const [selectedValue, setSelectedValue] = React.useState("Service");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>

      <nav className="upper_navbar pt-4 pb-5 navbar navbar-expand-lg navbar-expand-xxl">
          <Col xxl={10} xl={11} lg={10} className="mx-auto pb-3 d-flex justify-content-between">
            <div className="row w-100 align-items-center d-flex justify-content-between ">
            <Col xxl={3} xl={3} lg={3} className=" text-start ps-md-4">
                <img src={mainlogo} alt="" className="rounded-2" />
              </Col>
              <Col xxl={7} xl={8} lg={9}>
                <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-end">
                  <li className="d-flex">
                    <span className="mt-1">
                      <img src={maillogo} alt="" />
                    </span>{" "}
                    <h6 className="ms-2 text-white upper_navbar_text">
                      info@appiesoftwebsolutions.com
                    </h6>
                  </li>
                  <li className="d-flex ms-lg-5">
                    <span>
                      <img src={phonelogo} alt="" />
                    </span>{" "}
                    <h6 className="ms-2 text-white upper_navbar_text">
                      +91-8847249971
                    </h6>
                  </li>
                </ul>
              </Col>
            </div>
          </Col>
      </nav>

      <Row className="mx-auto position-absolute inner_navbar ">
        <Col
          xxl={10}
          xl={11}
          lg={10}
          className="mx-auto pb-3 "
        >
          <nav class="navbar navbar-expand-lg navbar-expand-xl  navbar-expand-xxl  bg-white mx-auto rounded-1 py-3">
            <div class="container-fluid  d-md-flex  justify-content-md-evenly">
              <Row className=" w-100">
                <Col
                  xxl={12}
                  xl={10}
                  lg={11}
                  className="mx-auto d-md-flex align-items-center justify-content-md-evenly "
                >
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
                      <span className="navbar_linkFont  navbar">
                        Services
                        <i class="fa fa-angle-down ms-2" aria-hidden="true"></i>
                      </span>
                      <div className="hover_box"></div>
                      <div class="dropdown-content">
                        <p className="my-2">
                          <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">
                            Web & Graphic Design
                          </a>
                        </p>
                        <p>
                          <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">
                            Web Development
                          </a>
                        </p>
                        <p className="my-2">
                          <a className="text-decoration-none text-capitalize  navbar_linkFont  inner_linkFont">
                            Industrial Training
                          </a>
                        </p>
                        <p>
                          <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">
                            Ecommerce Websites
                          </a>
                        </p>
                        <p className="my-2">
                          <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">
                            Apps Development
                          </a>
                        </p>
                        <p>
                          <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">
                            Search Engine Optimization
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto  parent_link px-0">
                    <a className="text-decoration-none text-capitalize navbar_linkFont ">
                      Our Works
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
        </Col>
      </Row>
    </>
  );
};

export default Header;