"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Appointment from "./appointment";
import Task from "./task";
import { getShelter } from "./shelter";
import Image from "next/image";

export default function Sidebar({
  destination,
  setDestination,
  dateTime,
  setDateTime,
}: {
  destination: [number, number] | null;
  setDestination: (destination: [number, number] | null) => void;
  dateTime: string | null;
  setDateTime: (dateTime: string | null) => void;
}) {
  if (!destination) return <Task setDestination={setDestination} />;
  if (!dateTime)
    return <Appointment destination={destination} setDateTime={setDateTime} />;

  const appointment = getShelter(destination);
  const [date, time] = dateTime.split("@");

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>{appointment?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-muted">
            {appointment?.picture ? (
              <Image src={appointment.picture} alt="" fill objectFit="cover" />
            ) : (
              <div className="text-muted-foreground">No Image</div>
            )}
          </div>
          <div className="mt-4 text-sm">
            <h3 className="font-semibold">Address</h3>
            <p className="text-muted-foreground">{appointment?.address}</p>
            <h3 className="mt-2 font-semibold">Phone</h3>
            <p className="text-muted-foreground">{appointment?.phone}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Your Appointment is on</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border bg-muted p-6">
            <div className="text-center text-lg font-semibold">{date}</div>
            <div className="text-center text-lg font-semibold">{time}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
