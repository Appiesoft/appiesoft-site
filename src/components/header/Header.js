import { useState } from "react";
import "./Header.css";
import { Row, Col, Offcanvas, Container } from "react-bootstrap";
import mainlogo from "../../asset/mainlogoappie.png";
import maillogo from "../../asset/maillogo.png";
import phonelogo from "../../asset/phonelogo.png";
import { NavLink } from "react-router-dom";

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

      <header id="masthead" class="site-header d-none d-lg-block d-xl-block">
        <div class="container">
          <div class="head-three">
            <div class="head-one">
            <NavLink to="/">
              <img src={mainlogo} alt="" className="rounded-2" /> </NavLink>
            </div>
            <div class="head-two">
              <ul>
                <li className="d-flex  justify-content-between align-items-center">
                  <span className="mt-1">
                    <NavLink to="/">
                      <img src={maillogo} alt="" />
                    </NavLink>
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
          <li  >
          <NavLink to='/' >Home</NavLink>
          </li>
          <div className="hover_box"></div>
          <li   ><NavLink to='/about' >About Us</NavLink></li>
          <div className="hover_box"></div>
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
          <div className="hover_box"></div>
          <li ><a href="#">Testimonials</a></li>
           <div className="hover_box"></div>
          <li ><NavLink to='/contact' >
         <div className="col-auto">
                    <button className="main_button text-white border-0">
                    Contact
                    </button>
                  </div>
                  </NavLink>
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
                    <NavLink to="/">
                      <img src={maillogo} alt="" />
                    </NavLink>
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
            <NavLink to='/' >Home</NavLink>
            </h6>
            <h6 className="justify-content-start p-3 ">
              <NavLink to='/about' >About</NavLink>
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
            <h6 className="justify-content-start p-3 ">
              <NavLink to='/our-work' >Our Works</NavLink>
            </h6>
            <h6 className="justify-content-start p-3 ">
              <NavLink to='/testimonials' >Testimonials</NavLink>
            </h6>
            <h6 className="justify-content-start p-3 ">
              <NavLink to='/contact' >Contact</NavLink>
            </h6>
          </Container>
        </Offcanvas>
      </div>
    </>
  );
};

export default Header;
