"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import supabase from "@/lib/subaseClient";
import { useState, useEffect } from "react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function EventsTable() {
  const [events, setEvents] = useState<any[]>([]);

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

  useEffect(() => {
    // console.log("Updated events:", events);
  }, [events]);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>City</TableHead>
          <TableHead>Base Portal</TableHead>
          <TableHead>Socail Platform</TableHead>
          <TableHead>Event Type</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>Local Time</TableHead>
          <TableHead>Time Zone</TableHead>
          <TableHead>UTC Time</TableHead>
          <TableHead>Countdown</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id}>
            <TableCell className="font-medium">{event.city_id}</TableCell>
            <TableCell>{event.base_portal_link}</TableCell>
            <TableCell>{event.social_platform_id}</TableCell>
            <TableCell>{event.event_type_id}</TableCell>

            <TableCell>{event.language}</TableCell>
            <TableCell>{event.local_time}</TableCell>
            <TableCell>{event.time_zone}</TableCell>
            <TableCell>{event.utc_time}</TableCell>
            <TableCell>{event.countdown}</TableCell>

            {/* <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell> */}
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
