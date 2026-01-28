import PagesHero from "@/app/components/PagesHero";
import React from "react";
import Image from "next/image";
import ClusterComp from "@/app/components/ClusterComp";
import ProgramCard from "@/app/components/ProgramCard";

function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <section className="contPadd py-11 bg-white dark:bg-white">
          <h2 className="bodyH2 mb-5">Innovation and Technology</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="[&_p]:font-sans [&_p]:text-base text-base [&_p]:mb-4 xl:col-span-2">
              <p>
                NairoBits Trust is a Kenyan non-profit that leverages ICT to
                empower disadvantaged youth from the informal settlements of
                Nairobi. We offer alternative higher education programs that
                unlock careers in tech through digital skills training and
                professional integration with the labor market.
              </p>
              <p>
                Our programming is based on a two pronged strategic approach
                i.e. Enhancing the capacity of underserved youth to increase
                their readiness for them to make gainful advantage of the
                digital age and; Promoting the creation of opportunities and
                utilization of available ones in the ICT sub-sector.
              </p>
              <p>
                These strategic approaches are the backbone of our programs
                ranging across technical skills on digital literacy, acumen
                building and creating wholesome subsector change through
                advocacy on the digital divide across marginalized groups.
              </p>
            </div>
            <figure className="relative min-h-[260px]">
              <Image
                src="/images/about.jpg"
                fill
                priority
                className="rounded object-cover dark:grayscale-100"
                alt="NairoBits Trust class learning setup"
              />
            </figure>
          </div>
        </section>
        <section className="contPadd pb-11 bg-white dark:bg-white">
          <h2 className="bodyH2 mb-5">Programs</h2>
          <div className="procards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7].map((procard, i) => (
              <ProgramCard key={i} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default page;
