"use client";

import * as React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center p-8 w-full">
      <video
        className="w-full max-w-4xl rounded-lg shadow-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/Flow Carousel Animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
