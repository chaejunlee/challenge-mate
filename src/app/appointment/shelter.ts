const SHELTER_RGB = [235, 138, 138];

export const shelter = [
  {
    name: "HomeFirst - Sobrato House Youth Center",
    coordinates: [-121.88, 37.32] as [number, number],
    color: SHELTER_RGB,
    price: 1000,
    picture: "/shelter-1.jpeg",
    address: "496 S Third St, San Jose, CA 95112",
    phone: "(408) 539-2180",
  },
  {
    name: "LifeMoves | Montgomery Street Inn",
    coordinates: [-121.9, 37.33] as [number, number],
    color: SHELTER_RGB,
    price: 2000,
    picture: "/shelter-2.jpeg",
    address: "358 N Montgomery St, San Jose, CA 95110",
    phone: "(408) 271-5160",
  },
  {
    name: "Family Supportive Housing",
    coordinates: [-121.86, 37.36] as [number, number],
    color: SHELTER_RGB,
    price: 3000,
    picture: "/shelter-3.jpeg",
    address: "692 N King Rd, San Jose, CA 95133",
    phone: "(408) 926-8885",
  },
];

export const getShelter = (location: [number, number]) =>
  shelter.find(
    (shelter) =>
      shelter.coordinates[0] === location[0] &&
      shelter.coordinates[1] === location[1],
  );
