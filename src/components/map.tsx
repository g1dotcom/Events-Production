"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import supabase from "@/lib/subaseClient";

export default function Map({
  myEvent,
  myeventTypes,
}: {
  myEvent: any;
  myeventTypes: any;
}) {
  const events = myEvent;
  console.log(events, "event data...");

  const eventTypes = myeventTypes;
  console.log(eventTypes, "eventTypes data...");

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     const { data, error } = await supabase.from("events").select("*");
  //     if (data) {
  //       console.log(data[0].latitude, data[0].longitude, "location data...");

  //       setEventsData(data);
  //     } else {
  //       console.error(error);
  //     }
  //   };

  //   fetchLocations();
  // }, []);

  // useEffect(() => {
  //   const fetchEventTypes = async () => {
  //     const { data, error } = await supabase.from("event_types").select("*");
  //     if (data) {
  //       setEventTypes(data);
  //     } else {
  //       console.error(error);
  //     }
  //   };

  //   fetchEventTypes();
  // }, []);

  const combinedData = events.map((event: any) => {
    const eventType = eventTypes.find(
      (type: any) => type.id === event.eventTypeId
    );
    return {
      ...event,
      eventTypeName: eventType ? eventType.name : "Unknown",
    };
  });

  if (typeof window == "undefined") {
    console.log(window);
  }

  if (typeof window !== "undefined") {
    console.log(window);
  }

  return (
    <MapContainer
      preferCanvas={true}
      center={[35, 0]}
      zoom={1}
      scrollWheelZoom={true}
      style={{
        height: "400px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          This Marker icon is displayed correctly with{" "}
          <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker> */}
      {combinedData.map((event: any) => (
        <Marker key={event.id} position={[event.longitude, event.latitude]}>
          <Popup>
            <div>
              <h1 className="font-bold border-black border-b-2">
                {event.name}
              </h1>
              <p>Event Type: {event.eventTypeName}</p>
              <p>Language: {event.language}</p>
              <p>Start Time: {event.local_time}</p>
              <p>Time Zone: {event.time_zone}</p>
              <p>UTC Time: {event.utc_time}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* </div>
           <div className="flex flex-col w-full">
              <p className="w-full"> Event Type: {event.event_type_id}</p>
              <p> Language: {event.language}</p>
              <p> Start Time: {event.local_time}</p> Time Zone: UTC -4 :{" "}
              <p> {event.utc_time}</p>
            </div>
          </Popup>
        </Marker> */}
      {/* ))} */}
    </MapContainer>
  );
}
