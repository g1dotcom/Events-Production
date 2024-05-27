import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";
import { aldrich } from "./font";

// Clerk
import { ClerkProvider } from "@clerk/nextjs";

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
        <body className={cn("min-h-screen ")}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
