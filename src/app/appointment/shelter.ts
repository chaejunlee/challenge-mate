const SHELTER_RGB = [33, 33, 233];

export const shelter = [
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
];

export const getShelter = (location: [number, number]) =>
  shelter.find(
    (shelter) =>
      shelter.coordinates[0] === location[0] &&
      shelter.coordinates[1] === location[1],
  );
