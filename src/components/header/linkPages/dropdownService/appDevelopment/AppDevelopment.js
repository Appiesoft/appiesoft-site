import React from "react";
import "./AppDevelopment.css";
import Header from "../../../Header";
import OurPartners from "../../../../servicePage/ourPartners/OurPartners";
import Contact from "../../../../servicePage/contactUS/Contact";
import Footer from "../../../../footer/Footer";
const AppDevelopment = () => {
  return (
    <div>
    <Header/>
      <div class="inner_banner">
        <div class="container">
          <h1>Mobile App Development</h1>
        </div>
      </div>
      <section class="ict-sec-one">
        <div class="my_wrap">
          <div class="business-commun-text">
            <h2>
              Be where your <br />
              customers are – 24/7
            </h2>
            <p>
            Mobile application is the latest to join the technology revolution.We’ll take you through the basics of Android Studio, the default integrated development environment (IDE) supported by Google to develop Android apps, including user interfaces, activities, controls, layouts, services, content providers, location, multimedia APIs.
            </p>
            <button type="button">Talk To An Expert Now</button>
          </div>
          <div class="commun-img-area">
            <img
              src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Group-1.png"
              alt="Mobile App Development"
            />
          </div>
          <div class="clr"></div>
        </div>
      </section>
      <section class="discovery-our-service">
        <div class="container">
          <h2 class="disc_main-heading">
            When creating your app, we follow
            <br />a proven four-step process…
          </h2>

          <div class="discovery-area">
            <div class="discovery-area-1">
              <div class="discovery-content-1">
                <div class="discovery-number-1">
                  <h2>1.</h2>
                </div>
                <div class="discovery-number-2">
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
              <div class="discovery-content-2">
                <div class="discovery-number-1">
                  <h2>2.</h2>
                </div>
                <div class="discovery-number-2">
                  <h3>Writing and coding</h3>
                  <p>
                    With a thorough brief in hand, our team will create and
                    develop an android app or apple app that is fast,
                    user-friendly, and valuable for your customers.
                  </p>
                </div>
              </div>
            </div>
            <div class="discovery-area-2">
              <div class="discovery-content-3">
                <div class="discovery-number-1">
                  <h2>3.</h2>
                </div>
                <div class="discovery-number-2">
                  <h3>Graphic Design</h3>
                  <p>
                    Here’s where the fun begins. Following your brand and goals,
                    the talented team behind our mobile app development company
                    will create a design your customers will love.
                  </p>
                </div>
              </div>
              <div class="discovery-content-4">
                <div class="discovery-number-1">
                  <h2>4.</h2>
                </div>
                <div class="discovery-number-2">
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
      <div class="mobile-development">
        <div class="container">
          <div class="mobile-development-heading">
            <h2>Talk to us about mobile development today!</h2>
          </div>
          <div class="mobile-development-area">
            <div class="mobile-development1">
              <div class="mobile-development-logo">
                <img
                  src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/Group-512655.png"
                  alt="Mobile App Development"
                />
              </div>
              <div class="mobile-development-content">
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
                <button type="button">Talk To An Expert Now</button>
              </div>
            </div>
            <div class="mobile-development2">
              <img
                src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/03/newimg3.png"
                alt="Mobile App Development"
              />
            </div>
          </div>
          <div class="clr"></div>
        </div>
      </div>
      <OurPartners/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default AppDevelopment;
