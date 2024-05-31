import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map"), { ssr: false });
import { EventsTable } from "@/components/events-table";
import Header from "@/components/header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EventsTypes from "@/components/events";

export default function Home() {
  return (
    <div className=" w-full h-screen ">
      {/* <div className="w-full flex justify-end absolute right-6 top-5 h-24">
        <Link href="/admin">
          <Button variant={"secondary"}>Go to Admin Page</Button>
        </Link>
        <Button variant={"destructive"}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </Button>
      </div>
      <Header />
      <Map />
      <EventsTable /> */}
      <EventsTypes />
    </div>
  );
}
