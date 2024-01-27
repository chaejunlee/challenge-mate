"use client";

import { useEffect, useState } from "react";
import { MainMap } from "./MainMap";
import { useSearchParams } from "next/navigation";
import Sidebar from "./sidebar";

export default function Main() {
  const [destination, setDestination] = useState<[number, number] | null>(null);
  const params = useSearchParams();

  useEffect(() => {
    if (params.has("destination")) {
      const [longitude, latitude] = params
        .get("destination")!
        .split(",")
        .map(Number);
      if (longitude && latitude) setDestination([longitude, latitude]);
    }
  }, [params]);

  return (
    <>
      <div>
        <Sidebar destination={destination} />
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
