import prisma from "@/lib/database";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

export default async function UserAdmin() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (userId) {
    // Get the User object from Clerk when you need access to the user's information
    const user = await clerkClient.users.getUser(userId);
    console.log(user.id);

    //fetch user from User table prisma db
    const userFromDB = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    console.log(userFromDB);
    // {
    //   id: 'clwru7mhz0000ce6rzdkm60r9',
    //   createdAt: 2024-05-29T13:03:31.751Z,
    //   updatedAt: 2024-05-29T13:03:31.751Z,
    //   clerkUserId: 'user_2h8u1RXI2bKbKpIj4BQyXeSUHE6',
    //   admin: false
    // }

    //check if userFromDB is not null and if userFromDB.admin is true render admin page else render not an admin page
    if (userFromDB && userFromDB.admin) {
      return "Admin Page";
    } else {
      return "Not an Admin";
    }
  }

  // // Get the Backend API User object when you need access to the user's information
  // const user = await currentUser();
}
