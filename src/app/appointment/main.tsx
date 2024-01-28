"use client";

import { useEffect, useState } from "react";
import { MainMap } from "./main-map";
import { useSearchParams } from "next/navigation";
import Sidebar from "./sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Main() {
  const [destination, setDestination] = useState<[number, number] | null>(null);
  const [dateTime, setDateTime] = useState<string | null>(null);

  const params = useSearchParams();

  useEffect(() => {
    if (params.has("destination")) {
      const [longitude, latitude] = params
        .get("destination")!
        .split(",")
        .map(Number);
      if (longitude && latitude) {
        setDestination([longitude, latitude]);
        return;
      }
    }
    setDestination(null);
  }, [params]);

  useEffect(() => {
    if (params.has("dateTime")) {
      const dateTime = params.get("dateTime");
      if (dateTime) {
        setDateTime(dateTime);
        return;
      }
    }
    setDateTime(null);
  }, [params]);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={40} minSize={10} maxSize={50}>
        <div className="h-full overflow-scroll">
          <Sidebar
            destination={destination}
            setDestination={setDestination}
            dateTime={dateTime}
            setDateTime={setDateTime}
          />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>
        <MainMap destination={destination} setDestination={setDestination} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
