"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function GoogleMapsWrapper() {
  const mapRef = useRef(null);

  useEffect(() => {
    const iniMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
          version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");
        const position = { lat: 59.930669188991544, lng: 10.799199079763515 };

        const mapOptions = {
          center: position,
          zoom: 15,
          mapId: "1327cd3121347aa7",
        };

        new Map(mapRef.current, mapOptions);
      } catch (error) {
        console.error("Failed to load Google Maps:", error);
      }
    };

    iniMap();
  }, []);

  return <div ref={mapRef} className="h-96 md:w-full rounded-lg shadow-md" />;
}
