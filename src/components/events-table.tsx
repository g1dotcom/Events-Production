"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import supabase from "@/lib/subaseClient";
import { useState, useEffect } from "react";

export function EventsTable() {
  const [events, setEvents] = useState<any[]>([]);
  const [eventTypes, setEventTypes] = useState<any[]>([]);
  const [SocialPlatforms, setSocialPlatforms] = useState<any[]>([]);

  // event_types data fetch
  useEffect(() => {
    const fetchEventTypes = async () => {
      const { data, error } = await supabase.from("event_types").select("*");
      if (data) {
        setEventTypes(data);
      } else {
        console.error(error);
      }
    };

    fetchEventTypes();
  }, []);

  // events data fetch
  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (data) {
        setEvents(data);
      } else {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  // social_platforms data fetch
  useEffect(() => {
    const fetchSocialPlatforms = async () => {
      const { data, error } = await supabase
        .from("social_platforms")
        .select("*");
      if (data) {
        setSocialPlatforms(data);
      } else {
        console.error(error);
      }
    };

    fetchSocialPlatforms();
  }, []);

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

  const combinedData = events.map((event) => {
    const eventType = eventTypes.find(
      (type) => type.id === event.event_type_id
    );
    const socialPlatform = SocialPlatforms.find(
      (social) => social.id === event.social_platform_id
    );

    return {
      ...event,
      eventTypeName: eventType ? eventType.name : "Unknown",
      socialPlatformName: socialPlatform ? socialPlatform.name : "Unknown",
      countdown: calculateCountdown(event.local_time),
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
        {combinedData.map((event) => (
          <TableRow key={event.id}>
            <TableCell className="font-medium">{event.name}</TableCell>
            <TableCell>{event.base_portal_link}</TableCell>
            <TableCell>{event.socialPlatformName}</TableCell>
            <TableCell>{event.eventTypeName}</TableCell>
            <TableCell>{event.language}</TableCell>
            <TableCell>{event.local_time}</TableCell>
            <TableCell>{event.time_zone}</TableCell>
            <TableCell>{event.utc_time}</TableCell>
            <TableCell>{event.countdown}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
