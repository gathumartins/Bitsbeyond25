'use client'
import React from 'react'
import dynamic from "next/dynamic";

const ScrollCarousel = dynamic(
  () => import("./ScrollCarouselComponent"),
  { ssr: false },
);

function HomePartners() {
  return (
    <section className="bg-white dark:bg-white contPadd py-11">
      <ScrollCarousel/>
    </section>
  );
}

export default HomePartners