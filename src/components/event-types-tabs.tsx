"use client";

import Image from "next/image";

//images
import AnomallyBanner from "../../public/events/xm-anomaly-photo.jpg";

import { useState } from "react";

export function EventTypesTabs() {
  const [activeTab, setActiveTab] = useState<string>("");

  const eventTypes = [
    {
      name: "Anomaly",
      value: "xmanomaly",
      description:
        "An Anomaly is a series of events in which two factions compete for control of the local XM network. The winning faction will gain special rewards.",
    },
    {
      name: "Mission Day",
      value: "missionday",
      description:
        "Mission Day is an event where players explore the world around them by completing missions.",
    },
    {
      name: "First Saturday",
      value: "firstsaturday",
      description:
        "First Saturday is a casual meetup for Ingress players to socialize, hack portals, and work on their mission badges.",
    },

    {
      name: "NL-1331",
      value: "nl1331",
      description:
        "First Saturday is a casual meetup for Ingress players to socialize, hack portals, and work on their mission badges.",
    },
    {
      name: "Special Events",
      value: "specialevents",
      description:
        "First Saturday is a casual meetup for Ingress players to socialize, hack portals, and work on their mission badges.",
    },
    {
      name: "TKO",
      value: "tko",
      description:
        "First Saturday is a casual meetup for Ingress players to socialize, hack portals, and work on their mission badges.",
    },
    {
      name: "Hexathlon",
      value: "hexathlon1",
      description:
        "First Saturday is a casual meetup for Ingress players to socialize, hack portals, and work on their mission badges.",
    },
  ];

  const getActiveEvent = () =>
    eventTypes.find((event) => event.value === activeTab);

  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="w-full flex justify-center   p-5">
        {eventTypes.map((event) => (
          <button
            key={event.name}
            onClick={() => setActiveTab(event.value)}
            className={`text-white flex flex-col items-center w-40 hover:border-white border-b-2  cursor-pointer ${
              activeTab === event.value ? "border-white" : "border-[#783cbd]"
            }`}
          >
            <div
              style={{
                width: 100,
                height: 100,
                position: "relative",
                marginBottom: 10,
              }}
            >
              <Image
                src={`/events/${event.value}.png`}
                layout="fill"
                objectFit="contain"
                alt={event.name}
              />
            </div>
            <h1>{event.name}</h1>
          </button>
        ))}
      </div>
      <div className="w-full flex justify-center text-white  mt-5 p-5">
        {getActiveEvent() && (
          <div className="w-full flex justify-center space-x-10">
            <Image
              width={350}
              src={AnomallyBanner}
              alt={getActiveEvent()?.name ?? ""}
            />
            <p>{getActiveEvent()?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
