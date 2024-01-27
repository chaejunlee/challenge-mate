"use client";

import Appointment from "./appointment";
import Task from "./task";

export default function Sidebar({
  destination,
}: {
  destination: [number, number] | null;
}) {
  if (!destination) return <Task />;

  return <Appointment destination={destination} />;
}
