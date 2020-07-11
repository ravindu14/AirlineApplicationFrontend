import React from "react";

import SubMenu from "components/subMenu";
import Link from "components/Link";

import "./styles.scss";
import Icon from "components/icon";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="">
          <img alt="logo" src={require("assets/image/logo.png")} />
        </Link>
      </div>
      <div className="menu">
        <div className="dashboard-item">
          <Link to="">
            <Icon icon="meter" />
            Dashboard
          </Link>
        </div>
        <SubMenu
          title="Passenger Count"
          icon="person"
          items={[
            {
              title: "Predict Count",
              link: "/passenger/passengerCount",
            },
            {
              title: "View History",
              link: "/passenger/viewPassengerHistory",
            },
          ]}
        />
        <SubMenu
          title="No show passengers"
          icon="bag"
          items={[
            { title: "Predict Count", link: "/passenger/noShowPassengerCount" },
            {
              title: "View History",
              link: "/passenger/viewNoShowPassengerHistory",
            },
          ]}
        />
        <SubMenu
          title="Ticket prices"
          icon="money"
          items={[
            { title: "Predict Count", link: "/passenger/ticketPricing" },
            { title: "View History", link: "/passenger/viewTicketPricing" },
          ]}
        />
      </div>
    </div>
  );
}
