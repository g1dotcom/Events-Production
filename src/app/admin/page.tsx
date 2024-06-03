import prisma from "@/lib/database";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { permanentRedirect } from "next/navigation";
import CreateEvent from "@/components/create-events";

export default async function UserAdmin() {
  const { userId } = auth();
  auth().protect();

  if (userId) {
    const user = await clerkClient.users.getUser(userId);
    const userFromDB = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (userFromDB && userFromDB.admin) {
      return (
        <div>
          <h1>Admin Page</h1>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
          <CreateEvent />
        </div>
      );
    } else {
      permanentRedirect("/");
    }
  }
}
