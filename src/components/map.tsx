"use client";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

type Props = {};

const Map = (props: Props) => {
  return (
    <div className="w-full flex justify-center ">
      <MapContainer
        className="w-[800px] h-[500px]"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
