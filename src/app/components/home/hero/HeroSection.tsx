import Image from 'next/image'
import React from 'react'
import AnimatedIntro from './AnimatedIntro'
import LinkButton from '../../general/LinkButton'
import { LuArrowRight } from 'react-icons/lu'
import DotGrid from './DotGrid';

export default function HeroSection() {
  return (
    <section id="home" className='h-screen w-full relative flex flex-col justify-center items-center text-center bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden'>
        

<div className="absolute z-0 inset-0">
  <DotGrid
                  dotSize={5}
                  gap={15}
                  baseColor="#2F293A"
                  activeColor="#5227FF"
                  proximity={120}
                  shockRadius={250}
                  shockStrength={5}
                  resistance={750}
                  returnDuration={1.5} style={undefined}  />
</div>
      <div className="absolute z-10 flex flex-col items-center">
        <div className="w-37.5 h-37.5 relative">

            <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-lg animate-pulse opacity-50">
            </div>
            <Image
  src="/images/image.png"
  alt="Ishika Bansal"
  className="rounded-full object-cover"
  fill
  sizes="150px"  // add this
/>
        </div>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">Hi, I&apos;m a FullStack Developer</h1>

        <AnimatedIntro />
        <LinkButton href="#projects" text="See my work" icon={LuArrowRight} rounded/>

      </div>

    </section>
  )
}
