// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";

// interface EventFormData {
//   name: string;
//   basePortalLink: string;
//   socialPlatformId: string;
//   eventTypeId: string;
//   language: string;
//   localTime: string;
//   timeZone: string;
//   utcTime: string;
//   longitude: string;
//   latitude: string;
//   locationName: string;
// }

// export default function CreateEvent() {
//   const [formData, setFormData] = useState<EventFormData>({
//     name: "",
//     basePortalLink: "",
//     socialPlatformId: "",
//     eventTypeId: "",
//     language: "",
//     localTime: "",
//     timeZone: "",
//     utcTime: "",
//     longitude: "",
//     latitude: "",
//     locationName: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     console.log(formData); // Add this line for debugging
//     console.log("Submitting form data...");
//     try {
//       const res = await fetch("/api/events/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log(formData); // Add this line for debugging
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="basePortalLink"
//         placeholder="Base Portal Link"
//         value={formData.basePortalLink}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="socialPlatformId"
//         placeholder="Social Platform ID"
//         value={formData.socialPlatformId}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="eventTypeId"
//         placeholder="Event Type ID"
//         value={formData.eventTypeId}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="language"
//         placeholder="Language"
//         value={formData.language}
//         onChange={handleChange}
//       />
//       <input
//         type="datetime-local"
//         name="localTime"
//         value={formData.localTime}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="timeZone"
//         placeholder="Time Zone"
//         value={formData.timeZone}
//         onChange={handleChange}
//       />
//       <input
//         type="datetime-local"
//         name="utcTime"
//         value={formData.utcTime}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="longitude"
//         placeholder="Longitude"
//         value={formData.longitude}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="latitude"
//         placeholder="Latitude"
//         value={formData.latitude}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="locationName"
//         placeholder="Location Name"
//         value={formData.locationName}
//         onChange={handleChange}
//       />
//       <button type="submit">Create Event</button>
//     </form>
//   );
// }

"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface EventFormData {
  name: string;
  basePortalLink: string;
  socialPlatformId: string;
  eventTypeId: string;
  language: string;
  localTime: string;
  timeZone: string;
  utcTime: string;
  longitude: string;
  latitude: string;
  locationName: string;
}

export default function CreateEvent() {
  const [formData, setFormData] = useState<EventFormData>({
    name: "",
    basePortalLink: "",
    socialPlatformId: "",
    eventTypeId: "",
    language: "",
    localTime: "",
    timeZone: "",
    utcTime: "",
    longitude: "",
    latitude: "",
    locationName: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Event created:", data);
      } else {
        console.error("Event creation failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full h-full justify-center items-center"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        name="basePortalLink"
        placeholder="Base Portal Link"
        value={formData.basePortalLink}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        name="socialPlatformId"
        placeholder="Social Platform ID"
        value={formData.socialPlatformId}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        name="eventTypeId"
        placeholder="Event Type ID"
        value={formData.eventTypeId}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        name="language"
        placeholder="Language"
        value={formData.language}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="datetime-local"
        name="localTime"
        value={formData.localTime}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        name="timeZone"
        placeholder="Time Zone"
        value={formData.timeZone}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="datetime-local"
        name="utcTime"
        value={formData.utcTime}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="number"
        name="longitude"
        placeholder="Longitude"
        value={formData.longitude}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="number"
        name="latitude"
        placeholder="Latitude"
        value={formData.latitude}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        name="locationName"
        placeholder="Location Name"
        value={formData.locationName}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-900 rounded-md mb-2"
      />
      <button type="submit">Create Event</button>
    </form>
  );
}
