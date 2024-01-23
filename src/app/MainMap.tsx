"use client";

import DeckGL from "@deck.gl/react/typed";
import { ScatterplotLayer } from "@deck.gl/layers/typed";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import {
  AttributionControl,
  FullscreenControl,
  Map,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY2hhZWp1bmxlZWUiLCJhIjoiY2xycGs1d3JrMDI2cjJyczdhYmNiZmhvYiJ9.F8shYQi9nomU8xx2ng83fQ";

export function MainMap() {
  const [currentLocation, getCurrentLocation] = useState({
    longitude: -121.87,
    latitude: 37.33,
  });

  // Viewport settings
  const location = {
    ...currentLocation,
    zoom: 14,
    pitch: 0,
    bearing: 0,
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      getCurrentLocation({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
  }, []);

  type LayerData = {
    name: string;
    coordinates: [number, number];
    radius: number;
  };

  const layers = [
    new ScatterplotLayer<LayerData>({
      id: "You are here",
      data: [
        {
          name: "Me",
          coordinates: [currentLocation.longitude, currentLocation.latitude],
          radius: 32,
        },
      ],
      stroked: false,
      filled: true,
      getPosition: (d) => d.coordinates,
      getRadius: (d) => d.radius,
      getFillColor: [255, 0, 0],
    }),
  ];

  return (
    <div className="relative h-full w-full">
      <DeckGL initialViewState={location} controller layers={layers}>
        <Map
          attributionControl={false}
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        >
          <NavigationControl position="top-right" />
          <FullscreenControl position="top-right" />
          <AttributionControl position="bottom-right" />
          <ScaleControl position="bottom-right" />
        </Map>
      </DeckGL>
    </div>
  );
}
