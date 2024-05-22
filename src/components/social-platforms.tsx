"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/lib/subaseClient";

type Props = {};

const SoacialPlatform = (props: Props) => {
  const [socialPlatforms, setSocialPlatforms] = useState<any[]>([]);

  useEffect(() => {
    const fetchSocailPlatform = async () => {
      const { data, error } = await supabase
        .from("social_platforms")
        .select("*");
      if (data) {
        setSocialPlatforms(data);
        console.log(socialPlatforms);
      } else {
        console.error(error);
      }
    };

    fetchSocailPlatform();
  }, []);

  return (
    <div>
      <h1>Social Platforms</h1>
      <ul>
        {socialPlatforms.map((platform) => (
          <li key={platform.id}>{platform.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SoacialPlatform;
