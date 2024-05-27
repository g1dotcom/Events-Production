import Map from "@/components/map";
import { EventsTable } from "@/components/events-table";
import Header from "@/components/header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <div className="w-full bg-red-500 h-24">
        {" "}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <Header />
      <Map />
      <EventsTable />
    </div>
  );
}
