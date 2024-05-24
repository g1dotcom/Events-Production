import type { Metadata } from "next";
import { Inter, Aldrich } from "next/font/google";

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
      <body className={cn("min-h-screen , bg-[#212529] px-6")}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
