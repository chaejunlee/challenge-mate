"use client";

import { useState } from "react";
import { MainMap } from "./main-map";
import Task from "./task";

export default function Main() {
  const [destination, setDestination] = useState<[number, number] | null>(null);

  return (
    <>
      <div>
        <Task />
      </div>
      <div>
        <MainMap
          noOverlap
          fontSize={28}
          destination={destination}
          setDestination={setDestination}
        />
      </div>
    </>
  );
}
