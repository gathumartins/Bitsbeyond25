import PagesHero from '@/app/components/PagesHero'
import TeamCard from '@/app/components/TeamCard';
import React from 'react'

function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <section className="contPadd py-11 bg-accent dark:bg-accent">
          <h2 className="bodyH2 mb-5">The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((team, i) => (
              <TeamCard key={i} />
            ))}
          </div>
        </section>
        <section className="contPadd py-11 bg-white dark:bg-white">
          <h2 className="bodyH2 mb-5">The Board</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((team, i) => (
              <TeamCard key={i} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default page