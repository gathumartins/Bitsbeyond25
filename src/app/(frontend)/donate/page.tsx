import DonateComp from "@/app/components/DonateComp";
import PagesHero from "@/app/components/PagesHero";
import React from "react";

function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <section className="contPadd py-11 bg-accent dark:bg-accent">
          <h2 className="bodyH2 mb-5">Donate</h2>
          <div className="font-sans text-base text-black dark:text-black mb-5">
            <p>
              Join us in empowering youth! Your donation to Nairobits helps
              provide vital digital skills training and career opportunities to
              young people from undeserved communities. Give today to help
              bridge the digital divide and transform a life: Invest in
              Nairobits.
            </p>
          </div>
          <DonateComp/>
        </section>
      </main>
    </>
  );
}

export default page;
