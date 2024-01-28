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
import {
  people,
  progress,
  progressStep,
  useAlert,
  useAppointmentStore,
  useProgress,
} from "@/lib/state";
import moment from "moment";
import Link from "next/link";
import { Calendar, momentLocalizer, type View } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { shelter } from "../appointment/shelter";
import { useQueryString } from "../appointment/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["month", "week", "day", "agenda"];

export default function Main() {
  const appointments = useAppointmentStore((state) => state.appointments);
  const role = useAppointmentStore((state) => state.role);
  const setOpen = useAlert((state) => state.setOpen);

  const person = people.filter((v) => v.role === role)[0];

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
      <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
      <div className="mt-6 grid grid-cols-[minmax(0,2fr)_minmax(10rem,1fr)] gap-6">
        <div className="flex flex-col gap-6">
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
          {role === "challenger" ? (
            <ChallengerProgress />
          ) : (
            <ChallengeMateHistory />
          )}
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar className="aspect-square h-24 w-24 object-cover">
                  <AvatarImage
                    src={person?.picture ?? ""}
                    alt={person?.name ?? ""}
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {person?.name
                      .split(" ")
                      .map((v) => v[0]?.toUpperCase())
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-3xl font-semibold">{person?.name}</p>
                  <p className="font-semibold text-muted-foreground">
                    {role
                      ?.split("-")
                      .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
                      .join(" ")}
                    {person?.role === "challenge-supporter"
                      ? `, ${person.profession}`
                      : ""}
                  </p>
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
          {role === "challenger" ? (
            <ChallengerProfile />
          ) : (
            <ChallengeMateProfile />
          )}
        </div>
      </div>
    </div>
  );
}

function ChallengerProfile() {
  return (
    <>
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
    </>
  );
}

function ChallengeMateProfile() {
  return (
    <>
      <div className="grid w-full grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>You&apos;ve Helped</CardTitle>
            <CardDescription className="pt-3 text-3xl">23</CardDescription>
            <p className="font-semibold text-muted-foreground">Challengers</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>You Have</CardTitle>
            <CardDescription className="pt-3 text-3xl">3</CardDescription>
            <p className="font-semibold text-muted-foreground">Appointments</p>
          </CardHeader>
        </Card>
      </div>
      <div>
        <Card className="grow">
          <CardHeader>
            <CardTitle>Total Hours</CardTitle>
            <CardDescription className="pt-3 text-3xl">12.5</CardDescription>
            <p className="font-semibold text-muted-foreground">Hours</p>
          </CardHeader>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Potential Opportunity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-6">
              {shelter.map((s) => {
                return (
                  <Card
                    key={s.coordinates.join(",")}
                    className="cursor-pointer overflow-hidden hover:bg-muted"
                  >
                    <div key={s.name} className="flex items-center space-x-4">
                      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden bg-muted bg-cover">
                        <Image src={s.picture} alt="" fill objectFit="cover" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-semibold">{s.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {s.address}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function ChallengerProgress() {
  const currentStep = useProgress((state) => state.step);
  const stepIdx = progressStep[currentStep];
  const currentProgress = useProgress((state) => state.progress);
  const progressPercent = Math.floor((stepIdx / progress.length) * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">My Goals</CardTitle>
        <div className="flex items-center justify-center gap-6 pt-6">
          <Progress value={progressPercent} />
          {progressPercent}%
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {progress.map((v, i) => {
            const finished = i < stepIdx;
            const current = i === stepIdx;
            return (
              <AccordionItem key={i} value={v.step}>
                <AccordionTrigger>
                  <CardTitle className="pb-1 text-lg font-semibold">
                    {finished ? (
                      <span>✅ </span>
                    ) : current ? (
                      <span>🎯 </span>
                    ) : (
                      <span>📋 </span>
                    )}
                    {v.step
                      .split(" ")
                      .map((v) => v[0]!.toUpperCase() + v.slice(1))
                      .join(" ")}
                  </CardTitle>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 px-6 pb-6">
                  {v.activities.map((v) => {
                    return (
                      <div
                        key={v}
                        className={cn(
                          v === currentProgress && "font-bold",
                          finished && "text-muted-foreground",
                        )}
                      >
                        {v[0]!.toUpperCase() + v.slice(1)}
                      </div>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}

function ChallengeMateHistory() {
  const appointments = useAppointmentStore((state) => state.appointments);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>My History</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {appointments
            .filter((v) => {
              const date = new Date(v.dateTime.split("T")[0]!);
              return date < new Date();
            })
            .map((props) => {
              return (
                <div key={props.name}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="pb-1 text-lg font-semibold">
                        {props.name}
                      </CardTitle>
                      <CardDescription>
                        <span className="font-semibold text-black">
                          Location:{" "}
                        </span>
                        {props.address}
                      </CardDescription>
                      <CardDescription>
                        <span className="font-semibold text-black">
                          Date & Time:{" "}
                        </span>
                        {props.dateTime.split("T").join(" ")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
        </CardContent>
      </Card>
    </div>
  );
}
