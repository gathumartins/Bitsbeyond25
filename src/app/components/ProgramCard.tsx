import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProgramCard() {
  return (
    <Link
      href="/programs/clusterid/programid"
      className="block rounded shadow min-h-[340px] bg-accent dark:bg-accent"
    >
      <figure className="relative w-full block h-[194px] rounded">
        <Image
          src="/images/dlp.jpg"
          alt="Program image"
          fill
          priority
          className="object-cover rounded"
        />
      </figure>
      <div className='p-4'>
        <h3 className='font-sans text-base font-bold text-blue dark:text-blue mb-2'>Digital literacy program</h3>
        <p className='font-sans text-base text-black dark:text-black'>A 12 week course of Novice youth</p>
      </div>
    </Link>
  );
}

export default ProgramCard