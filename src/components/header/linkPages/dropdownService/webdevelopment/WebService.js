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
            <h2>Collaboration made easy</h2>
            <p>
              Are you collaborating in the cloud yet? Telco ICT
              <br /> can assist your team to communicate effectively
              <br /> and share effortlessly, providing services for
              <br /> cloud computing.
            </p>
            <p>
              Cloud collaboration services enable you to meet
              <br /> and work on live documents together, enjoy 24/7
              <br /> accessibility, and edit and make changes in real
              <br /> time. Multiple people can work within the same
              <br /> version of a file without duplication, and
              <br /> meeting online to share information is so easy.
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
                <p>A trusted Australian cloud service provider, Telco ICT Group can help you choose the right way to connect and work together for better business results. Contact us to find out how to make a success of cloud collaboration services in your business.</p>
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

