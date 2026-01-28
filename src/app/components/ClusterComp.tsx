import React from 'react'
import ProgramCard from './ProgramCard';

function ClusterComp({num}:any) {
 
  return (
    <section className="odd:bg-white even:bg-accent dark:odd:bg-white dark:even:bg-accent contPadd py-11 odd:[&_a]:bg-accent dark:odd:[&_a]:bg-accent even:[&_a]:bg-white dark:even:[&_a]:bg-white">
      <h2 className="bodyH2">
        <span className="text-blue dark:text-blue mr-1.5">{(num += 1)}.</span>
        Innovation and Technology
      </h2>
      <div className=" line-clamp-3 max-w-[645px] my-6 [&_p]:text-base  [&_p]:text-black dark:[&_p]:text-black  [&_p]:font-sans">
        <p>
          Increasing job job readiness and pathways for employment in the ICT
          space for young people through technical guidance, prudent training
          methodologies and continuous mentorship, students increase
        </p>
      </div>
      <div className="procards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {[1, 2, 3, 4, 5, 6, 7].map((procard, i) => (
          <ProgramCard key={i} />
        ))}
      </div>
    </section>
  );
}

export default ClusterComp