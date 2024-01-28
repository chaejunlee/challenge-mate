"use client";

import Image from "next/image";
import data from "./data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { usePoint } from "@/lib/state";

const rewards = data;

export default function Reward() {
  const [item, setItem] = useState<{
    image: string;
    name: string;
    point: number;
  }>();

  const [isLoading, setIsLoading] = useState(false);

  const onClick = (item: number | undefined) => {
    if (!item) return;
    setIsLoading(true);
    setTimeout(() => {
      setPoint(point - item);
      setBought(true);
      setIsLoading(false);
    }, 1000);
  };

  const point = usePoint((state) => state.point);
  const setPoint = usePoint((state) => state.setPoint);

  const [bought, setBought] = useState(false);

  return (
    <Dialog>
      <div className="container mx-auto mt-6 max-w-4xl">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-4xl font-bold">Rewards</h1>
            <h4 className="mt-2">Redeem your points for rewards</h4>
          </div>
          <div>
            <p className="mt-2 text-2xl text-muted-foreground">
              You have <span className="font-semibold">{point}</span> points
            </p>
          </div>
        </div>
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
                <DialogTrigger asChild>
                  <Button
                    onClick={(e) => {
                      setItem(reward);
                    }}
                    variant={reward.point <= point ? "default" : "outline"}
                    disabled={reward.point > point}
                  >
                    Buy
                  </Button>
                </DialogTrigger>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-2 text-2xl">Use Your Point</DialogTitle>
          <div className="flex gap-4">
            <div className="relative aspect-square w-40 overflow-hidden rounded-lg border bg-muted bg-cover">
              <Image
                src={item?.image ?? ""}
                alt={item?.name ?? ""}
                fill
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col pt-4">
              <p className="font-bold">{item?.name}</p>
              <p className="mt-2">{item?.point} Points</p>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          {bought ? (
            <div className="flex w-full flex-col">
              <div className="relative h-40 w-full">
                <Image
                  src="https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg"
                  alt="barcode"
                  fill
                  objectFit="contain"
                />
              </div>
              <Button>Print</Button>
            </div>
          ) : (
            <Button onClick={() => onClick(item?.point)} className="mt-2">
              {isLoading ? (
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              Buy
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
