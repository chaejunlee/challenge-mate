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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { shelter } from "./shelter";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useQueryString } from "./utils";

export default function Task({
  setDestination,
}: {
  setDestination: (destination: [number, number] | null) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useQueryString();

  return (
    <Dialog>
      <div className="p-6">
        <h1 className="mb-6 text-3xl font-bold">Today&apos;s Task</h1>
        <Card>
          <CardHeader>
            <CardTitle>Receiving Depression Therapy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Welcome to our supportive Challengemate! Prior to seeking
              employment, participate in depression therapy sessions to
              prioritize your mental well-being.
            </p>
          </CardContent>
          <CardFooter>
            <DialogTrigger asChild>
              <Button className="w-full">Make an Appointment</Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Next Tasks</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col divide-y-2">
            <div className="pb-3">
              <Link className="hover:underline" href="/task">
                Meeting with a Counselor for Temporary Accommodation
              </Link>
            </div>
            <div className="py-3">
              <Link className="hover:underline" href="/task">
                Selecting Temporary Accommodation and Completing Documentation
              </Link>
            </div>
            <div className="pt-3">
              <Link className="hover:underline" href="/task">
                Getting a Hair Trim
              </Link>
            </div>
          </CardContent>
        </Card>
        <DialogContent>
          <DialogTitle>Places To Visit</DialogTitle>
          <div className="mt-2 space-y-6">
            {shelter.map((s) => {
              return (
                <Card
                  onClick={(e) => {
                    e.preventDefault();
                    const queryString = createQueryString(
                      "destination",
                      s.coordinates.join(","),
                    );
                    setDestination(s.coordinates);
                    router.push(`${pathname}?${queryString}`);
                  }}
                  key={s.coordinates.join(",")}
                  className="cursor-pointer overflow-hidden hover:bg-muted"
                >
                  <div key={s.name} className="flex items-center space-x-4">
                    <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden bg-muted bg-cover">
                      <Image src={s.picture} alt="" fill objectFit="cover" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold">{s.name}</h3>
                      <p className="text-muted-foreground">{s.address}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
