"use client"

import Link from 'next/link'
import React, { useRef } from 'react'
import landing7 from "../../assets/landing5.png";
import Image from 'next/image';
import dadu from "../../assets/dadu.png";
import kotak_dua from "../../assets/kotak-dua.png";
import users from "../../assets/users-user.png";
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TabMenu = () => {

  const pathname = usePathname();
  const container = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".navbar-menu-course", {
      opacity: 0,
      duration: 0.4,
      x: -100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".pilihan-menu-course",
        start: "top 70%",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })
  })
  return (
    <div>
      <div className='navbar-menu-course text-[9px] md:text-xs text-center md:text-justify xl:text-xl flex gap-3 md:gap-0 md:justify-around items-center uppercase mb-[45px]'>
        <Link className={`${pathname === "/" ? "bg-primary text-white px-3 py-1 md:px-[23px] md:py-[17px]" : "border-border-menu border text-text-menu px-3 py-1 md:px-[23px] md:py-[17px]"} rounded`}href={"/"}>Front End Developer</Link>
        <Link className={`${pathname === "/back-end" ? "bg-primary text-white px-3 py-1 md:px-[23px] md:py-[17px]" : "border-border-menu border text-text-menu px-3 py-1 md:px-[23px] md:py-[17px]"} rounded`} href={"/back-end"}>Back End Developer</Link>
        <Link className={`${pathname === "/quality" ? "bg-primary text-white px-3 py-1 md:px-[23px] md:py-[17px]" : "border-border-menu border px-3 py-1 text-text-menu md:px-[23px] md:py-[17px]"} rounded`}href={"/quality"}>Quality Assurance</Link>
        <Link className={`${pathname === "/ui-ux" ? "bg-primary text-white px-3 py-1 md:px-[23px] md:py-[17px]" : "border-border-menu border text-text-menu px-3 py-1 md:px-[23px] md:py-[17px]"} rounded`} href={"/ui-ux"}>UI/UX Design</Link>
      </div>
      
      {/* <div className='flex justify-between items-center gap-[70px]'>
        <div className='w-1/2'>

        <div className='relative'>
          <Image className='rounded-[15px]' src={landing7} alt="" width={1920} height={1080} />
          <div className='absolute top-0 left-0 bg-gradient-to-b from-primary/0 to-primary w-full h-full rounded-[15px] opacity-40'></div>
        </div>
          
        </div>

        <div className='w-1/2'>
          <h1 className='text-[37px] text-primary font-bold mb-[40px]'>Front End Certification</h1>

          <div className='space-y-[21px]'>
            <div className='flex items-center gap-[25px]'>
              <Image className='w-[30px] h-[30px]' src={dadu} alt="" width={100} height={100} />
              <p className='text-border'>This program equips you with the essential skills and knowledge to create visually appealing websites or applications.</p>
            </div>

            <div className='flex items-center gap-[25px]'>
              <Image className='w-[30px] h-[30px]' src={kotak_dua} alt="" width={100} height={100} />
              <p className='text-border'>Evaluates your proficiency in frontend programming languages and other relevant frontend technologies.</p>
            </div>

            <div className='flex items-center gap-[28px]'>
              <Image className='w-[25px] h-[25px]' src={users} alt="" width={100} height={100} />
              <p className='text-border'>Gain recognition as a qualified frontend developer, enhance your career prospects, and open doors to exciting job opportunities.</p>
            </div>
          </div>

        <div className='flex justify-center'>
            <div className='bg-primary text-white px-[98px] py-[17px] text-[18px] font-bold rounded mt-[40px] w-[283px]'>
                Get Detail
            </div>
        </div> 
        
          

        </div>
      </div> */}
    </div>
  )
}

export default TabMenu
