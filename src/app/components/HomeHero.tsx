"use client"
import React from "react";
import Slider from "./Slider";

function HomeHero() {
  return (
    <section className="bg-accent dark:bg-accent">
      <div className="myCont">
        <div className="contPadd min-h-[500px] relative w-full overflow-hidden py-11">
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
