import { useState } from "react";
import "./Header.css";
import { Row, Col, Offcanvas, Container, Nav } from "react-bootstrap";
import mainlogo from "../../asset/mainlogoappie.png";
import maillogo from "../../asset/maillogo.png";
import phonelogo from "../../asset/phonelogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <header className="upper_navbar">
      <Container>
      <nav className="upper_navbar pt-3 pb-4 navbar navbar-expand-lg navbar-expand-xxl d-none d-lg-block">
      <Row className="mx-auto">
        <Col
          xxl={12}
          xl={12}
          lg={11}
          md={11}
          className=" pb-3 pb-lg-0 d-flex justify-content-between"
        >
          <div className="row w-100 align-items-center d-flex justify-content-between ">
            <Col xxl={3} xl={3} lg={3} md={2} className=" text-start mb-lg-2  ">
              <img src={mainlogo} alt="" className="rounded-2" />
            </Col>
            <Col xxl={7} xl={8} lg={12} md={9} className="">
              <ul className="navbar-nav  mb-2 d-xl-flex justify-content-end  my-xl-0 mb-lg-3">
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
        </Row>
      </nav>
     </Container>
    </header> */}

      {/* <Row className="mx-auto position-absolute inner_navbar d-none  d-lg-block">
        <Col  xxl={11}
          xl={12}
          lg={11}
          md={11} className="mx-auto ">
        <Container>
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
          </Container>
        </Col>
      </Row> */}

      <header id="masthead" class="site-header d-none d-lg-block d-xl-block">
        <div class="container">
          <div class="head-three">
            <div class="head-one">
              <img src={mainlogo} alt="" className="rounded-2" />
            </div>
            <div class="head-two">
              <ul>
                <li className="d-flex  justify-content-between align-items-center">
                  <span className="mt-1">
                    <Link to="/">
                      <img src={maillogo} alt="" />
                    </Link>
                  </span>
                  <h6 className=" text-white upper_navbar_text ms-3">
                    info@appiesoftwebsolutions.com
                  </h6>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>
                    <img src={phonelogo} alt="" />
                  </span>
                  <h6 className=" text-white upper_navbar_text ms-3">
                    +91-8847249971
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div class="nav-bar-sec">
          <ul id="menu-main-menu" class="menu">
          <li ><a href="#">Home</a></li>
          <li ><a href="#">About Us</a></li>
          <li > 
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
          </li>
          <li ><a href="#">Our Works</a></li>
          <li ><a href="#">Testimonials</a></li>
          <li ><a href="#">Contact</a></li>
         <li><a href="#"> 
         <div className="col-auto">
                    <button className="main_button text-white border-0">
                      Industrial Training
                    </button>
                  </div></a>
          </li>
          </ul>
          </div>
        </div>
        <div class="clr"></div>
      </header>

      {/* mobile view */}
      {/* upper_navbar */}
      <header className="d-block d-lg-none upper_navbar py-4">
        <Container>
          <Row className="mx-auto">
            <Col md={11} className="d-flex justify-content-between flex-wrap mx-auto">
              <Col md={2} className=" text-start ps-md-0">
                <img src={mainlogo} alt="" className="rounded-2" />
              </Col>
              <Col
                md={12}
                className=" d-flex justify-content-between align-self-center  mt-md-3"
              >
                <div className="d-md-flex     align-self-center d-none d-md-block">
                  <span className="align-self-end">
                    <Link to="/">
                      <img src={maillogo} alt="" />
                    </Link>
                  </span>
                  <h6 className="ms-2 text-white upper_navbar_text">
                    info@appiesoftwebsolutions.com
                  </h6>
                </div>
                <div className="d-md-flex ms-lg-5   align-self-center  d-none d-md-block">
                  <span className="align-self-end">
                    <img src={phonelogo} alt="" />
                  </span>{" "}
                  <h6 className="ms-2 text-white upper_navbar_text">
                    +91-8847249971
                  </h6>
                </div>
                <div className="d-flex ms-lg-5 bar_img   align-self-center me-3 ">
                  <span
                    onClick={handleShow}
                    className="bg-white px-2 rounded-1 py-1"
                  >
                    <i class="fa-solid fa-bars "></i>
                  </span>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </header>

      {/* sideBar mobile view*/}
      <div className="d-block  d-lg-none">
        <Offcanvas
          show={show}
          onHide={handleClose}
          className="d-block  d-lg-none d-xxl-none"
        >
          <Offcanvas.Header>
            <Offcanvas.Title>
              <span className="mt-1">
              
              </span>
            </Offcanvas.Title>
            <span className="icon_close rounded-2" onClick={handleClose}>
              <i class="fa-solid fa-xmark px-2 "></i>
            </span>
          </Offcanvas.Header>
          <Container
            fluid
            className="d-block  d-lg-none d-xxl-none mobile_nav p-0"
          >
            <h6 className="justify-content-start p-3 " id="home_bg">
              <Nav.Link href="#action1">Home</Nav.Link>
            </h6>
            <h6 className="justify-content-start p-3 ">
              <Nav.Link href="#action1">About</Nav.Link>
            </h6>
            <h6
              className="justify-content-between d-flex  p-3"
              onClick={toggleDropdown}
            >
              <nav className="accordion arrows">
                <input type="radio" name="accordion" id="cb1" />
                <section className="box">
                  <label className="box-title" for="cb1">
                    Service
                  </label>
                  <label className="box-close" for="acc-close"></label>
                  <div className="box-content border-top">
                    Web & Graphic Design
                  </div>
                  <div className="box-content">Web Development</div>
                  <div className="box-content">Industrial Training</div>
                  <div className="box-content">Ecommerce Websites</div>
                  <div className="box-content">Apps Development</div>
                  <div className="box-content">Search Engine Optimization</div>
                </section>
                <input type="radio" name="accordion" id="cb2" />

                <input type="radio" name="accordion" id="acc-close" />
              </nav>
            </h6>
            <h6 className="justify-content-start p-3  ">
              <Nav.Link href="#action1">Our Works</Nav.Link>
            </h6>
            <h6 className="justify-content-start p-3 ">
              <Nav.Link href="#action1">Testimonials</Nav.Link>
            </h6>
            <h6 className="justify-content-start p-3 ">
              <Nav.Link href="#action1">Contact</Nav.Link>
            </h6>
            <h6 className="justify-content-start p-3 ">
              <Nav.Link href="#action1">Industrial Training</Nav.Link>
            </h6>
          </Container>
        </Offcanvas>
      </div>
    </>
  );
};

export default Header;
