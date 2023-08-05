import React from "react";
import "./AppDevelopment.css";
import Header from "../../../Header";
import OurPartners from "../../../../servicePage/ourPartners/OurPartners";
import Contact from "../../../../servicePage/contactUS/Contact";
import Footer from "../../../../footer/Footer";
import { NavLink } from "react-router-dom";
const AppDevelopment = () => {
  return (
    <div>
    <Header/>
      <div className="inner_banner">
        <div className="container">
          <h1>Mobile App Development</h1>
        </div>
      </div>
      <section className="ict-sec-one">
        <div className="my_wrap">
          <div className="business-commun-text">
            <h2>
              Be where your <br />
              customers are – 24/7
            </h2>
            <p>
            Mobile application is the latest to join the technology revolution.We’ll take you through the basics of Android Studio, the default integrated development environment (IDE) supported by Google to develop Android apps, including user interfaces, activities, controls, layouts, services, content providers, location, multimedia APIs.
            </p>
            <NavLink to="/contact">
            <button type="button">Talk To An Expert Now</button> </NavLink>
          </div>
          <div className="commun-img-area">
            <img
              src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Group-1.png"
              alt="Mobile App Development"
            />
          </div>
          <div className="clr"></div>
        </div>
      </section>
      <section className="discovery-our-service">
        <div className="container">
          <h2 className="disc_main-heading">
            When creating your app, we follow
            <br />a proven four-step process…
          </h2>

          <div className="discovery-area">
            <div className="discovery-area-1">
              <div className="discovery-content-1">
                <div className="discovery-number-1">
                  <h2>1.</h2>
                </div>
                <div className="discovery-number-2">
                  <h3>Discovery</h3>
                  <p>
                    A face-to-face meeting with our digital marketing team to
                    discuss how mobile application development will address the
                    needs of your business and your customers. We will also
                    provide clarity on your app development cost. Flexible
                    pricing is available to match your budget.
                  </p>
                </div>
              </div>
              <div className="discovery-content-2">
                <div className="discovery-number-1">
                  <h2>2.</h2>
                </div>
                <div className="discovery-number-2">
                  <h3>Writing and coding</h3>
                  <p>
                    With a thorough brief in hand, our team will create and
                    develop an android app or apple app that is fast,
                    user-friendly, and valuable for your customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="discovery-area-2">
              <div className="discovery-content-3">
                <div className="discovery-number-1">
                  <h2>3.</h2>
                </div>
                <div className="discovery-number-2">
                  <h3>Graphic Design</h3>
                  <p>
                    Here’s where the fun begins. Following your brand and goals,
                    the talented team behind our mobile app development company
                    will create a design your customers will love.
                  </p>
                </div>
              </div>
              <div className="discovery-content-4">
                <div className="discovery-number-1">
                  <h2>4.</h2>
                </div>
                <div className="discovery-number-2">
                  <h3>Test and launch</h3>
                  <p>
                    It’s time to test. Using a control test group, we address
                    inefficiencies, fix any bugs and plan your launch, as part
                    of a comprehensive{" "}
                    <a href="https://telcoict.com.au/digital-strategy/">
                      digital marketing strategy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mobile-development">
        <div className="container">
          <div className="mobile-development-heading">
            <h2>Talk to us about mobile development today!</h2>
          </div>
          <div className="mobile-development-area">
            <div className="mobile-development1">
              <div className="mobile-development-logo">
                <img
                  src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Group-512655.png"
                  alt="Mobile App Development"
                />
              </div>
              <div className="mobile-development-content">
                <p>
                  Did you know? 81% of released apps by Australian publishers
                  are apps and 19% are games, compared to the worldwide market,
                  Australian publishers focus more on games with 19% of releases
                  compared to all publishers that focus 14% on games
                  <br />
                  <br />
                  Apps by Australian publishers have an average of 142.49k
                  downloads per app, compared to the average of all apps at
                  220.12k.
                </p>
                <NavLink to="/contact">
                <button type="button">Talk To An Expert Now</button>
                </NavLink>
                
              </div>
            </div>
            <div className="mobile-development2">
              <img
                src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/newimg3.png"
                alt="Mobile App Development"
              />
            </div>
          </div>
          <div className="clr"></div>
        </div>
      </div>
      <OurPartners/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default AppDevelopment;
