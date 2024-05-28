"use client";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { useRef, useState } from "react";

// Add clerk to Window to avoid type errors
declare global {
  interface Window {
    Clerk: any;
  }
}

function createClerkSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        // Get the Supabase token with a custom fetch method
        fetch: async (url, options = {}) => {
          const clerkToken = await window.Clerk.session?.getToken({
            template: "supabase",
          });

          // Construct fetch headers
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);

          // Now call the default fetch
          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    }
  );
}

const client = createClerkSupabaseClient();

export default function Supabase() {
  const [addresses, setAddresses] = useState<any>();

  // list users from supabase database user_table table

  const listUsers = async () => {
    const { data, error } = await client.from("user_table").select("content");
    if (error) {
      console.error(error);
    } else {
      setAddresses(data);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const sendAddress = async () => {
    if (!inputRef.current?.value) return;
    await client.from("user_table").insert({
      // Replace content with whatever field you want
      content: inputRef.current?.value,
    });
  };

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <div
        style={{ display: "flex", flexDirection: "column", background: "red" }}
      >
        <input
          onSubmit={sendAddress}
          style={{ color: "black" }}
          type="text"
          ref={inputRef}
        />
        <button onClick={sendAddress}>Send Address</button>
        <button onClick={listUsers}>{}</button>
      </div>
      <h2>Addresses</h2>
      {!addresses ? (
        <p>No addresses</p>
      ) : (
        <ul>
          {addresses.map((address: any) => (
            <li key={address.id}>{address.content}</li>
          ))}
        </ul>
      )}
    </>
  );
}
