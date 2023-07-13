import { useState } from "react";
import "./Header.css";
import { Row, Col, Offcanvas, Button, Container } from "react-bootstrap";
import mainlogo from "../../asset/mainlogoappie.png";
import maillogo from "../../asset/maillogo.png";
import phonelogo from "../../asset/phonelogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Service");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  return (
    <>
      <nav className="upper_navbar pt-3 pb-4 navbar navbar-expand-lg navbar-expand-xxl d-none d-lg-block">
        <Col
          xxl={9}
          xl={11}
          lg={10}
          md={11}
          className="mx-auto pb-3 d-flex justify-content-between"
        >
          <div className="row w-100 align-items-center d-flex justify-content-between ">
            <Col xxl={3} xl={3} lg={3} md={2} className=" text-start ps-md-4">
              <img src={mainlogo} alt="" className="rounded-2" />
            </Col>
            <Col xxl={7} xl={8} lg={9} md={9} className="">
              <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-end">
                <li className="d-flex">
                  <span className="mt-1">
                    <Link to="/">
                      <img src={maillogo} alt="" />
                    </Link>
                  </span>
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

      <Row className="mx-auto position-absolute inner_navbar d-none  d-lg-block">
        <Col xxl={9} xl={11} lg={10} className="mx-auto ">
          <nav class="navbar navbar-expand-lg navbar-expand-xl  navbar-expand-xxl  bg-white mx-auto rounded-2 py-2">
            <div class="container-fluid  d-md-flex  justify-content-md-evenly">
              <Row className=" w-100">
                <Col
                  xxl={12}
                  xl={10}
                  lg={11}
                  className="mx-auto d-md-flex align-items-center justify-content-md-evenly "
                >
                  <div className="col-auto  parent_link d-lg-flex px-0">
                    <a className="text-decoration-none text-capitalize navbar_linkFont ">
                      Home
                    </a>
                    <div className="hover_box"></div>
                  </div>
                  <div className="col-auto  parent_link d-lg-flex px-0">
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
                  <div className="col-auto  parent_link d-lg-flex px-0">
                    <a className="text-decoration-none text-capitalize navbar_linkFont ">
                      Our Works
                    </a>
                    <div className="hover_box"></div>
                  </div>
                  <div className="col-auto  parent_link d-lg-flex px-0">
                    <a className="text-decoration-none text-decoration-none text-capitalize navbar_linkFont">
                      Testimonials
                    </a>
                    <div className="hover_box"></div>
                  </div>
                  <div className="col-auto  parent_link d-lg-flex px-0">
                    <a className="text-decoration-none text-decoration-none text-capitalize navbar_linkFont">
                      Contact
                    </a>
                    <div className="hover_box"></div>
                  </div>
                  <div className="col-auto">
                    <button className="main_button text-white border-0">
                      Industrial Training
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </nav>
        </Col>
      </Row>

      {/* mobile view */}
{/* upper_navbar */}
      <header className="d-block d-lg-none upper_navbar py-4">
        <Container>
          <Row>
            <Col md={12} className="d-flex justify-content-between">
            <Col md={2} className=" text-start ps-md-4">
              <img src={mainlogo} alt="" className="rounded-2" />
            </Col>
            <Col md={9} className=" d-flex justify-content-evenly align-self-center flex-wrap">
                <div className="d-flex     align-self-center d-none d-md-block">
                  <span >
                    <Link to="/">
                      <img src={maillogo} alt="" />
                    </Link>
                  </span>
                  <h6 className="ms-2 text-white upper_navbar_text">
                    info@appiesoftwebsolutions.com
                  </h6>
                </div>
                <div className="d-flex ms-lg-5   align-self-center  d-none d-md-block">
                  <span>
                    <img src={phonelogo} alt="" />
                  </span>{" "}
                  <h6 className="ms-2 text-white upper_navbar_text">
                    +91-8847249971
                  </h6>
                </div>
                <div className="d-flex ms-lg-5 bar_img   align-self-center">
                  <span onClick={handleShow} className="bg-white">
                  <i class="fa-solid fa-bars "></i>
                  </span>
                </div>
            </Col>
            </Col>
          </Row>
        </Container>
      </header>

{/* sideBar */}
      <div className="d-block  d-lg-none">
        <Offcanvas show={show}>
          <Offcanvas.Header >
          <Offcanvas.Title>
              <span className="mt-1">
                <Link to="/">
                  <img src={mainlogo} alt="" className="rounded-2" />
                </Link>
              </span>
            </Offcanvas.Title>
            <span className="icon_close rounded-2"  onClick={handleClose}>
            <i class="fa-solid fa-xmark px-2 "></i>
            </span>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row className="mx-auto position-absolute inner_navbar d-md-block  d-block d-lg-none">
              <Col xxl={9} xl={11} lg={10} className="mx-auto ">
                <nav class="navbar navbar-expand-lg navbar-expand-xl  navbar-expand-xxl  bg-white mx-auto rounded-2 py-2">
                  <div class="container-fluid  d-md-flex  justify-content-md-evenly">
                    <Row className=" w-100">
                      <Col
                        xxl={12}
                        xl={10}
                        lg={11}
                        className="mx-auto d-lg-flex align-items-center justify-content-lg-evenly "
                      >
                        <div className="col-auto  parent_link  px-0 mb-md-3 mb-3 my-lg-0">
                          <a className="text-decoration-none text-capitalize navbar_linkFont ">
                            Home
                          </a>
                          <div className="hover_box"></div>
                        </div>
                        <div className="col-auto  parent_link  px-0 ">
                          <a className="text-decoration-none text-capitalize navbar_linkFont ">
                            About
                          </a>
                          <div className="hover_box"></div>
                        </div>
                        <div className="col-auto  px-0  d-none d-lg-block">
                          <div class="dropdown">
                            <span className="navbar_linkFont  navbar">
                              Services
                              <i
                                class="fa fa-angle-down ms-2"
                                aria-hidden="true"
                              ></i>
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
                        {/* mobile view  */}
                        <div className="d-block d-lg-none mt-2 mb-3 "
                          onClick={toggleDropdown}
                        >
                          <h2 className=" navbar_linkFont inner_linkFont">
                            Service <i
                              class={` ${
                                !isOpen
                                  ? "fa fa-angle-down ms-2"
                                  : "fa fa-angle-up ms-2"
                              }`}
                            ></i>
                          </h2>
                        </div>
                        {isOpen && (
                          <div className="widthlink" >
                            <p className="my-3">
                              <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">
                                Web & Graphic Design
                              </a>
                            </p>
                            <p>
                              <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">
                                Web Development
                              </a>
                            </p>
                            <p className="my-3">
                              <a className="text-decoration-none text-capitalize  navbar_linkFont  inner_linkFont">
                                Industrial Training
                              </a>
                            </p>
                            <p>
                              <a className="text-decoration-none text-capitalize  navbar_linkFont inner_linkFont">
                                Ecommerce Websites
                              </a>
                            </p>
                            <p className="my-3">
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
                        )}

                        <div className="col-auto  parent_link mb-3  px-0 ">
                          <a className="text-decoration-none text-capitalize navbar_linkFont ">
                            Our Works
                          </a>
                          <div className="hover_box"></div>
                        </div>
                        <div className="col-auto  parent_link  px-0 my-md-3 mb-3 my-lg-0">
                          <a className="text-decoration-none text-decoration-none text-capitalize navbar_linkFont">
                            Testimonials
                          </a>
                          <div className="hover_box"></div>
                        </div>
                        <div className="col-auto  parent_link  px-0">
                          <a className="text-decoration-none text-decoration-none text-capitalize navbar_linkFont">
                            Contact
                          </a>
                          <div className="hover_box"></div>
                        </div>
                        <div className="col-auto my-md-2 my-lg-0">
                          <button className="mobile_main_button text-white border-0">
                            Industrial Training
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </nav>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Header;
