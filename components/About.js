import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Section = ({ title, children }) => (
  <div className="mb-8 text-center">
    <hr className="border-1 border-black w-56 mx-auto mb-4" />

    <h1 className="text-5xl font-bold mb-2">{title}</h1>
    <p className="text-lg">{children}</p>
  </div>
);

export default function About() {
  const markers = [
    {
      position: [59.930669188991544, 10.799199079763515],
      text: "Radisson RED Oslo Økern",
    },
  ];

  return (
    <div className=" mx-auto  max-w-lg px-8 py-10  flex flex-col justify-evenly">
      <Section title="Attire">
        &quot;Formal attire is required for the event. Please come dressed to
        impress in your best formal wear—think elegant gowns and sharp suits to
        make the night memorable!&quot;.
      </Section>
      <hr className="border-1 border-black w-56 mx-auto mb-4" />
      <div className="z-10 mb-8">
        <h1 className="mb-8 text-center"> Location </h1>
        <MapContainer
          center={[59.9319, 10.803]}
          zoom={13}
          className="w-full h-72  md:h-96 "
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker, idx) => (
            <Marker
              key={idx}
              position={marker.position}
              icon={L.icon({
                iconUrl:
                  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
              })}
            >
              <Popup>{marker.text}</Popup>
            </Marker>
          ))}
        </MapContainer>
        <h2>Radisson RED ØKERN </h2>
        <p> Lørenfaret 3, 0585 Oslo</p>
      </div>
      <Section title="Contact">
        For inquiries, you may contact Bro. Bong Nunez or Bro. Don Balbin
      </Section>
      <Section title="Children">
        &quot;To ensure a memorable evening for all, we kindly request no
        children attend, allowing couples to fully enjoy the night.&quot;
      </Section>
    </div>
  );
}
