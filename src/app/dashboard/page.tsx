import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "../_components/main-nav";
import Image from "next/image";
import React from "react";
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
          <div className="flex h-16 items-center px-10">
            <Link href="/">
              <Image src="/logo.png" alt="" width="32" height="32" />
            </Link>
            <MainNav className="mx-6 grow" signedIn={!!session} />
          </div>
        </div>
      </header>
      <main className="min-h-[calc(100vh_-_4.1rem)]">
        <Main />
      </main>
    </>
  );
}
