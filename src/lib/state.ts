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

export const useAppointmentStore = create<State>((set) => ({
  appointments: [],
  pushAppointment: (appointment) =>
    set((state) => {
      const appointments = [...state.appointments, appointment];
      saveAppointment(appointments);
      return {
        appointments,
      };
    }),
  role: load("role"),
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
  open: !load("role"),
  setOpen: (open) => set({ open }),
}));
