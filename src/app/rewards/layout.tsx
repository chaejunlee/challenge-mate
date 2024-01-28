import { Button } from "@/components/ui/button";
import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { MainNav } from "../_components/main-nav";

export default async function RewardLayout({
  children,
}: {
  children: ReactNode;
}) {
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
      <main>{children}</main>
    </>
  );
}
