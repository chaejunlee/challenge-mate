"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { getShelter } from "./shelter";
import { usePathname, useRouter } from "next/navigation";
import { useQueryString } from "./utils";
import { use, useState } from "react";
import { saveAppointment, useAppointmentStore } from "@/lib/state";

const timeSlots = {
  "Jan 29, 2024": ["9:00 ~ 9:30", "13:00 ~ 13:30", "15:00 ~ 15:30"],
  "Jan 31, 2024": ["10:00 ~ 10:30", "14:00 ~ 14:30", "16:00 ~ 16:30"],
  "Feb 14, 2024": ["9:00 ~ 9:30", "13:00 ~ 13:30", "15:00 ~ 15:30"],
  "Feb 16, 2024": ["10:00 ~ 10:30", "14:00 ~ 14:30", "16:00 ~ 16:30"],
  "Feb 20, 2024": ["9:00 ~ 9:30", "13:00 ~ 13:30", "15:00 ~ 15:30"],
  "Feb 22, 2024": ["10:00 ~ 10:30", "14:00 ~ 14:30", "16:00 ~ 16:30"],
  "Feb 23, 2024": ["9:00 ~ 9:30", "13:00 ~ 13:30", "15:00 ~ 15:30"],
};

export default function Appointment({
  destination,
}: {
  destination: [number, number];
}) {
  const appointment = getShelter(destination);
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useQueryString();
  const [dt, setDt] = useState<string | null>(null);
  const pushAppointment = useAppointmentStore((state) => state.pushAppointment);

  const onClick = () => {
    if (!dt || !appointment) return;
    const queryString = createQueryString("dateTime", dt);
    router.push(`${pathname}?${queryString}`);
    pushAppointment({
      ...appointment,
      dateTime: dt,
    });
  };

  return (
    <div className="p-6">
      <Dialog>
        <Card>
          <CardHeader>
            <CardTitle>{appointment?.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-muted">
              {appointment?.picture ? (
                <Image
                  src={appointment.picture}
                  alt=""
                  fill
                  objectFit="cover"
                />
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
          <CardFooter>
            <div className="w-full">
              <DialogTrigger asChild>
                <Button className="w-full">Book Appointment</Button>
              </DialogTrigger>
            </div>
          </CardFooter>
        </Card>
        <DialogContent className="flex max-h-96 flex-col rounded-lg">
          <DialogHeader>
            <DialogTitle>
              Select one of the following available time
            </DialogTitle>
          </DialogHeader>
          <Card className="mt-1 h-full overflow-scroll">
            <CardContent className="h-full overflow-scroll">
              <div className="h-full overflow-scroll">
                <RadioGroup
                  onValueChange={setDt}
                  className="mt-3 h-full overflow-scroll"
                >
                  {Object.entries(timeSlots).map((slot) => {
                    return (
                      <div key={slot[0]} className="my-2 flex flex-col">
                        <h3 className="font-semibold">{slot[0]}</h3>
                        <div className="mt-2 space-y-2">
                          {slot[1].map((time) => {
                            return (
                              <div
                                key={`${slot[0]} ${time}`}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={`${slot[0]}T${time}`}
                                  id={`${slot[0]}T${time}`}
                                />
                                <Label htmlFor={`${slot[0]}T${time}`}>
                                  {time}
                                </Label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
          <DialogFooter className="flex w-full items-center justify-between sm:justify-between">
            <div className="flex items-center gap-1">
              Selected:
              {dt && <DialogDescription>{dt}</DialogDescription>}
            </div>
            <Button type="submit" onClick={onClick}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
