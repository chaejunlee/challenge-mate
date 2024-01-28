import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "./_components/main-nav";
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
            <MainNav className="mx-6 grow" signedIn={!!session} />
          </div>
        </div>
      </header>
      <main>
        <Landing />
      </main>
    </>
  );
}
