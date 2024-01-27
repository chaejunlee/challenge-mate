"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Task() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Today&apos;s Task</h1>
      <Card>
        <CardHeader>
          <CardTitle>Receiving Depression Therapy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Welcome to our supportive Challengemate! Prior to seeking
            employment, participate in depression therapy sessions to prioritize
            your mental well-being.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Make an Appointment</Button>
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
    </div>
  );
}
