import React from "react";

import SubMenu from "components/subMenu";
import Link from "components/Link";

import "./styles.scss";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="">
          <img alt="logo" src={require("assets/image/logo.png")} />
        </Link>
      </div>
      <div className="menu">
        <SubMenu title="Dashboard" icon="meter" onClick="/" />
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
            { title: "Predict Count", link: "/noshow/passengerCount" },
            { title: "View History", link: "/noshow/viewPassengerHistory" },
          ]}
        />
        <SubMenu
          title="Ticket prices"
          icon="money"
          items={[
            { title: "Predict Count", link: "/prices/passengerCount" },
            { title: "View History", link: "/prices/viewPassengerHistory" },
          ]}
        />
      </div>
    </div>
  );
}
