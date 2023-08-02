import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./Subscription.css";
import { NavLink } from "react-router-dom";
const Subscription = () => {
  return (
    <div>
      <section className="sscn6 py-5 text-center">
        <Container >
          <Row>
            <div className="col-md    tile-boxes px-0 card_bg" id="titleboxx">
              <Col className="text-center mx-auto py-3 bg_sub_banner">
                <h1>$1400</h1>
              </Col>
              <Col className="text-center pt-2 mb-4 mt-4 sub_title">
                <h1>FULL TIME</h1>
                <span>MONTHLY</span>
              </Col>
              <Col className="col-11 text-start mx-auto">
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  8 hours a day & 24 working Days in a Month.
                  </p>
                </Col>
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  Total : 192 hours, period of Hiring : 1 Month with Billing
                  </p>
                </Col>
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  40% advance, 60% at the mid of month.
                  </p>
                </Col>
              </Col>
              <Col className="text-center mx-auto">
              <NavLink to='/contact'>
                <Button className="subs_btn border-0 px-4 mt-3 mb-5">
                  Contact Us
                </Button></NavLink>
              </Col>
            </div>
            <div className="col-md   tile-boxes midbox-comp   px-0 card_bg"  id="titleboxx">
              <Col className="text-center mx-auto py-3 bg_sub_banner">
                <h1>$800</h1>
              </Col>
              <Col className="text-center pt-2 mb-4 mt-4 sub_title">
                <h1>FULL TIME</h1>
                <span>2 WEEKS</span>
              </Col>
              <Col className="col-11 text-start mx-auto">
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  80 hours of work in total, 40 hours each week and 8 hours daily, total : 80 hours.
                  </p>
                </Col>
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  Minimum Period of Hiring : 2 Weeks.
                  </p>
                </Col>
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  Billing : Full payment in advance or Hourly basis.
                  </p>
                </Col>
              </Col>
              <Col className="text-center mx-auto">  <NavLink to='/contact'>
                <Button className="subs_btn border-0 px-4 mt-3 mb-5">
                  Contact Us
                </Button> 
              </NavLink>
              </Col>
            </div>

            <div className="col-md   tile-boxes  px-0 card_bg"  id="titleboxx">
              <Col className="text-center mx-auto py-3 bg_sub_banner">
                <h1>$12/Hr</h1>
              </Col>
              <Col className="text-center pt-2 mb-4 mt-4 sub_title">
                <h1>WEEKLY</h1>
                <span>(AS REQUIRED)</span>
              </Col>
              <Col className="col-11 text-start mx-auto">
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  No hiring commitment. Hire us when you require.
                  </p>
                </Col>
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  Period of Hiring : Minimum 1 week i.e. 40 hours.
                  </p>
                </Col>
                <Col className="d-flex">
                  <span className="p-2 me-2">
                    <i class="fa-solid fa-check"></i>{" "}
                  </span>
                  <p class="subscription_para mb-4 text-black">
                  Billing : Full payment in advance or Hourly basis.
                  </p>
                </Col>
              </Col>
              <Col className="text-center mx-auto">  <NavLink to='/contact'>
                <Button className="subs_btn border-0 px-4 mt-3 mb-5">
                  Contact Us
                </Button> </NavLink>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Subscription;
