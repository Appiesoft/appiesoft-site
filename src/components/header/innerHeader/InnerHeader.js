import React from 'react'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import mainlogoappie from "../../../asset/mainlogoappie.png";
import './InnerHeader.css'
const InnerHeader = () => {
  return (
    <div>
         <header id="masthead" className="site-header inner-hdr pt-lg-5">
        <Container>
          <div className="lft_logo">
            <Link>
              <img src={mainlogoappie} alt="" className="rounded-2" />
            </Link>
          </div>
          <div className="main-mnu">
            <div className="menu-communications-container">
              <ul id="menu-communications" className="menu">
                <li
                  id="menu-item-43"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-43"
                >
                  <Link href="https://telcoictgroup.com/telcoict/telstra-business-partnership/">
                    Telstra Business Partner
                  </Link>
                </li>
                <li
                  id="menu-item-44"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44"
                >
                  <Link href="https://telcoictgroup.com/telcoict/3cx-enterprise-mobility-management/">
                    3CX Apps & Integration
                  </Link>
                </li>
                <li
                  id="menu-item-45"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-45"
                >
                  <Link href="https://telcoictgroup.com/telcoict/office-365-enterprise-mobility-management/">
                    Office 365 Enterprise Mobility Management
                  </Link>
                </li>
                <li
                  id="menu-item-46"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-46"
                >
                  <Link href="https://telcoictgroup.com/telcoict/business-phone-systems/">
                    Business Phone Systems
                  </Link>
                </li>
                <li
                  id="menu-item-47"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47"
                >
                  <Link href="https://telcoictgroup.com/telcoict/ericsson-lg-ipecs/">
                    Ericson LG iPECS
                  </Link>
                </li>
                <li
                  id="menu-item-48"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-48"
                >
                  <Link href="https://telcoictgroup.com/telcoict/nbn-telstra-fibre/">
                    NBN + Telstra Fibre
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>
        </Container>
        <div className="clr"></div>
      </header>
    </div>
  )
}

export default InnerHeader
