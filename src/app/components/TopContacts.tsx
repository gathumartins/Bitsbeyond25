import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';

function TopContacts() {
  return (
    
          <ul className="flex gap-11 justify-start items-center text-sm font-sans font-semibold">
            <li>
              <Link
                href="tel:+254720040975"
                className="flex gap-3 items-center"
              >
                <FaPhoneVolume
                  title="NairoBits Trust mail link icon"
                  className="inline-block text-blue w-4 h-4 dark:text-[#F7A31A]"
                />
                <span className="text-black inline-block hover:text-blue dark:hover:text-[#F7A31A]">
                  +254 720 040 975
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@nairobits.com"
                className="flex gap-3 items-center"
              >
                <FaEnvelope
                  title="NairoBits Trust mail link icon"
                  className="inline-block text-blue w-4 h-4 dark:text-[#F7A31A]"
                />
                <span className="text-black inline-block hover:text-blue dark:hover:text-[#F7A31A]">
                  info@nairobits.com
                </span>
              </Link>
            </li>
          </ul>
  )
}

export default TopContacts