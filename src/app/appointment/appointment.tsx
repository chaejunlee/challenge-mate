import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getShelter } from "./shelter";

export default function Appointment({
  destination,
}: {
  destination: [number, number];
}) {
  const appointment = getShelter(destination);
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>{appointment?.name}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
