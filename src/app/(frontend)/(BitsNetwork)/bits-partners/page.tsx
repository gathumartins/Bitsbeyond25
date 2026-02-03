import PagesHero from "@/app/components/PagesHero";
import React from "react";
import Image from "next/image";

  const partners = [
    {
      id: 1,
      name: "Amref Kenya",
      shortname: "amref",
    },
    {
      id: 2,
      name: "Automation Anywhere",
      shortname: "automation",
    },
    {
      id: 3,
      name: "British Council",
      shortname: "bc",
    },
    {
      id: 4,
      name: "Christian Aid",
      shortname: "christianaid",
    },
    {
      id: 5,
      name: "Lenovo",
      shortname: "lenovo",
    },
    {
      id: 6,
      name: "London School of Economic",
      shortname: "lse",
    },
    {
      id: 7,
      name: "Malala Foundation",
      shortname: "malala",
    },
    {
      id: 8,
      name: "Microsoft",
      shortname: "microsoft",
    },
    {
      id: 9,
      name: "Rutgers",
      shortname: "rutgers",
    },
    {
      id: 10,
      name: "Team4Tech",
      shortname: "team4tech",
    },
  ];
function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <section className="contPadd py-11 bg-white dark:bg-white">
          <div className="font-sans text-base text-black dark:text-black">
            <p>
              We welcome you to join the bandwagon below and co-create solutions
              to some of the world’s pressing challenges with those in need.
              Work with us to change the lives of disadvantaged youth in Kenya.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-10 mt-10">
            {partners.map((partner, i) => (
              <Image
                key={i}
                src={`/images/${partner.shortname}.svg`}
                alt={partner.name}
                width={149}
                height={107}
                priority
                className="dark:grayscale-100 inline-block rounded border-2 border-gray"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default page;
