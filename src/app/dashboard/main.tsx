"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAlert, useAppointmentStore } from "@/lib/state";
import { addHours, startOfHour } from "date-fns";
import moment from "moment";
import Link from "next/link";
import { Calendar, type View, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["month", "week", "day", "agenda"];

export default function Main() {
  const appointments = useAppointmentStore((state) => state.appointments);
  const role = useAppointmentStore((state) => state.role);
  const setOpen = useAlert((state) => state.setOpen);

  const events = appointments.map((appointment) => {
    const dateString = appointment.dateTime.split("T") as [string, string];
    const date = new Date(dateString[0]);
    const time = dateString[1].split("~") as [string, string];
    const startTime = time[0].trim().split(":") as [string, string];
    const endTime = time[1].trim().split(":") as [string, string];

    return {
      title: appointment.name,
      start: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        parseInt(startTime[0]),
        parseInt(startTime[1]),
      ),
      end: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        parseInt(endTime[0]),
        parseInt(endTime[1]),
      ),
    };
  });

  return (
    <div className="container mt-6">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-[minmax(10rem,1fr)_minmax(0,2fr)] gap-6">
        <div className="flex flex-col gap-6">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar className="aspect-square h-24 w-24">
                  <AvatarImage
                    src="https://github.com/chaejunlee.png"
                    alt="@chaejunlee"
                  />
                  <AvatarFallback>JH</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-3xl font-semibold">James Harrison</p>
                  <p className="font-semibold text-muted-foreground">{role}</p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="destructive" asChild>
                  <Link href="/api/auth/signout">Sign Out</Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Change Role
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex w-full gap-6">
            <Card className="grow">
              <CardHeader>
                <CardTitle>My Points</CardTitle>
                <CardDescription className="pt-3 text-3xl">15</CardDescription>
              </CardHeader>
            </Card>
            <Card className="grow">
              <CardHeader>
                <CardTitle>My Goals</CardTitle>
                <CardDescription className="pt-3 text-3xl">57%</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Today&apos;s Task</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="pb-1 text-lg font-semibold">
                  Receiving Depression Therapy
                </h3>
                <CardDescription>
                  Welcome to our supportive Challengemate! Prior to seeking
                  employment, participate in depression therapy sessions to
                  prioritize your mental well-being.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/appointment">Make Appointment</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>My Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-full w-full">
                <Calendar
                  localizer={localizer}
                  events={events}
                  defaultView="month"
                  defaultDate={new Date()}
                  style={{ height: 500 }}
                  views={allViews}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
