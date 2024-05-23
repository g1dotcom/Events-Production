"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import supabase from "@/lib/subaseClient";

export default function Map() {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [eventsData, setEventsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (data) {
        // console.log(data[0].latitude, data[0].longitude);
        setLatitude(data[0].latitude);
        setLongitude(data[0].longitude);
        setEventsData(data);
      } else {
        console.error(error);
      }
    };

    fetchLocations();
  }, []);

  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer
      preferCanvas={true}
      center={[35, 0]}
      zoom={1}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "50%", borderRadius: "150px" }}
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
      {eventsData.map((event) => (
        <Marker key={event.id} position={[event.longitude, event.latitude]}>
          <Popup>
            {event.name} {event.city_id} {event.base_portal_link}{" "}
            {event.social_platform_id} {event.event_type_id} {event.language}{" "}
            {event.local_time}
            {event.time_zone} {event.utc_time} {event.longitute}{" "}
            {event.latitude}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
