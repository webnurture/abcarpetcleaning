"use client"

import Link from "next/link"
import { Spotlight } from "./ui/spotlight-new"
import { FaPhoneVolume } from "react-icons/fa6"

const Hero = () => {
  return (
    <div className="h-[38rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-6xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold mb-10 sm:mb-0 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Professional Carpet Cleaning Services
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-[330px] sm:max-w-2xl text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio atque praesentium
          illo saepe molestiae perspiciatis corrupti, provident fuga sequi doloremque quaerat
          voluptate, por voluptas.
        </p>
        <div className="flex justify-center mt-6">
          <a href="tel:+9176953712" className="btn tracking-widest">
            <FaPhoneVolume />
            (917)-695-3712
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
