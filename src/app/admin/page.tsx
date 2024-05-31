import prisma from "@/lib/database";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { permanentRedirect } from "next/navigation";

export default async function UserAdmin() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();
  auth().protect();

  if (userId) {
    // Get the User object from Clerk when you need access to the user's information
    const user = await clerkClient.users.getUser(userId);
    // console.log(user.id);

    //fetch user from User table prisma db
    const userFromDB = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    // console.log(userFromDB, "userFromDB");

    const eventTypes = await prisma.eventType.findMany();
    // console.log(eventTypes, "eventTypes");
    //fetch social platforms from socialPlatforms table prisma db
    const socialPlatforms = await prisma.socialPlatform.findMany();
    // console.log(socialPlatforms, "socialPlatforms");

    //check if userFromDB is not null and if userFromDB.admin is true render admin page else render not an admin page
    if (userFromDB && userFromDB.admin) {
      return permanentRedirect("/create-event");
    } else {
      permanentRedirect("/");
    }
  }

  // // Get the Backend API User object when you need access to the user's information
  // const user = await currentUser();
}
