import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map"), { ssr: false });
import Header from "@/components/header";
import Events from "@/components/events";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" w-full h-screen ">
      <div className="w-full flex justify-end absolute right-6 top-5 h-24">
        <Button variant={"destructive"}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </Button>
      </div>

      {/* <EventsTable /> */}
      <Header />
      <Events />
    </div>
  );
}
