"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      preferCanvas={true}
      center={[51.505, -0.09]}
      zoom={11}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "%100" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          This Marker icon is displayed correctly with{" "}
          <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
      <Marker position={[38.508156, 27.07854]}>
        <Popup>
          This Marker icon is displayed correctly with{" "}
          <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
