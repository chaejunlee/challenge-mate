import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "./_components/main-nav";
import Image from "next/image";
import React from "react";
import { MainMap } from "./main-map";
import Task from "./task";
import Main from "./main";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <main className="container grid h-screen place-items-center">
        <div className="grid place-items-center">
          <h1 className="text-4xl font-bold">Challenge Mate 💪</h1>
          <p className="mt-2 text-lg">
            What doesn&apos;t kill you makes you stronger.
          </p>
          <Button asChild>
            <Link href="/api/auth/signin" className="mt-4">
              Sign Up
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <header className="">
        <div className="border-b">
          <div className="flex h-16 items-center px-12">
            <Link href="/">
              <Image src="/logo.png" alt="" width="32" height="32" />
            </Link>
            <MainNav className="mx-6 grow" />
            <Link
              href="/api/auth/signout"
              className="justify-end text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </header>
      <main className="grid h-[calc(100vh_-_4.1rem)] grid-cols-[40ch_minmax(0,1fr)]">
        <Main />
      </main>
    </>
  );
}
