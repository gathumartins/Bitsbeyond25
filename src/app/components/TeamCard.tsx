import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'

function TeamCard() {
  return (
    <figure className="relative">
      <Image
        src="/images/team.jpg"
        alt="NairoBits Team Member portrait"
        width={240}
        height={300}
        className="rounded-t-[4px] dark:grayscale-100 w-full"
      />
      <figcaption className="h-16 flex gap">
        <footer className="min-h-full bg-blue dark:bg-blue rounded-b-[4px] text-white dark:text-white px-4 py-2 grow">
          <h3 className="font-black font-sans text-base">Martin Gathu</h3>
          <h4 className="font-sans text-sm">Executive Director</h4>
        </footer>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="h-10 w-10 rounded-br-[4px] bg-black dark:bg-black p-1 flex items-center justify-center text-white dark:text-white"
          title='team member linkedin profile link'
        >
          <FaLinkedinIn className='w-6 h-6'/>
        </Link>
      </figcaption>
    </figure>
  );
}

export default TeamCard