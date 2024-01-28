import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "./_components/main-nav";
import Image from "next/image";
import React from "react";
import Landing from "./landing";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <>
        <header className="">
          <div className="border-b">
            <div className="flex h-16 items-center px-10">
              <Link href="/">
                <Image src="/logo.png" alt="" width="32" height="32" />
              </Link>
              <MainNav className="mx-6 grow" />

              <Link
                href="/api/auth/signin"
                className="justify-end text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Sign In
              </Link>
            </div>
          </div>
        </header>
        <main>
          <Landing />
        </main>
      </>
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
      <main>
        <Landing />
      </main>
    </>
  );
}
