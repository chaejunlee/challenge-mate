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
import { useState } from "react";

const timeSlots = {
  "Feb 14, 2024": [
    "9:00 AM ~ 9:30 AM",
    "1:00 PM ~ 1:30 PM",
    "3:00 PM ~ 3:30 PM",
  ],
  "Feb 16, 2024": [
    "10:00 AM ~ 10:30 AM",
    "2:00 PM ~ 2:30 PM",
    "4:00 PM ~ 4:30 PM",
  ],
  "Feb 20, 2024": [
    "9:00 AM ~ 9:30 AM",
    "1:00 PM ~ 1:30 PM",
    "3:00 PM ~ 3:30 PM",
  ],
  "Feb 22, 2024": [
    "10:00 AM ~ 10:30 AM",
    "2:00 PM ~ 2:30 PM",
    "4:00 PM ~ 4:30 PM",
  ],
  "Feb 23, 2024": [
    "9:00 AM ~ 9:30 AM",
    "1:00 PM ~ 1:30 PM",
    "3:00 PM ~ 3:30 PM",
  ],
};

export default function Appointment({
  destination,
  setDateTime,
}: {
  destination: [number, number];
  setDateTime: (dateTime: string | null) => void;
}) {
  const appointment = getShelter(destination);
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useQueryString();
  const [dt, setDt] = useState<string | null>(null);

  const onClick = () => {
    if (!dt) return;
    const queryString = createQueryString("dateTime", dt);
    router.push(`${pathname}?${queryString}`);
    setDateTime(dt);
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
                                  value={`${slot[0]}@${time}`}
                                  id={`${slot[0]}@${time}`}
                                />
                                <Label htmlFor={`${slot[0]}@${time}`}>
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
