import type { Metadata } from "next";
import { Inter, Aldrich } from "next/font/google";
import "leaflet/dist/leaflet.css";

import "./globals.css";

import { cn } from "@/lib/utils";

export const roboto = Aldrich({
  weight: "400",
  subsets: ["latin"],
});

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
    <html lang="en" className={roboto.className}>
      <body className={cn("min-h-screen ")}>{children}</body>
    </html>
  );
}
