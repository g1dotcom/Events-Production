import React from "react";
import { EventTypesTabs } from "./event-types-tabs";

const Header = () => {
  return (
    <div className="w-full  flex flex-col items-center space-y-12 py-16 bg-gradient-to-r from-[#311754] to-[#020024] ">
      <div className="w-full flex justify-center text-white">
        <h1 className="w-[770px] flex justify-center text-center">
          Each and every day, the Ingress community is mobilizing. From Anomaly
          Events to Cross Faction Meetups to monthly First Saturday events,
          Ingress is happening all around you. Learn about the different event
          types hosted below.
        </h1>
      </div>

      <EventTypesTabs />
    </div>
  );
};

export default Header;
