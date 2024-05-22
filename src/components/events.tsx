"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/lib/subaseClient";

type Props = {};

const Events = (props: Props) => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (data) {
        setEvents(data);
        console.log(events);
      } else {
        console.error(error);
      }
    };

    fetchEvents();
  }, [events]);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} {event.city_id} {event.base_portal_link}{" "}
            {event.social_platform_id} {event.event_type_id} {event.language}{" "}
            {event.local_time}
            {event.time_zone} {event.utc_time} {event.longitute}{" "}
            {event.latitude}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
