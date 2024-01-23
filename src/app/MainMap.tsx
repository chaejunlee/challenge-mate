"use client";

import DeckGL from "@deck.gl/react/typed";
import { TextLayer, IconLayer } from "@deck.gl/layers/typed";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import { CollisionFilterExtension } from "@deck.gl/extensions/typed";
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

const SHELTER_RGB = [33, 33, 233];
const WORK_RGB = [233, 33, 33];

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

export function MainMap({
  noOverlap = false,
  fontSize = 32,
}: {
  noOverlap?: boolean;
  fontSize?: number;
}) {
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

  const scale = 2 ** location.zoom;
  const sizeMaxPixels = (scale / 3) * fontSize;
  const sizeMinPixels = Math.min(scale / 1000, 0.5) * fontSize;

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
    radius?: number;
    color: [number, number, number];
    price: number;
  };

  const layers = [
    new IconLayer<LayerData>({
      id: "icon-layer",
      data: [
        {
          name: "Me",
          coordinates: [currentLocation.longitude, currentLocation.latitude],
          radius: 16,
          color: [255, 0, 0],
        },
      ],
      pickable: true,
      iconAtlas:
        "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
      iconMapping: ICON_MAPPING,
      getIcon: () => "marker",
      sizeScale: 12,
      getPosition: (d) => d.coordinates,
      getSize: 5,
      getColor: (d) => d.color,
    }),
    new TextLayer<LayerData>({
      id: "shelter-text-layer",
      data: [
        {
          name: "Shelter A",
          coordinates: [-121.878, 37.346],
          color: SHELTER_RGB,
          price: 1000,
        },
        {
          name: "Shelter B",
          coordinates: [-121.868, 37.33],
          color: SHELTER_RGB,
          price: 2000,
        },
        {
          name: "Shelter C",
          coordinates: [-121.888, 37.326],
          color: SHELTER_RGB,
          price: 3000,
        },
      ],
      characterSet: "auto",
      fontSettings: {
        buffer: 8,
      },
      pickable: true,
      getPosition: (d) => d.coordinates,
      getText: (d) => d.name,
      getColor: (d) => d.color,
      getSize: (d) => Math.pow(d.price, 0.5) / 40,

      sizeScale: fontSize,
      sizeMaxPixels,
      sizeMinPixels,
      maxWidth: 64 * 10,

      // @ts-expect-error - collisionEnabled is not in the types
      collisionEnabled: noOverlap,
      getCollisionPriority: (d: LayerData) => Math.log10(d.price),
      collisionTestProps: {
        sizeScale: fontSize * 2,
        sizeMaxPixels: sizeMaxPixels * 2,
        sizeMinPixels: sizeMinPixels * 2,
      },
      extensions: [new CollisionFilterExtension()],
    }),
    new TextLayer<LayerData>({
      id: "work-text-layer",
      data: [
        {
          name: "Work A",
          coordinates: [-121.864, 37.336],
          color: WORK_RGB,
          price: 1000,
        },
        {
          name: "Work B",
          coordinates: [-121.898, 37.336],
          color: WORK_RGB,
          price: 2000,
        },
        {
          name: "Work C",
          coordinates: [-121.855, 37.331],
          color: WORK_RGB,
          price: 3000,
        },
      ],
      characterSet: "auto",
      fontSettings: {
        buffer: 8,
      },
      pickable: true,
      getPosition: (d) => d.coordinates,
      getText: (d) => d.name,
      getColor: (d) => d.color,
      getSize: (d) => Math.pow(d.price, 0.5) / 40,

      sizeScale: fontSize,
      sizeMaxPixels,
      sizeMinPixels,
      maxWidth: 64 * 10,

      // @ts-expect-error - collisionEnabled is not in the types
      collisionEnabled: noOverlap,
      getCollisionPriority: (d: LayerData) => Math.log10(d.price),
      collisionTestProps: {
        sizeScale: fontSize * 2,
        sizeMaxPixels: sizeMaxPixels * 2,
        sizeMinPixels: sizeMinPixels * 2,
      },
      extensions: [new CollisionFilterExtension()],
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
