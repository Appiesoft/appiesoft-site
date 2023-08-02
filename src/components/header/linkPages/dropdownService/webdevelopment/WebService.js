import React from 'react';
import "./WebService.css";
import Header from "../../../Header";
import Footer from "../../../../footer/Footer";
import groupImg from "../../../../../asset/Groupimg.png";
import OurPartners from "../../../../servicePage/ourPartners/OurPartners";
import Contact from "../../../../servicePage/contactUS/Contact";
const WebService = () => {
  
  return (
    <div>
      <Header />
      <div class="web_inner_banner">
        <div class="container">
          <h1>Web Development Services</h1>
        </div>
      </div>
      <section class="ict-sec-one">
        <div class="my_wrap">
          <div class="business-commun-text">
            <h2>Web Development</h2>
            <p>
            We at AppieSoft web solutions are establishing service providers of custom web development ,web programming services in London. We had made a lively website as per customer precondition,counting the programming platform which they put forward. We have an expert team of web developers,web programmers which deliver pioneering website programming services at a variety of web programming platforms.
            </p>
            <p>
            AppieSoft Web Solutions is a web development company having 5 years of experience in building web applications. Our dedicated web app developers have successfully completed over 300 projects for a variety of industries and business domains, including e-Commerce, e-Learning, Analytics, Finance, Magento. Web development services will come into portrait
            </p>
            <button type="button">Talk To An Expert Now</button>
          </div>
          <div class="commun-img-area">
            <img src={groupImg} alt="appiesoft Consulting" />
          </div>
          <div class="clr"></div>
        </div>
      </section>
      <section class="ict-sec-six ">
        <div class="container">
          <div class="service_Australia aos-init aos-animate"  >
            <div class="share_point" data-aos="fade-up" >
              <h3>
                Our team specialise in providing
                <br /> advice and assistance on cloud
                <br /> services Australia via OneDrive,
                <br /> SharePoint or Microsoft Teams.
              </h3>
              <div class="image_part">
                <div class="drive">
                  <img
                    src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/04/Group-512708-4.png"
                    alt="Cloud Collabrations"
                  />
                  <p>OneDrive</p>
                </div>
                <div class="drive">
                  <img
                    src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/04/icon61.png"
                    alt="Cloud Collabrations"
                  />
                  <p>SharePoint</p>
                </div>
                <div class="drive">
                  <img
                    src="https://telcoictgroup.com/telcoict/wp-content/uploads/2023/04/icon62.png"
                    alt="Cloud Collabrations"
                  />
                  <p>Microsoft Teams</p>
                </div>
              </div>
            <span>
            <button type="button">Talk To An Expert Now</button>
            </span>
            </div>
            <div class="one_drive">
              <div data-aos="fade-up">
                <h2>SharePoint</h2>
                <p >
                  An online content management tool that enables users to store
                  files in the cloud for sharing and collaboration. SharePoint
                  saves time by eliminating the need for multiple tasks and
                  project management platforms.
                </p>
              </div>
              <div data-aos="fade-up">
                <h2>Easy project management.</h2>
                <p>
                  File sharing with internal and external users and manage
                  content such as images, articles, source codes and videos.
                </p>
              </div>
              <div data-aos="fade-up">
                <h2>Real-time collaboration.</h2>
                <p>
                  Create an intranet where all collaborators on a project,
                  including external freelancers, can work securely on a file or
                  document. Develop sites and subsites for decluttering teams
                  and tasks and staying in touch with the collaborator through a
                  communication site.
                </p>
              </div>
              <div data-aos="fade-up">
                <h2>One-point administration.</h2>
                <p>
                  A centralised administrator is able to control access so each
                  user can seamlessly open, edit, and save files.
                </p>
              </div>
              <div data-aos="fade-up">
                <h2>Stay on top of workflow.</h2>
                <p>
                  Create workflows and reminders to automate projects and tasks
                  and use the search function to look for resources, tasks or
                  files.
                </p>
              </div>
              <div data-aos="fade-up">
                <h2>Manage on the go.</h2>
                <p>
                  The SharePoint mobile app allows users to access team or
                  communication sites from smartphones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="ict-last-section">
        <div class="container">
            <div class="prple-sctn-light">
                <p>Appiesoft Web Solutions is a team of Digital Marketing experts, Website Designers, and Developers that understand the value of your Brand or Product. As a Digital Marketing expert/Website Design and Development organization, we have finished 500+ projects over the world.</p>
               <span>Talk To An Expert Now</span>
            </div>
        </div>
	
</div>
      <OurPartners />
      <Contact />
      <Footer />
    </div>
  );
};

export default WebService;

