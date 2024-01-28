import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Alert from "./_components/alert";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Challenge Mates",
  description: "Challenge Mates by LikeLion@SJSU",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Alert>
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <footer className="mb-10 mt-20 overflow-hidden text-center font-sans text-sm text-muted-foreground">
            © Challange Mates
          </footer>
        </Alert>
      </body>
    </html>
  );
}
