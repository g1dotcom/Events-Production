import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="h-24 bg-transparent absolute flex justify-end w-full p-4">
      <Button variant={"secondary"} className="w-24 text-lg">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Button>
    </div>
  );
};

export default Navbar;
