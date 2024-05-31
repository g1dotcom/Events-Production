import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function EventsTable({ myEvent, myeventTypes, mysocialPlatform }: any) {
  /////////calculate//////////,
  const calculateCountdown = (localTime: string) => {
    const eventTime = new Date(localTime).getTime();
    const currentTime = new Date().getTime();
    const timeDiff = eventTime - currentTime;

    if (timeDiff <= 0) return "Event has passed";

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const events = myEvent || [];
  console.log(events, "event data...");
  const eventTypes = myeventTypes || [];
  const SocialPlatforms = mysocialPlatform || [];

  const combinedData = events.map((event: any) => {
    const eventType = eventTypes.find(
      (type: any) => type.id === event.eventTypeId
    );
    const socialPlatform = SocialPlatforms.find(
      (social: any) => social.id === event.socialPlatformId
    );

    return {
      ...event,
      eventTypeName: eventType ? eventType.name : "Unknown",
      socialPlatformName: socialPlatform ? socialPlatform.name : "Unknown",
      countdown: calculateCountdown(event.localTime),
      localTime: new Date(event.localTime).toLocaleString(),
      utcTime: new Date(event.localTime).toLocaleString(),
      timeZone: new Date(event.timeZone).toLocaleString(),
    };
  });

  return (
    <Table className="bg-white">
      <TableCaption>A list of your recent events.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>City</TableHead>
          <TableHead>Base Portal</TableHead>
          <TableHead>Social Platform</TableHead>
          <TableHead>Event Type</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>Local Time</TableHead>
          <TableHead>Time Zone</TableHead>
          <TableHead>UTC Time</TableHead>
          <TableHead>Countdown</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {combinedData.map((event: any) => (
          <TableRow key={event.id}>
            <TableCell className="font-medium">{event.name}</TableCell>
            <TableCell>{event.basePortalLink}</TableCell>
            <TableCell>{event.socialPlatformName}</TableCell>
            <TableCell>{event.eventTypeName}</TableCell>
            <TableCell>{event.language}</TableCell>
            <TableCell>{event.localTime}</TableCell>
            <TableCell>{event.timeZone}</TableCell>
            <TableCell>{event.utcTime}</TableCell>
            <TableCell>{event.countdown}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
