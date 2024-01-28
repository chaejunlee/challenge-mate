import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { MainNav } from "../_components/main-nav";

export default function RewardLayout({ children }: { children: ReactNode }) {
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
      <main>{children}</main>
    </>
  );
}
