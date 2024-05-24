import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsTitle() {
  const words = ["izmir", "newyork", "tokyo", "berlin"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4 ">
      <div className="text-4xl w-[500px] mx-auto font-normal text-neutral-600 dark:text-neutral-400 bg-gray-950/5 p-4 rounded-lg">
        Everywhere
        <FlipWords words={words} /> <br />
        See live events
      </div>
    </div>
  );
}
