"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

export function EventTypesTabs() {
  const [activeTab, setActiveTab] = useState<string>("");

  const eventTypes = [
    {
      name: "ANOMALY",
      value: "xmanomaly",
      description:
        "An Anomaly is a series of events in which two factions compete for control of the local XM network. The winning faction will gain special rewards.",
      descriptionImage: "xm-anomaly-photo",
    },
    {
      name: "HEXATHLON",
      value: "hexathlon1",
      description:
        "At Hexathlons, you will have a limited time to complete six challenges. Your results will be ranked on a leaderboard, for the chance to earn an elite Hexathlon medal!",
      descriptionImage: "xm-anomaly-photo",
    },
    {
      name: "MISSION DAY",
      value: "missionday",
      description:
        "During Mission Days, explore and interact with highlighted landmarks during simple but fun in-game missions within a specified city.Want to host your own? Find out more!",
      descriptionImage: "mission-day-photo",
    },
    {
      name: "NL-1331",
      value: "nl1331",
      description:
        "NL-1331 features casual missions aiming to explore different cities and locales using a special Ingress-customized vehicle called the `XM Detection Mobile Lab`.",
      descriptionImage: "nl-1331-photo",
    },
    {
      name: "FIRST SATURDAY",
      value: "firstsaturday",
      description:
        "Join player-hosted local events on the first Saturday of each month to welcome new Agents into Ingress and socialize with members of both factions.Want to host your own? Find out more!",

      descriptionImage: "first-saturday-photo",
    },
    {
      name: "TKO",
      value: "tko",
      description:
        "Agents will undertake challenging physical workouts and obstacles with the TKO (Tactical Kinetic Operations division) to push their limits and explore their potential.",
      descriptionImage: "tko-photo",
    },
    {
      name: "SPECIAL EVENTS",
      value: "specialevents",
      description:
        "Special Events are unique Ingress events that may be creative endeavors, exceptional challenges, or personal adventures.",
      descriptionImage: "special-events-photo",
    },
  ];

  const getActiveEvent = () =>
    eventTypes.find((event) => event.value === activeTab);
  eventTypes.find((event) => {
    event.descriptionImage === activeTab;
  });

  useEffect(() => {
    setActiveTab(eventTypes[0].value);
    // sürekli olarak ilk değeri çağırdığı için diğerlerine geçiş yapamıyor o yüzden activeTab buradan kaldırdık
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                width: 50,
                height: 100,
                position: "relative",
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
              height={350}
              width={350}
              src={`/events/${getActiveEvent()?.descriptionImage}.jpg`}
              alt={getActiveEvent()?.name ?? ""}
            />
            <p className="w-[700px]">{getActiveEvent()?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
