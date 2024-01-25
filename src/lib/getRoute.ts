import { MapboxDirections } from "./types";

export const getRoute = async (
  start: [number, number],
  end: [number, number],
) => {
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
    { method: "GET" },
  );
  const json = (await query.json()) as MapboxDirections;
  const data = json.routes[0];
  if (!data) {
    return null;
  }

  const route = data.geometry.coordinates;
  console.log(route);
  const geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route,
    },
  };

  return {
    id: "route",
    type: "line",
    data: geojson,
  };
};

export type Route = Awaited<ReturnType<typeof getRoute>>;
