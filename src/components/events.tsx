import prisma from "@/lib/database";
import Map from "./map";
import { EventsTable } from "./events-table";

export default async function EventsTypes() {
  //fetch data prisma db
  const myEvent = await prisma.event.findMany();
  console.log(myEvent, "myEvent");

  const myeventTypes = await prisma.eventType.findMany();
  console.log(myeventTypes, "myeventTypes");

  const mysocialPlatform = await prisma.socialPlatform.findMany();
  console.log(myeventTypes, "myeventTypes");

  return (
    <div>
      {" "}
      <Map myEvent={myEvent} myeventTypes={myeventTypes} />
      <EventsTable
        myEvent={myEvent}
        myeventTypes={myeventTypes}
        mysocialPlatform={mysocialPlatform}
      />
    </div>
  );
}
