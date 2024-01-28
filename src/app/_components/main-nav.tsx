"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useAlert, useAppointmentStore } from "@/lib/state";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function MainNav({
  className,
  signedIn,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  signedIn?: boolean;
}) {
  const pathname = usePathname();
  const role = useAppointmentStore((state) => state.role);
  const setOpen = useAlert((state) => state.setOpen);

  useEffect(() => {
    if (signedIn && !role) {
      setOpen(true);
    }
  }, [role, signedIn, setOpen]);

  const active = (href: string) => {
    return pathname === href ? "text-primary" : "text-muted-foreground";
  };

  return (
    <nav
      className={cn(
        "flex items-center justify-end space-x-4 lg:space-x-6",
        className,
      )}
      {...props}
    >
      <Link
        href="/dashboard"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          active("/dashboard"),
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/appointment"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          active("/appointment"),
        )}
      >
        Appointment
      </Link>
      <Link
        href="/rewards"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          active("/rewards"),
        )}
      >
        Rewards
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          active("/about"),
        )}
      >
        About
      </Link>
      <Link
        href="/donation"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          active("/donation"),
        )}
      >
        Donate
      </Link>
      {!signedIn ? (
        <Button>
          <Link
            href="/api/auth/signin"
            className="justify-end text-sm font-medium transition-colors hover:text-primary-foreground"
          >
            Sign In
          </Link>
        </Button>
      ) : null}
    </nav>
  );
}
