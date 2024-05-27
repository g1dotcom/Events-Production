import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";
import { aldrich } from "./font";

// Clerk
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Events",
  description: "Events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${aldrich.className} text-[10px]`}>
        <body className={cn("min-h-screen bg-[#212529]")}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
