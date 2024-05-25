import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";
import { aldrich } from "./font";

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
    <html lang="en" className={`${aldrich.className} text-[10px]`}>
      <body className={cn("min-h-screen bg-[#212529]")}>{children}</body>
    </html>
  );
}
