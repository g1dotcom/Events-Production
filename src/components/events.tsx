import prisma from "@/lib/database";
import Map from "./map";

export default async function EventsTypes() {
  //fetch event types prisma
  // const fetchEventTypes = async () => {
  //   const eventTypes = await prisma.eventType.findMany();
  //   console.log(eventTypes, "eventTypeseventTypeseventTypeseventTypes");
  // };
  // fetchEventTypes();

  //fetch events platforms from events table prisma db
  const myEvent = await prisma.event.findMany();
  console.log(myEvent, "myEvent");

  const myeventTypes = await prisma.eventType.findMany();
  console.log(myeventTypes, "myeventTypes");

  return (
    <div>
      {" "}
      <Map myEvent={myEvent} myeventTypes={myeventTypes} />
    </div>
  );
}
