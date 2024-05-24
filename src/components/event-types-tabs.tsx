"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

//images
import Anomally from "../../public/events-types/xmanomaly.png";
import AnomallyBanner from "../../public/events-types/xm-anomaly-photo.jpg";

import { useEffect, useState } from "react";

export function EventTypesTabs() {
  const [activeTab, setActiveTab] = useState<any>([]);

  const eventTypes = [
    {
      name: "Anomaly",
      value: "anomaly",
    },
    {
      name: "Mission Day",
      value: "missionday",
    },
    {
      name: "First Saturday",
      value: "firstsaturday",
    },
  ];

  console.log(activeTab);

  //   const SpanHover = "border-b-2 border-white";
  // className={`w-full lg:w-1/6 md:rounded-l-3xl ${   darkMode ? "dark-light-info shadow-xl shadow-black" : "bg-main-left"  }`}

  return (
    <div className="w-full  flex  justify-center">
      <div className="w-full  flex flex-col items-center space-y-10  h-[450px] relative">
        <button
          onClick={() => setActiveTab(eventTypes[0].value)}
          value={eventTypes[0].value}
          className="text-white flex flex-col items-center w-40  hover:border-white border-[#783cbd] border-b-2 px-4 cursor-pointer"
        >
          <Image width={40} src={Anomally} alt="" />
          <h1>ANOMALY</h1>
        </button>
        <div className="w-full flex justify-center text-white absolute">
          {activeTab === eventTypes[0].value && (
            <div className="w-2/3 flex justify-center space-x-10">
              <Image width={350} src={AnomallyBanner} alt="" />
              <p>
                An Anomaly is a series of events in which two factions compete
                for control of the local XM network. The winning faction will
                gain special rewards.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full  flex flex-col items-center space-y-10  h-[450px] relative">
        <button
          onClick={() => setActiveTab(eventTypes[1].value)}
          value={eventTypes[1].value}
          className="text-white flex flex-col items-center w-40  hover:border-white border-[#783cbd] border-b-2 px-4 cursor-pointer"
        >
          <Image width={40} src={Anomally} alt="" />
          <h1>ANOMALY</h1>
        </button>
        <div className="w-full flex justify-center text-white">
          {activeTab === eventTypes[1].value && (
            <div className="w-2/3 flex justify-center space-x-10">
              <Image width={350} src={AnomallyBanner} alt="" />
              <p>
                An Anomaly is a series of events in which two factions compete
                for control of the local XM network. The winning faction will
                gain special rewards.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* <button
        onClick={() => setActiveTab(eventTypes[1].value)}
        value={eventTypes[1].value}
        className="text-white flex flex-col items-center  hover:border-white border-[#783cbd] border-b-2 px-4 cursor-pointer"
      >
        <Image width={40} src={Anomally} alt="" />
        <h1>Mission Day</h1>
        {activeTab === eventTypes[1].value && (
          <div className="w-1/6 h-1 bg-white">Mission Day</div>
        )}
      </button>

      <button
        onClick={() => setActiveTab(eventTypes[2].value)}
        value={eventTypes[2].value}
        className="text-white flex flex-col items-center  hover:border-white border-[#783cbd] border-b-2 px-4 cursor-pointer"
      >
        <Image width={40} src={Anomally} alt="" />
        <h1>First Saturday</h1>
        {activeTab === eventTypes[2].value && (
          <div className="w-1/6 h-1 bg-white">First Saturday</div>
        )}
      </button> */}
    </div>
  );
}
