"use client";

import { Route, getRoute } from "@/lib/getRoute";
import { CollisionFilterExtension } from "@deck.gl/extensions/typed";
import {
  TextLayer,
  GeoJsonLayer,
  ScatterplotLayer,
} from "@deck.gl/layers/typed";
import DeckGL from "@deck.gl/react/typed";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import {
  AttributionControl,
  FullscreenControl,
  Map,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

const SHELTER_RGB = [33, 33, 233];
const ROAD_RGB = [33, 33, 33] as [number, number, number];
const DESTINATION_RGB = [100, 100, 100];

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

export function MainMap({
  noOverlap = false,
  fontSize = 32,
  destination,
  setDestination,
}: {
  noOverlap?: boolean;
  fontSize?: number;
  destination: [number, number] | null;
  setDestination: (destination: [number, number] | null) => void;
}) {
  const [currentLocation, setCurrentLocation] = useState({
    longitude: -121.87,
    latitude: 37.33,
  });

  const [geoJson, setGeoJson] = useState<Route | null>(null);
  const [location, setLocation] = useState({
    ...currentLocation,
    zoom: 13,
    pitch: 0,
    bearing: 0,
  });

  const scale = 2 ** location.zoom;
  const sizeMaxPixels = (scale / 3) * fontSize;
  const sizeMinPixels = Math.min(scale / 1000, 0.5) * fontSize;

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
      setLocation((prev) => ({
        ...prev,
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      }));
    });
  }, []);

  useEffect(() => {
    if (destination) {
      const route = async () => {
        const data = await getRoute(
          [currentLocation.longitude, currentLocation.latitude],
          destination,
        );
        if (data) {
          setGeoJson(data);
          setLocation((prev) => ({
            ...prev,
            longitude: (currentLocation.longitude + destination[0]) / 2,
            latitude: (currentLocation.latitude + destination[1]) / 2,
          }));
        }
      };
      route().catch(console.error);
    }
  }, [destination, currentLocation]);

  type LayerData = {
    name: string;
    coordinates: [number, number];
    radius?: number;
    color: [number, number, number];
    price: number;
  };

  const locationPoint = [
    {
      name: "Me",
      coordinates: [currentLocation.longitude, currentLocation.latitude],
      radius: 64,
      color: [255, 0, 0],
    },
    destination && {
      name: "Destination",
      coordinates: destination,
      radius: 64,
      color: DESTINATION_RGB,
    },
  ];

  const layers = [
    geoJson
      ? new GeoJsonLayer({
          ...geoJson,
          pickable: true,
          stroked: false,
          filled: true,
          extruded: true,
          pointType: "circle",
          lineWidthScale: 10,
          lineWidthMinPixels: 2,
          getFillColor: [160, 160, 180, 200],
          getLineColor: (d) => ROAD_RGB,
          getPointRadius: 100,
          getLineWidth: 2,
          getElevation: 5,
        })
      : null,
    new ScatterplotLayer<LayerData>({
      id: "scatterplot-layer",
      data: locationPoint.filter(Boolean),
      pickable: true,
      getPosition: (d) => d.coordinates,
      getRadius: (d) => d.radius!,
      getColor: (d) => d.color,
    }),
    new TextLayer<LayerData>({
      id: "shelter-text-layer",
      data: [
        {
          name: "HomeFirst - Sobrato House Youth Center",
          coordinates: [-121.88, 37.32],
          color: SHELTER_RGB,
          price: 1000,
        },
        {
          name: "LifeMoves | Montgomery Street Inn",
          coordinates: [-121.9, 37.33],
          color: SHELTER_RGB,
          price: 2000,
        },
        {
          name: "Family Supportive Housing",
          coordinates: [-121.86, 37.36],
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
      getSize: (d) => Math.pow(d.price, 0.2) / 40,

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

      onClick: (e) => {
        if (!e.object) {
          return;
        }
        const object = e.object as {
          coordinates: [number, number];
        };
        if (!object) {
          return;
        }
        const coordinates = object.coordinates;

        if (coordinates)
          if (coordinates[0] == null || coordinates[1] == null) {
            return;
          }
        setDestination([coordinates[0], coordinates[1]]);
      },
    }),
  ];

  return (
    <div className="relative h-full w-full">
      <DeckGL initialViewState={location} controller layers={layers}>
        <Map
          attributionControl={false}
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
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
