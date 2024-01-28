"use client";

import { type Route, getRoute } from "@/lib/getRoute";
import { CollisionFilterExtension } from "@deck.gl/extensions/typed";
import {
  IconLayer,
  GeoJsonLayer,
  ScatterplotLayer,
} from "@deck.gl/layers/typed";
import DeckGL from "@deck.gl/react/typed";
import "mapbox-gl/dist/mapbox-gl.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AttributionControl,
  FullscreenControl,
  Map,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { shelter } from "./shelter";
import { useQueryString } from "./utils";

export const ROAD_RGB = [33, 36, 217] as [number, number, number];
export const DESTINATION_RGB = [233, 44, 38];

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

export function MainMap({
  destination,
  setDestination,
}: {
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
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useQueryString();

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
    offset?: number;
  };

  const destinationPoint = {
    name: "Destination",
    coordinates: destination,
    radius: 64,
    color: DESTINATION_RGB,
    offset: 16,
  };

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
      id: "location-point-layer",
      data: [
        {
          name: "Me",
          coordinates: [currentLocation.longitude, currentLocation.latitude],
          radius: 64,
          color: [14, 119, 194],
        },
      ],
      pickable: true,
      stroked: true,
      filled: true,
      radiusScale: 6,
      radiusMinPixels: 6,
      lineWidthMinPixels: 8,
      getPosition: (d) => d.coordinates,
      getRadius: (d) => 16,
      getFillColor: (d) => d.color,
      getLineColor: (d) => [205, 230, 250],
      getLineWidth: 2,
    }),
    new IconLayer<LayerData>({
      id: "shelter-icon-layer",
      data: [...shelter, destinationPoint].filter(Boolean) as LayerData[],
      iconAtlas:
        "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
      iconMapping: ICON_MAPPING,
      pickable: true,
      sizeScale: 8,
      getIcon: (d) => "marker",
      getPosition: (d) => d.coordinates,
      getColor: (d) => d.color,
      getSize: (d) => 5,
      getPixelOffset: (d) => [0, -20],

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

        router.push(
          `${pathname}?${createQueryString("destination", coordinates.join(","))}`,
        );

        setDestination([coordinates[0], coordinates[1]]);
      },
    }),
  ];

  return (
    <div className="relative h-full w-full">
      <DeckGL
        initialViewState={location}
        controller
        layers={layers}
        getTooltip={({ object }) => {
          const ob = object as {
            name: string;
            address: string;
          };
          return ob && `${ob.name}\n${ob.address}`;
        }}
      >
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
