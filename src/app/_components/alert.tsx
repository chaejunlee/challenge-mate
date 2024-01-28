"use client";

import {
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { type ReactNode } from "react";
import { useAlert, useAppointmentStore } from "@/lib/state";

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
            setRole(value as "challenger" | "challenge-mate");
          }}
          className="text-xl"
        >
          <div className="flex gap-3">
            <RadioGroupItem value="challenger" id="challenger" />
            <Label htmlFor="challenger">Challenger</Label>
          </div>
          <div className="flex gap-3">
            <RadioGroupItem value="challenge-mate" id="challenge-mate" />
            <Label htmlFor="challenge-mate">Challenge Mate</Label>
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
