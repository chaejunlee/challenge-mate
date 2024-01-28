"use client";

import { type getShelter } from "@/app/appointment/shelter";
import { create } from "zustand";
import { load, save } from "./db";

type Role = "challenger" | "challenge-mate" | null;

type State = {
  appointments: Array<
    ReturnType<typeof getShelter> & {
      dateTime: string;
    }
  >;
  pushAppointment: (
    appointment: ReturnType<typeof getShelter> & {
      dateTime: string;
    },
  ) => void;
  role: Role;
  setRole: (role: Role) => void;
};

const sampleAppointments: Array<{
  name: string;
  coordinates: [number, number];
  color: [number, number, number];
  price: number;
  picture: string;
  address: string;
  phone: string;
  dateTime: string;
}> = [
  {
    name: "HomeFirst - Sobrato House Youth Center",
    coordinates: [-121.88, 37.32],
    color: [33, 33, 233],
    price: 1000,
    picture: "/shelter-1.jpeg",
    address: "496 S Third St, San Jose, CA 95112",
    phone: "(408) 539-2180",
    dateTime: "Jan 1, 2024T15:00 ~ 15:30",
  },
  {
    name: "LifeMoves | Montgomery Street Inn",
    coordinates: [-121.9, 37.33],
    color: [33, 33, 233],
    price: 2000,
    picture: "/shelter-2.jpeg",
    address: "358 N Montgomery St, San Jose, CA 95110",
    phone: "(408) 271-5160",
    dateTime: "Jan 10, 2024T15:00 ~ 15:30",
  },
  {
    name: "Family Supportive Housing",
    coordinates: [-121.86, 37.36],
    color: [33, 33, 233],
    price: 3000,
    picture: "/shelter-3.jpeg",
    address: "692 N King Rd, San Jose, CA 95133",
    phone: "(408) 926-8885",
    dateTime: "Jan 15, 2024T13:00 ~ 13:30",
  },
  {
    name: "HomeFirst - Sobrato House Youth Center",
    coordinates: [-121.88, 37.32],
    color: [33, 33, 233],
    price: 1000,
    picture: "/shelter-1.jpeg",
    address: "496 S Third St, San Jose, CA 95112",
    phone: "(408) 539-2180",
    dateTime: "Jan 25, 2024T13:00 ~ 13:30",
  },
];

export const useAppointmentStore = create<State>((set) => ({
  appointments: sampleAppointments,
  pushAppointment: (appointment) =>
    set((state) => {
      const appointments = [...state.appointments, appointment];
      saveAppointment(appointments);
      return {
        appointments,
      };
    }),
  role: "challenger",
  setRole: (role) => {
    save("role", role);
    set({ role });
  },
}));

export const saveAppointment = (appointments: State["appointments"]) => {
  const appointmentsString = JSON.stringify(appointments);
  save("appointments", appointmentsString);
};

export const loadAppointment = () => {
  if (typeof localStorage === "undefined") return;
  const appointments = load<State["appointments"]>("appointments");
  if (!appointments) return;
  useAppointmentStore.setState({ appointments });
};

loadAppointment();

type AlertDialog = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useAlert = create<AlertDialog>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

export const progress = [
  {
    step: "job education counseling 1",
    activities: [
      "conduct mental health counseling",
      "conduct vocational preference test",
    ],
    reward: {
      food_voucher: 2,
      haircut_coupon: 1,
      nail_clipper_set: 1,
    },
  },
  {
    step: "self care",
    activities: [
      "get a haircut at the salon",
      "trim nails",
      "trim toenails",
      "shower at the center",
    ],
    reward: {
      food_voucher: 2,
      photo_shoot_coupon: 1,
    },
  },
  {
    step: "job education counseling 2",
    activities: ["take photos", "explore companies", "draft a resume"],
    reward: {
      food_voucher: 3,
      basic_clothing_voucher: 1,
      health_checkup_voucher: 1,
    },
  },
  {
    step: "health checkup",
    activities: [
      "complete a comprehensive health checkup",
      "receive mental health counseling",
    ],
    reward: {
      food_voucher: 1,
    },
  },
  {
    step: "job education counseling 3",
    activities: ["revise the resume", "apply to companies"],
    reward: {
      food_voucher: 3,
      suit_rental_voucher: 1,
    },
  },
  {
    step: "job interview",
    activities: ["conduct a job interview"],
    reward: {
      food_voucher: 2,
    },
  },
  {
    step: "employment",
    activities: ["successfully employed"],
    reward: {
      congratulatory_bonus: "$50",
    },
  },

  {
    step: "employment after 3 months",
    activities: ["commute to work for 3 months after employment"],
    reward: {
      employment_encouragement_bonus: "$100",
    },
  },
] as const;

export type Progress = (typeof progress)[number]["step"];
export type Activities = string[];
export type Reward = Record<string, string | number>;

export type ProgressState = {
  step: Progress;
  progress: string;
  setProgress: (progress: string) => void;
};

export const progressStep = progress.reduce(
  (acc, cur, idx) => {
    acc[cur.step] = idx;
    return acc;
  },
  {} as Record<Progress, number>,
);

export const useProgress = create<ProgressState>((set) => ({
  step: "health checkup",
  progress: "receive mental health counseling",
  setProgress: (progress) => set({ progress }),
}));
