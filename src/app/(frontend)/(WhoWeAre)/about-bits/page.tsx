import PagesHero from '@/app/components/PagesHero'
import React from 'react'


function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <section className="bg-accent contPadd py-11">
          <h2 className="bodyH2">About Bits</h2>
        </section>
        <section className="contPadd py-11 bg-blue"></section>
      </main>
    </>
  );
}

export default page