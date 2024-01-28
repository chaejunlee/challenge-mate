"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAlert, useAppointmentStore } from "@/lib/state";
import { type ReactNode } from "react";

export default function Alert({ children }: { children: ReactNode }) {
  const setRole = useAppointmentStore((state) => state.setRole);
  const role = useAppointmentStore((state) => state.role);
  const open = useAlert((state) => state.open);
  const setOpen = useAlert((state) => state.setOpen);

  return (
    <AlertDialog open={open}>
      {children}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Profile</AlertDialogTitle>
          <AlertDialogDescription>
            Set your role of your profile
          </AlertDialogDescription>
        </AlertDialogHeader>
        <RadioGroup
          defaultValue={role ?? undefined}
          onValueChange={(value) => {
            setRole(value as "challenger" | "challenge-supporter");
          }}
          className="flex flex-col gap-6 text-xl"
        >
          <div className="flex items-start gap-3">
            <RadioGroupItem
              className="mt-1 h-6 w-6"
              value="challenger"
              id="challenger"
            />
            <Label className="text-xl" htmlFor="challenger">
              Challenger
              <p className="text-sm text-muted-foreground">
                Individuals striving to achieve personal goals like finding a
                job or a place to live, who commit to completing daily tasks for
                progress.
              </p>
            </Label>
          </div>
          <div className="flex items-start gap-3">
            <RadioGroupItem
              className="mt-1 h-6 w-6"
              value="challenge-supporter"
              id="challenge-supporter"
            />
            <Label className="text-xl" htmlFor="challenge-supporter">
              Challenge Supporter
              <p className="text-sm text-muted-foreground">
                Supportive individuals offering expertise, mentorship, or
                encouragement to help Challengers succeed in their goals.
              </p>
            </Label>
          </div>
        </RadioGroup>

        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Save
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
