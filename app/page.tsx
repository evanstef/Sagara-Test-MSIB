"use client"

import Image from "next/image";
import React from 'react'
import landing7 from "../assets/landing5.png";
import dadu from "../assets/dadu.png";
import kotak_dua from "../assets/kotak-dua.png";
import users from "../assets/users-user.png";
import Container from "./(component)/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from((".konten1"), {
      opacity: 0,
      duration: 0.4,
      x: -100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".pilihan-menu-course",
        start: "top center",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from((".konten2"), {
      opacity: 0,
      duration: 0.4,
      x: 100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".pilihan-menu-course",
        start: "top center",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })
  })
  return (
    <Container>
    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-[70px]'>
        <div className='md:w-1/2 konten1'>

        <div className='relative'>
          <Image className='rounded-[15px]' src={landing7} alt="" width={1920} height={1080} />
          <div className='absolute top-0 left-0 bg-gradient-to-b from-primary/0 to-primary w-full h-full rounded-[15px] opacity-40'></div>
        </div>
          
        </div>

        <div className='md:w-1/2 konten2'>
          <h1 className='text-2xl text-center md:text-[28px] xl:text-justify xl:text-[37px] text-primary font-bold mb-[40px]'>Front End Certification</h1>

          <div className='space-y-[21px]'>
            <div className='flex items-center gap-[25px]'>
              <Image className='w-[30px] h-[30px]' src={dadu} alt="" width={100} height={100} />
              <p className='text-border text-sm xl:text-base'>This program equips you with the essential skills and knowledge to create visually appealing websites or applications.</p>
            </div>

            <div className='flex items-center gap-[25px]'>
              <Image className='w-[30px] h-[30px]' src={kotak_dua} alt="" width={100} height={100} />
              <p className='text-border text-sm xl:text-base'>Evaluates your proficiency in frontend programming languages and other relevant frontend technologies.</p>
            </div>

            <div className='flex items-center gap-[28px]'>
              <Image className='w-[25px] h-[25px]' src={users} alt="" width={100} height={100} />
              <p className='text-border text-sm xl:text-base'>Gain recognition as a qualified frontend developer, enhance your career prospects, and open doors to exciting job opportunities.</p>
            </div>
          </div>

        <div className='flex justify-center'>
            <div className='bg-primary text-white px-12 py-4 md:px-[98px] md:py-[17px] text-[18px] font-bold rounded mt-[40px] w-[183px] md:w-[283px]'>
                Get Detail
            </div>
        </div> 
        
          

        </div>
    </div>
    </Container>
  );
}