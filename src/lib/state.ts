import { type getShelter } from "@/app/appointment/shelter";
import { create } from "zustand";

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
}));

export const saveAppointment = (appointments: State["appointments"]) => {
  const appointmentsString = JSON.stringify(appointments);
  localStorage.setItem("appointments", appointmentsString);
};

export const loadAppointment = () => {
  const appointmentsString = localStorage.getItem("appointments");
  if (appointmentsString) {
    const appointments = JSON.parse(
      appointmentsString,
    ) as State["appointments"];
    useAppointmentStore.setState({ appointments });
  }
};

loadAppointment();
