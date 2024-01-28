import Image from "next/image";
import data from "./data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rewards = data;

export default function Reward() {
  return (
    <div className="container mx-auto mt-6 max-w-4xl">
      <h1 className="text-bold text-4xl">Rewards</h1>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <Card key={reward.name} className="flex flex-col">
            <CardHeader className="grow-0">
              <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted bg-cover">
                <Image
                  src={reward.image}
                  alt={reward.name}
                  fill
                  objectFit="contain"
                />
              </div>
            </CardHeader>
            <CardContent className="grow align-top">
              <p className="truncate text-sm font-bold">{reward.name}</p>
            </CardContent>
            <CardFooter className="flex grow-0 justify-between">
              <p>
                <span className="font-semibold">{reward.point}</span> Points
              </p>
              <Button variant="outline">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
