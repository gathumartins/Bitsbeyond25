import ClusterComp from '@/app/components/ClusterComp'
import PagesHero from '@/app/components/PagesHero'
import React from 'react'

function page() {
  return (
    <>
    <PagesHero/>
    <main className="myCont">
      {[1,2,3,4].map((cluster, i:number)=>(
        <ClusterComp key={i} num={i}/>
      ))}
    </main>
    </>
  )
}

export default page