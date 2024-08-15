"use client"

import React, { useRef } from 'react'
import landing1 from "../../assets/landing1.jpg";
import landing2 from "../../assets/landing2.png";
import landign3 from "../../assets/landing 2.png";
import TabMenu from './TabMenu'
import Container from './Container'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const MainHome = () => {

  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null)

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".text-landing1", {
      opacity: 0,
      duration: 0.4,
      x: -100,
      ease: "power2.inOut",
    })

    tl.from(".text-landing2", {
      opacity: 0,
      duration: 0.4,
      x: -100,
      ease: "power2.inOut",
    })

    tl.from(".text-landing3", {
      opacity: 0,
      duration: 0.4,
      x: -100,
      ease: "power2.inOut",
    })

    tl.from(".get1", {
      opacity: 0,
      duration: 0.4,
      x: -100,
      ease: "power2.inOut",
    })

    gsap.from(".about1", {
      opacity: 0,
      x: -100,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from(".about2", {
      opacity: 0,
      x: 100,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
      
      }
    })

    // Bagian Why
    gsap.from(".why1 h1", {
      opacity: 0,
      x: -100,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".why-sagara",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
     
      }
    })

    gsap.from(".why1 p", {
      opacity: 0,
      x: -100,
      delay: 0.2,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".why-sagara",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from(".why1 svg", {
      opacity: 0,
      x: -100,
      delay: 0.2,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".why-sagara",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from(".why2", {
      opacity: 0,
      x: 100,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".why-sagara",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })
    // Akhir Why

    // Bagian How It Sagara
    gsap.from(".how", {
      opacity: 0,
      y: -100,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".how",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from(".how1", {
      opacity: 0,
      x: -100,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".how-it-sagara",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from(".how2", {
      opacity: 0,
      x: 100,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".how-it-sagara",
        start: "top bottom",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })
    // Bagian Akhir How It Sagara

    // Bagian Menu 
    gsap.from(".menu1", {
      opacity: 0,
      y: -100,
      duration: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".pilihan-menu-course",
        start: "top center",
        end: "center top",
        toggleActions: "play none none reverse",
      }
    })
    // Bagian Akhir Menu


  },{scope: container}) 
  

  
  return (
    <main ref={container}>
      {/* bagian gambar konten */}
      <div className="relative mb-10">
        <Image src={landing1} width={1920} height={1080} alt="" />
        <div className="absolute w-full h-full top-0 bg-gradient-to-r from-black/60 to-black/10 text-white flex items-center">
            <Container>
                <div className="w-[80%] md:w-[65%] xl:w-1/2">
                  <h1 className="text-sm md:text-2xl xl:text-[60px] xl:mb-6 text-landing1">Live <span className="font-bold">Your Best</span> Life</h1>
                  <h1 className="text-sm md:text-2xl xl:text-[60px] text-landing2">Using <span className="font-bold">Your Strengths</span></h1>
                  <p className="text-[8px] mt-1 mb-2 md:text-base md:mt-5 md:mb-10 xl:mt-7 text-landing3">Meet some of the people who have completed the Sagara Technology and use their results to maximize their potential at work and everywhere else.</p>
                  <p className="get1 bg-primary w-[100px] text-[8px] md:w-[200px] xl:w-[284px] py-1 lg:py-4 font-bold md:text-lg text-center rounded-[4px]">Get Certification</p>
                </div>  
            </Container>
        </div>
      </div>
      {/* akhir gambar konten */}

      <Container>
      {/* About */}
        <div className="about flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center">

          <div className="mb-5 md:mb-0 md:w-[30%] about1">
            <div className="w-[85px] md:w-[118px] ml-[4px] h-1 bg-border rounded-[5px] mb-1 md:mb-3"></div>
            <h1 className="text-lg md:text-[25px]">ABOUT US</h1>
          </div>

          <div className="md:w-[70%] space-y-5 about2">
            <p className="text-lg md:text-xl xl:text-2xl text-primary">SAGARA IT CERTIFICATION</p>
            <p className="text-2xl xl:text-[40px] gradient-text"><span className="font-bold text-primary">Join thousands</span> of professionals who have elevated their skills and carved out success in the technology industry. Start your journey to excellence with us today!</p>
            <p className="text-lg md:text-xl xl:text-2xl text-konten">Boost your career prospects in the digital era with industry-recognized information technology certifications from Sagara IT Certification.</p>
          </div>

        </div>
      {/* Akhir About */}

      {/* Why Sagara */}
      <div className="why-sagara flex flex-col items-center md:flex-row gap-[61px] my-[118px]">

        <div className="md:w-1/2 why1">
          <h1 className="text-primary text-3xl xl:text-[40px] mb-[15px] md:mb-[25px] font-bold text-center md:text-left">WHY SAGARA IT CERTIFICATION? </h1>
          {/* Protect */}
          <div className="mb-[20px] xl:mb-[36px]">
            <div className="flex gap-6">
                <svg className='w-[100px] h-[100px] xl:w-[65px] xl:h-[65px]' viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2002_405)">
                  <rect y="0.5" width="60" height="60" rx="12" fill="#F6E8EB"/>
                  <g filter="url(#filter0_f_2002_405)">
                  <rect x="16" y="25.5" width="27" height="27" rx="10" fill="#00AA63" fill-opacity="0.25"/>
                  </g>
                  <g clip-path="url(#clip1_2002_405)">
                  <path d="M41.483 35.5338C40.6767 37.7192 39.4572 39.6193 37.858 41.181C36.0377 42.9585 33.6541 44.3709 30.7734 45.3785C30.6789 45.4114 30.5802 45.4384 30.4811 45.4584C30.3502 45.4842 30.217 45.4982 30.0849 45.5H30.0591C29.9183 45.5 29.7768 45.4858 29.6365 45.4584C29.5374 45.4384 29.4402 45.4114 29.3461 45.3792C26.4619 44.3732 24.0754 42.9615 22.2533 41.184C20.6534 39.6223 19.4341 37.7233 18.6289 35.5379C17.1648 31.5645 17.2481 27.1874 17.3151 23.6699L17.3163 23.6159C17.3298 23.3255 17.3385 23.0204 17.3433 22.6834C17.3678 21.0293 18.6829 19.6608 20.3373 19.5686C23.7865 19.3761 26.4548 18.2511 28.7347 16.0289L28.7547 16.0106C29.1332 15.6634 29.6102 15.4931 30.0849 15.5002C30.5427 15.5062 30.9986 15.6762 31.3637 16.0106L31.3831 16.0289C33.6635 18.2511 36.3318 19.3761 39.781 19.5686C41.4354 19.6608 42.7506 21.0293 42.7751 22.6834C42.7799 23.0226 42.7886 23.3273 42.8021 23.6159L42.8027 23.6388C42.8696 27.1629 42.9524 31.5487 41.483 35.5338Z" fill="#00DD80"/>
                  <path d="M41.4829 35.5338C40.6766 37.7192 39.4571 39.6194 37.8579 41.181C36.0376 42.9585 33.654 44.371 30.7733 45.3785C30.6788 45.4115 30.5801 45.4385 30.481 45.4584C30.3501 45.4842 30.2169 45.4982 30.0848 45.5V15.5002C30.5426 15.5062 30.9985 15.6763 31.3636 16.0107L31.3831 16.029C33.6634 18.2512 36.3317 19.3761 39.781 19.5686C41.4353 19.6609 42.7505 21.0293 42.775 22.6835C42.7798 23.0227 42.7885 23.3273 42.802 23.6159L42.8027 23.6388C42.8695 27.1629 42.9524 31.5488 41.4829 35.5338Z" fill="#00AA63"/>
                  <path d="M37.5351 30.5C37.5351 34.6137 34.195 37.9622 30.0848 37.9769H30.0584C25.936 37.9769 22.5815 34.6226 22.5815 30.5C22.5815 26.3776 25.936 23.0233 30.0584 23.0233H30.0848C34.195 23.038 37.5351 26.3865 37.5351 30.5Z" fill="white"/>
                  <path d="M37.5352 30.5C37.5352 34.6137 34.1951 37.9622 30.0848 37.9769V23.0233C34.1951 23.038 37.5352 26.3865 37.5352 30.5Z" fill="#E1EBF0"/>
                  <path d="M33.4521 29.4233L30.0848 32.7911L29.3571 33.5187C29.1852 33.6906 28.9598 33.7764 28.7346 33.7764C28.5091 33.7764 28.2839 33.6906 28.1118 33.5187L26.5474 31.9536C26.2036 31.6098 26.2036 31.053 26.5474 30.7089C26.8907 30.3652 27.4483 30.3652 27.792 30.7089L28.7346 31.6515L32.2074 28.1787C32.5512 27.8347 33.1087 27.8347 33.4521 28.1787C33.7958 28.5224 33.7958 29.08 33.4521 29.4233Z" fill="#B4D2D7"/>
                  <path d="M33.4521 29.4233L30.0848 32.7911V30.3011L32.2075 28.1787C32.5513 27.8347 33.1088 27.8347 33.4521 28.1787C33.7959 28.5224 33.7959 29.08 33.4521 29.4233Z" fill="#6FA5AA"/>
                  </g>
                  </g>
                  <defs>
                  <filter id="filter0_f_2002_405" x="6" y="15.5" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2002_405"/>
                  </filter>
                  <clipPath id="clip0_2002_405">
                  <rect y="0.5" width="60" height="60" rx="12" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_2002_405">
                  <rect width="30" height="30" fill="white" transform="translate(15 15.5)"/>
                  </clipPath>
                  </defs>
                </svg>
                <div>
                  <h1 className="text-primary mb-2 text-lg  xl:text-xl font-bold">Global Credibility Boost</h1>
                  <p className='text-sm xl:text-base'>Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.</p>
                </div>
            </div>
          </div>
          {/* Akhir Protect */}

          {/* People */}
          <div className="mb-[20px] xl:mb-[36px]">
            <div className="flex gap-6">
                <svg className='w-[100px] h-[100px] xl:w-[65px] xl:h-[65px]' viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2002_419)">
                <rect y="0.5" width="60" height="60" rx="12" fill="#F6E8EB"/>
                <g filter="url(#filter0_f_2002_419)">
                <rect x="16" y="25.5" width="27" height="27" rx="10" fill="#7D89FF" fill-opacity="0.2"/>
                </g>
                <g clip-path="url(#clip1_2002_419)">
                <path d="M21.2 40.1774C18.7814 40.1774 16.8132 42.2039 16.8132 44.6227V45.5H23.8321L25.4982 43.6868C25.0905 41.6868 23.3185 40.1774 21.2 40.1774Z" fill="#FF5E70"/>
                <path d="M21.2 40.1773C19.2646 40.1773 17.6906 38.6033 17.6906 36.6679C17.6906 34.7322 19.2646 33.1584 21.2 33.1584C23.1357 33.1584 24.7094 34.7322 24.7094 36.6679C24.7094 38.6033 23.1357 40.1773 21.2 40.1773Z" fill="#FF5E70"/>
                <path d="M38.7472 40.1774C36.6289 40.1774 34.8569 41.6868 34.4492 43.6868L36.1152 45.5H43.1341V44.6227C43.1341 42.2039 41.166 40.1774 38.7472 40.1774Z" fill="#FF3651"/>
                <path d="M38.7472 40.1773C36.8118 40.1773 35.2378 38.6033 35.2378 36.6679C35.2378 34.7322 36.8118 33.1584 38.7472 33.1584C40.6829 33.1584 42.2567 34.7322 42.2567 36.6679C42.2567 38.6033 40.6829 40.1773 38.7472 40.1773Z" fill="#FF3651"/>
                <path d="M35.308 19.4365L31.6233 18.8925L29.9737 15.5L28.3242 18.8925L24.6394 19.4365L27.3066 22.0334L26.6749 25.6834L29.9737 23.9638L33.2726 25.6834L32.6409 22.0334L35.308 19.4365Z" fill="#FDBF00"/>
                <path d="M42.7425 31.6573L39.4489 29.9267L36.1571 31.6573L36.7861 27.991L34.123 25.3951L37.803 24.8604L39.4491 21.5249L41.095 24.8604L44.9473 25.3951L42.1119 27.991L42.7425 31.6573Z" fill="#FF9100"/>
                <path d="M23.7902 31.6573L20.4984 29.9267L17.2048 31.6573L17.8354 27.991L15 25.3951L18.8523 24.8604L20.4982 21.5249L22.1443 24.8604L25.8243 25.3951L23.1612 27.991L23.7902 31.6573Z" fill="#FDBF00"/>
                <path d="M29.9737 27.8942C27.5521 27.8942 25.5869 29.8596 25.5869 32.2811C25.5869 34.7025 27.5521 36.6679 29.9737 36.6679C32.3952 36.6679 34.3604 34.7025 34.3604 32.2811C34.3604 29.8596 32.3952 27.8942 29.9737 27.8942Z" fill="#7D89FF"/>
                <path d="M29.9736 36.668C26.5871 36.668 23.832 39.4228 23.832 42.8096V45.5001H36.1152V42.8096C36.1152 39.4228 33.3602 36.668 29.9736 36.668Z" fill="#7D89FF"/>
                <path d="M29.9736 36.6679V27.8942C32.3952 27.8942 34.3604 29.8596 34.3604 32.2811C34.3604 34.7025 32.3952 36.6679 29.9736 36.6679Z" fill="#6B78F7"/>
                <path d="M33.2725 25.6834L29.9736 23.9636V15.5L31.6232 18.8925L35.308 19.4365L32.6408 22.0334L33.2725 25.6834Z" fill="#FF9100"/>
                <path d="M36.1152 42.8096V45.5001H29.9736V36.668C33.3602 36.668 36.1152 39.4228 36.1152 42.8096Z" fill="#6B78F7"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_f_2002_419" x="6" y="15.5" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2002_419"/>
                </filter>
                <clipPath id="clip0_2002_419">
                <rect y="0.5" width="60" height="60" rx="12" fill="white"/>
                </clipPath>
                <clipPath id="clip1_2002_419">
                <rect width="30" height="30" fill="white" transform="translate(15 15.5)"/>
                </clipPath>
                </defs>
                </svg>
                <div>
                  <h1 className="text-primary mb-2 text-lg xl:text-xl font-bold">Empowering Careers</h1>
                  <p className='text-sm xl:text-base'>Equipped to advance your career, secure promotions, and pursue new job opportunities in the ever-evolving tech industry. </p>
                </div>
            </div>
          </div>
          {/* Akhir Akhir People */}

           {/* Achiv */}
           <div className="mb-[20px] md:mb-[36px]">
            <div className="flex gap-6">
                <svg className='w-[100px] h-[100px] xl:w-[65px] xl:h-[65px]' viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="60" height="60" rx="12" fill="#F6E8EB"/>
                <g filter="url(#filter0_f_2002_442)">
                <path d="M16 22.5C16 16.9772 20.4772 12.5 26 12.5H33C38.5228 12.5 43 16.9772 43 22.5V31.5C43 37.0228 38.5228 41.5 33 41.5H29.5H26C20.4772 41.5 16 37.0228 16 31.5V22.5Z" fill="#FF9838" fill-opacity="0.25"/>
                </g>
                <g filter="url(#filter1_f_2002_442)">
                <path d="M21 41.5C21 37.0817 24.5817 33.5 29 33.5H32C36.4183 33.5 40 37.0817 40 41.5C40 45.9183 36.4183 49.5 32 49.5H30.5H29C24.5817 49.5 21 45.9183 21 41.5Z" fill="#FF4755" fill-opacity="0.25"/>
                </g>
                <g clip-path="url(#clip0_2002_442)">
                <path d="M36.9552 36.7509L37.6844 36.9219L40.0518 43.7236C40.1272 43.9402 39.9517 44.1617 39.7235 44.1378L36.4051 43.7903C36.3124 43.7806 36.2202 43.8127 36.1536 43.8779L33.7682 46.2106C33.6042 46.371 33.329 46.3064 33.2536 46.0897L30.8707 39.2437L31.2155 38.7384L36.9552 36.7509Z" fill="#FF4755"/>
                <path d="M30.8709 39.2436L30.3894 37.8603L37.2045 35.5427L37.6846 36.9219C35.7494 38.3028 33.4061 39.1481 30.8709 39.2436Z" fill="#FC2B3A"/>
                <path d="M23.8337 36.7509L23.1045 36.9219L20.7371 43.7236C20.6617 43.9402 20.8372 44.1617 21.0654 44.1378L24.3838 43.7903C24.4765 43.7806 24.5686 43.8127 24.6352 43.8779L27.0207 46.2106C27.1847 46.371 27.4599 46.3064 27.5352 46.0897L29.9181 39.2437L29.5733 38.7384L23.8337 36.7509Z" fill="#FF4755"/>
                <path d="M29.9185 39.2436L30.4 37.8603L23.5849 35.5427L23.1049 36.9219C25.04 38.3028 27.3833 39.1481 29.9185 39.2436Z" fill="#FC2B3A"/>
                <path d="M30.3983 37.0725C19.2321 37.0725 19.2228 26.3033 19.2321 26.1167C19.5256 20.2039 24.4126 15.5 30.3983 15.5C36.3839 15.5 41.271 20.2039 41.5645 26.1167C41.5737 26.3033 41.5784 37.0725 30.3983 37.0725Z" fill="#FFCB5B"/>
                <path d="M30.3999 36.7332C24.4142 36.7332 19.5274 32.0293 19.2338 26.1166C19.2245 26.3032 19.2197 26.4911 19.2197 26.6801C19.2197 32.8547 24.2253 37.8602 30.3999 37.8602C36.5745 37.8602 41.58 32.8547 41.58 26.6801C41.58 26.4911 41.5752 26.3032 41.566 26.1166C41.2724 32.0293 36.3856 36.7332 30.3999 36.7332Z" fill="#F7B737"/>
                <path d="M30.3998 34.7517C21.6099 34.7517 21.5981 26.303 21.6099 26.1166C21.9005 21.5149 25.7248 17.8726 30.3998 17.8726C35.0747 17.8726 38.8991 21.5149 39.1896 26.1166C39.2014 26.303 39.2074 34.7517 30.3998 34.7517Z" fill="#FF9838"/>
                <path d="M30.3996 34.3606C25.7247 34.3606 21.9011 30.7182 21.6105 26.1166C21.5987 26.3029 21.592 26.4907 21.592 26.6801C21.592 31.5444 25.5353 35.4877 30.3996 35.4877C35.2639 35.4877 39.2072 31.5444 39.2072 26.6801C39.2072 26.4907 39.2006 26.3029 39.1888 26.1166C38.8982 30.7182 35.0746 34.3606 30.3996 34.3606Z" fill="#FF8709"/>
                <path d="M31.206 22.3898L32.0274 24.0542C32.1584 24.3195 32.4116 24.5035 32.7044 24.546L34.5412 24.8129C35.2787 24.9201 35.5732 25.8264 35.0395 26.3466L33.7104 27.6421C33.4985 27.8487 33.4018 28.1463 33.4518 28.438L33.7656 30.2673C33.7954 30.4408 33.718 30.749 33.718 30.749H32.461L30.3997 29.5901L28.3385 30.749L27.0918 30.774C27.0918 30.774 27.0023 30.4509 27.0339 30.2673L27.3476 28.4379C27.3977 28.1462 27.301 27.8486 27.089 27.6421L25.7599 26.3465C25.2263 25.8264 25.5208 24.9201 26.2583 24.8129L28.095 24.5459C28.3879 24.5034 28.6411 24.3195 28.772 24.0541L29.5935 22.3897C29.9232 21.7215 30.8762 21.7215 31.206 22.3898Z" fill="#FFF5F5"/>
                <path d="M30.254 29.0812L27.0819 30.749C27.2664 31.2158 27.8346 31.4802 28.3385 31.2154L29.9813 30.3516C30.2432 30.2139 30.5562 30.2139 30.8181 30.3516L32.461 31.2154C32.9648 31.4802 33.5331 31.2158 33.7176 30.749L30.5455 29.0812C30.4541 29.0333 30.3452 29.0333 30.254 29.0812Z" fill="#EFE2DD"/>
                </g>
                <defs>
                <filter id="filter0_f_2002_442" x="6" y="2.5" width="47" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2002_442"/>
                </filter>
                <filter id="filter1_f_2002_442" x="11" y="23.5" width="39" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2002_442"/>
                </filter>
                <clipPath id="clip0_2002_442">
                <rect width="30.8" height="30.8" fill="white" transform="translate(15 15.5)"/>
                </clipPath>
                </defs>
                </svg>
                <div>
                  <h1 className="text-primary mb-2 text-lg xl:text-xl font-bold">Expertise Validation</h1>
                  <p className='text-sm xl:text-base'>Showcase your expertise and validate your skills with globally recognized certifications that employers trust.</p>
                </div>
            </div>
          </div>
          {/* Akhir Achiv */}
        </div>

        <div className="md:w-1/2 why2">
          <Image src={landing2} alt="" width={1920} height={1080} />
        </div>
      </div>
      {/* Akhir Why Sagara */}

      {/* How Sagara Work */}

      <div className="flex flex-col justify-center items-center mb-[45px] how">
        <div className="w-[70px] h-1 bg-primary mb-[42px] rounded"></div>
        <h1 className="text-primary text-3xl xl:text-[40px] md:mb-2">How Sagara</h1>
        <h1 className="font-bold text-primary text-3xl xl:text-[40px] text-center xl:text-justify">IT-Certification Works</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-[110px] justify-between mb-[60px] how-it-sagara">
        <div className="md:w-1/2 how1">
          <Image src={landign3} alt="" width={1920} height={1080} />
        </div>

        <div className="ml-[10px] md:ml-0 md:w-1/2 how2">

          <div className="flex gap-[40px] md:gap-[50px] ">
              <div className="h-[500px] md:h-[570px] xl:h-[500px] mt-3 md:mt-0 border-primary border-l-[3px] border-dashed relative">
                <svg className="absolute -top-8 -left-[75px]" width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_2002_562)">
                          <circle cx="74" cy="59" r="30" fill="#FBFBFB"/>
                          </g>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M69.0312 50.8437C69.0312 49.3933 69.6074 48.0023 70.633 46.9768C71.6586 45.9512 73.0496 45.375 74.5 45.375C75.9504 45.375 77.3414 45.9512 78.367 46.9768C79.3926 48.0023 79.9688 49.3933 79.9688 50.8437C79.9688 52.2942 79.3926 53.6852 78.367 54.7107C77.3414 55.7363 75.9504 56.3125 74.5 56.3125C73.0496 56.3125 71.6586 55.7363 70.633 54.7107C69.6074 53.6852 69.0312 52.2942 69.0312 50.8437ZM79.9688 55.2187C79.9688 54.0584 80.4297 52.9456 81.2502 52.1252C82.0706 51.3047 83.1834 50.8437 84.3438 50.8437C85.5041 50.8437 86.6169 51.3047 87.4373 52.1252C88.2578 52.9456 88.7188 54.0584 88.7188 55.2187C88.7188 56.3791 88.2578 57.4919 87.4373 58.3123C86.6169 59.1328 85.5041 59.5938 84.3438 59.5938C83.1834 59.5938 82.0706 59.1328 81.2502 58.3123C80.4297 57.4919 79.9688 56.3791 79.9688 55.2187ZM60.2812 55.2187C60.2812 54.0584 60.7422 52.9456 61.5627 52.1252C62.3831 51.3047 63.4959 50.8437 64.6562 50.8437C65.8166 50.8437 66.9294 51.3047 67.7498 52.1252C68.5703 52.9456 69.0312 54.0584 69.0312 55.2187C69.0312 56.3791 68.5703 57.4919 67.7498 58.3123C66.9294 59.1328 65.8166 59.5938 64.6562 59.5938C63.4959 59.5938 62.3831 59.1328 61.5627 58.3123C60.7422 57.4919 60.2812 56.3791 60.2812 55.2187ZM66.2021 63.0456C67.0916 61.6515 68.3182 60.5041 69.7686 59.7096C71.219 58.9151 72.8463 58.4991 74.5 58.5C75.8852 58.4987 77.255 58.79 78.5197 59.3548C79.7845 59.9196 80.9158 60.7452 81.8394 61.7774C82.763 62.8097 83.4582 64.0254 83.8795 65.3449C84.3008 66.6644 84.4386 68.0581 84.284 69.4346C84.2651 69.6056 84.2061 69.7697 84.1118 69.9137C84.0175 70.0576 83.8907 70.1772 83.7415 70.2629C80.9291 71.8766 77.7424 72.7235 74.5 72.7188C71.1385 72.7188 67.9813 71.8263 65.2585 70.2629C65.1093 70.1772 64.9825 70.0576 64.8882 69.9137C64.7939 69.7697 64.7349 69.6056 64.716 69.4346C64.4711 67.1984 64.9953 64.9455 66.2021 63.0471V63.0456Z" fill="#A51535"/>
                          <path d="M64.4112 61.7871C62.973 64.0073 62.3029 66.638 62.5037 69.2757C61.628 69.1429 60.7667 68.928 59.9312 68.634L59.7635 68.5757C59.6139 68.5225 59.4829 68.4272 59.3863 68.3011C59.2898 68.1751 59.2319 68.0237 59.2196 67.8654L59.205 67.689C59.1461 66.9568 59.2353 66.2203 59.4672 65.5234C59.6992 64.8265 60.0691 64.1835 60.555 63.6326C61.0409 63.0818 61.6328 62.6345 62.2953 62.3174C62.9579 62.0004 63.6775 61.82 64.4112 61.7871ZM86.4962 69.2757C86.6971 66.638 86.027 64.0073 84.5887 61.7871C85.3225 61.82 86.0421 62.0004 86.7047 62.3174C87.3672 62.6345 87.9591 63.0818 88.445 63.6326C88.9309 64.1835 89.3008 64.8265 89.5328 65.5234C89.7647 66.2203 89.8539 66.9568 89.795 67.689L89.7804 67.8654C89.7679 68.0235 89.7098 68.1745 89.6133 68.3003C89.5167 68.4261 89.3859 68.5212 89.2365 68.5742L89.0687 68.6325C88.2419 68.9242 87.3829 69.1415 86.4962 69.2757Z" fill="#A51535"/>
                          <defs>
                          <filter id="filter0_d_2002_562" x="0" y="0" width="148" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="15"/>
                          <feGaussianBlur stdDeviation="22"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0588235 0 0 0 0 0.109804 0 0 0 0.12 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2002_562"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2002_562" result="shape"/>
                          </filter>
                          </defs>
                </svg>

                <svg className="absolute top-20 md:top-24 xl:top-20 -left-[75px]"  width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2002_575)">
                <circle cx="74" cy="59" r="30" fill="#FBFBFB"/>
                </g>
                <g clip-path="url(#clip0_2002_575)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64.8601 43.9993C65.1418 43.8286 65.4797 43.7769 65.7995 43.8554C66.1194 43.9339 66.3949 44.1363 66.5655 44.418L68.4956 47.6042C68.6663 47.8859 68.718 48.2238 68.6395 48.5437C68.561 48.8635 68.3586 49.139 68.0769 49.3097C67.7952 49.4803 67.4573 49.5321 67.1375 49.4535C66.8177 49.375 66.5421 49.1726 66.3715 48.891L64.4414 45.7047C64.2708 45.423 64.219 45.0851 64.2975 44.7653C64.3761 44.4454 64.5784 44.1699 64.8601 43.9993ZM58.1092 53.1913C58.1879 52.8718 58.3901 52.5966 58.6716 52.4261C58.953 52.2556 59.2906 52.2038 59.6103 52.282L63.2295 53.1694C63.5443 53.2527 63.8138 53.4562 63.9799 53.7362C64.146 54.0163 64.1955 54.3503 64.1178 54.6665C64.04 54.9827 63.8411 55.2556 63.564 55.4266C63.2869 55.5976 62.9538 55.6529 62.6363 55.5806L59.0193 54.6938C58.8609 54.655 58.7117 54.5853 58.5802 54.4887C58.4487 54.3922 58.3375 54.2707 58.253 54.1311C58.1684 53.9916 58.1122 53.8368 58.0876 53.6755C58.0629 53.5143 58.0702 53.3497 58.1092 53.1913ZM76.1334 42.273C76.453 42.3516 76.7282 42.5539 76.8987 42.8353C77.0692 43.1168 77.121 43.4544 77.0427 43.774L76.1554 47.3933C76.0721 47.708 75.8685 47.9775 75.5885 48.1437C75.3085 48.3098 74.9744 48.3593 74.6582 48.2815C74.3421 48.2037 74.0691 48.0049 73.8981 47.7278C73.7272 47.4507 73.6718 47.1175 73.7441 46.8001L74.6309 43.1831C74.6698 43.0247 74.7395 42.8754 74.836 42.7439C74.9326 42.6124 75.0541 42.5012 75.1936 42.4167C75.3331 42.3322 75.488 42.276 75.6492 42.2513C75.8105 42.2267 75.975 42.234 76.1334 42.273ZM70.338 54.4867C70.5183 54.2986 70.7533 54.1719 71.0095 54.1247C71.2658 54.0775 71.5305 54.1121 71.766 54.2237L85.9608 60.9503C86.1829 61.0555 86.3688 61.2243 86.4949 61.4352C86.6211 61.6461 86.6818 61.8896 86.6694 62.1351C86.6571 62.3805 86.5721 62.6168 86.4254 62.8139C86.2787 63.0111 86.0768 63.1602 85.8453 63.2426L82.5068 64.4325L87.3321 69.0589C87.57 69.287 87.7074 69.6003 87.7142 69.9298C87.721 70.2593 87.5967 70.578 87.3685 70.8158C87.1404 71.0536 86.8271 71.191 86.4976 71.1979C86.1681 71.2047 85.8494 71.0803 85.6116 70.8522L80.7886 66.2263L79.7395 69.6106C79.667 69.8455 79.5264 70.0536 79.3356 70.2085C79.1447 70.3635 78.9121 70.4583 78.6674 70.4809C78.4226 70.5036 78.1766 70.453 77.9605 70.3358C77.7445 70.2185 77.5681 70.0397 77.4537 69.8221L70.1359 55.9235C70.0143 55.693 69.9683 55.43 70.0044 55.1719C70.0405 54.9138 70.1569 54.6736 70.3371 54.4853L70.338 54.4867ZM59.8355 64.4647C59.6649 64.183 59.6131 63.845 59.6917 63.5252C59.7702 63.2054 59.9725 62.9298 60.2542 62.7592L63.4405 60.8291C63.7222 60.6585 64.0601 60.6067 64.3799 60.6853C64.6997 60.7638 64.9753 60.9661 65.1459 61.2478C65.3166 61.5295 65.3683 61.8674 65.2898 62.1873C65.2112 62.5071 65.0089 62.7826 64.7272 62.9533L61.541 64.8834C61.2593 65.054 60.9213 65.1057 60.6015 65.0272C60.2817 64.9487 60.0061 64.7463 59.8355 64.4647ZM80.0151 52.2407C79.8444 51.959 79.7927 51.6211 79.8712 51.3012C79.9497 50.9814 80.1521 50.7059 80.4338 50.5352L83.62 48.6051C83.9017 48.4345 84.2396 48.3828 84.5595 48.4613C84.8793 48.5398 85.1548 48.7422 85.3255 49.0239C85.4961 49.3055 85.5479 49.6435 85.4693 49.9633C85.3908 50.2831 85.1884 50.5587 84.9068 50.7293L81.7205 52.6594C81.4388 52.83 81.1009 52.8818 80.7811 52.8033C80.4612 52.7247 80.1857 52.5224 80.0151 52.2407ZM70.5081 65.1851C70.6666 65.2239 70.8158 65.2936 70.9473 65.3902C71.0788 65.4867 71.19 65.6082 71.2745 65.7478C71.359 65.8873 71.4152 66.0421 71.4399 66.2034C71.4646 66.3646 71.4572 66.5292 71.4183 66.6876L70.53 70.3054C70.4936 70.4662 70.4255 70.6181 70.3297 70.7523C70.2339 70.8865 70.1123 71.0003 69.9721 71.087C69.8318 71.1738 69.6757 71.2317 69.5129 71.2574C69.35 71.2832 69.1837 71.2762 69.0235 71.237C68.8634 71.1977 68.7126 71.127 68.5801 71.0289C68.4476 70.9308 68.336 70.8072 68.2517 70.6655C68.1674 70.5238 68.1122 70.3667 68.0893 70.2034C68.0664 70.0401 68.0762 69.8739 68.1183 69.7145L69.0056 66.0952C69.0843 65.7757 69.2866 65.5005 69.568 65.33C69.8495 65.1595 70.1871 65.1077 70.5067 65.1859L70.5081 65.1851Z" fill="#A51535"/>
                </g>
                <defs>
                <filter id="filter0_d_2002_575" x="0" y="0" width="148" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="15"/>
                <feGaussianBlur stdDeviation="22"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0588235 0 0 0 0 0.109804 0 0 0 0.12 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2002_575"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2002_575" result="shape"/>
                </filter>
                <clipPath id="clip0_2002_575">
                <rect width="39.7359" height="39.7359" fill="white" transform="translate(46.5801 52.1689) rotate(-31.2058)"/>
                </clipPath>
                </defs>
                </svg>

                <svg className="absolute top-52 md:top-64 xl:top-52 -left-[75px]"  width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2002_587)">
                <circle cx="74" cy="59" r="30" fill="#FBFBFB"/>
                </g>
                <path d="M63.5625 46.4688C62.4022 46.4688 61.2894 46.9297 60.4689 47.7502C59.6484 48.5706 59.1875 49.6834 59.1875 50.8438V51.9375H89.8125V50.8438C89.8125 49.6834 89.3516 48.5706 88.5311 47.7502C87.7106 46.9297 86.5978 46.4688 85.4375 46.4688H63.5625Z" fill="#A51535"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M89.8125 55.2188H59.1875V66.1562C59.1875 67.3166 59.6484 68.4294 60.4689 69.2498C61.2894 70.0703 62.4022 70.5312 63.5625 70.5312H85.4375C86.5978 70.5312 87.7106 70.0703 88.5311 69.2498C89.3516 68.4294 89.8125 67.3166 89.8125 66.1562V55.2188ZM63.5625 60.6875C63.5625 60.3974 63.6777 60.1192 63.8829 59.9141C64.088 59.709 64.3662 59.5938 64.6562 59.5938H73.4062C73.6963 59.5938 73.9745 59.709 74.1796 59.9141C74.3848 60.1192 74.5 60.3974 74.5 60.6875C74.5 60.9776 74.3848 61.2558 74.1796 61.4609C73.9745 61.666 73.6963 61.7812 73.4062 61.7812H64.6562C64.3662 61.7812 64.088 61.666 63.8829 61.4609C63.6777 61.2558 63.5625 60.9776 63.5625 60.6875ZM64.6562 63.9688C64.3662 63.9688 64.088 64.084 63.8829 64.2891C63.6777 64.4942 63.5625 64.7724 63.5625 65.0625C63.5625 65.3526 63.6777 65.6308 63.8829 65.8359C64.088 66.041 64.3662 66.1562 64.6562 66.1562H69.0312C69.3213 66.1562 69.5995 66.041 69.8046 65.8359C70.0098 65.6308 70.125 65.3526 70.125 65.0625C70.125 64.7724 70.0098 64.4942 69.8046 64.2891C69.5995 64.084 69.3213 63.9688 69.0312 63.9688H64.6562Z" fill="#A51535"/>
                <defs>
                <filter id="filter0_d_2002_587" x="0" y="0" width="148" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="15"/>
                <feGaussianBlur stdDeviation="22"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0588235 0 0 0 0 0.109804 0 0 0 0.12 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2002_587"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2002_587" result="shape"/>
                </filter>
                </defs>
                </svg>

                <svg className="absolute top-[335px] md:top-[405px] xl:top-[335px] -left-[75px]"  width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2002_601)">
                <circle cx="74" cy="59" r="30" fill="#FBFBFB"/>
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M67.9404 49.75H78.3354C79.6395 49.7519 80.8896 50.2713 81.811 51.1942C82.7325 52.117 83.25 53.3678 83.25 54.6719V68.3438C84.4103 68.3438 85.5231 67.8828 86.3436 67.0623C87.1641 66.2419 87.625 65.1291 87.625 63.9688V49.9075C87.625 47.7127 85.9844 45.8081 83.74 45.62C83.413 45.5934 83.0859 45.5691 82.7586 45.5471C82.3894 44.8358 81.832 44.2396 81.1472 43.8235C80.4623 43.4074 79.6764 43.1874 78.875 43.1875H76.6875C75.8862 43.1874 75.1002 43.4074 74.4154 43.8235C73.7305 44.2396 73.1731 44.8358 72.804 45.5471C72.4758 45.569 72.1477 45.5938 71.8225 45.62C69.6321 45.8052 68.0163 47.6238 67.9404 49.75ZM76.6875 45.375C76.1074 45.375 75.551 45.6055 75.1407 46.0157C74.7305 46.4259 74.5 46.9823 74.5 47.5625H81.0625C81.0625 46.9823 80.832 46.4259 80.4218 46.0157C80.0116 45.6055 79.4552 45.375 78.875 45.375H76.6875Z" fill="#A51535"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M61.375 54.6719C61.375 53.161 62.6 51.9375 64.1094 51.9375H78.3281C79.839 51.9375 81.0625 53.1625 81.0625 54.6719V71.0781C81.0625 72.5875 79.8375 73.8125 78.3281 73.8125H64.1094C63.3842 73.8125 62.6887 73.5244 62.1759 73.0116C61.6631 72.4988 61.375 71.8033 61.375 71.0781V54.6719ZM65.75 58.5C65.75 58.2099 65.8652 57.9317 66.0704 57.7266C66.2755 57.5215 66.5537 57.4062 66.8438 57.4062H66.8554C67.1455 57.4062 67.4237 57.5215 67.6288 57.7266C67.8339 57.9317 67.9492 58.2099 67.9492 58.5V58.5117C67.9492 58.8017 67.8339 59.0799 67.6288 59.2851C67.4237 59.4902 67.1455 59.6054 66.8554 59.6054H66.8438C66.5537 59.6054 66.2755 59.4902 66.0704 59.2851C65.8652 59.0799 65.75 58.8017 65.75 58.5117V58.5ZM69.0312 58.5C69.0312 58.2099 69.1465 57.9317 69.3516 57.7266C69.5567 57.5215 69.8349 57.4062 70.125 57.4062H75.5938C75.8838 57.4062 76.162 57.5215 76.3671 57.7266C76.5723 57.9317 76.6875 58.2099 76.6875 58.5C76.6875 58.7901 76.5723 59.0683 76.3671 59.2734C76.162 59.4785 75.8838 59.5938 75.5938 59.5938H70.125C69.8349 59.5938 69.5567 59.4785 69.3516 59.2734C69.1465 59.0683 69.0312 58.7901 69.0312 58.5ZM65.75 62.875C65.75 62.5849 65.8652 62.3067 66.0704 62.1016C66.2755 61.8965 66.5537 61.7812 66.8438 61.7812H66.8554C67.1455 61.7812 67.4237 61.8965 67.6288 62.1016C67.8339 62.3067 67.9492 62.5849 67.9492 62.875V62.8867C67.9492 63.1767 67.8339 63.4549 67.6288 63.6601C67.4237 63.8652 67.1455 63.9804 66.8554 63.9804H66.8438C66.5537 63.9804 66.2755 63.8652 66.0704 63.6601C65.8652 63.4549 65.75 63.1767 65.75 62.8867V62.875ZM69.0312 62.875C69.0312 62.5849 69.1465 62.3067 69.3516 62.1016C69.5567 61.8965 69.8349 61.7812 70.125 61.7812H75.5938C75.8838 61.7812 76.162 61.8965 76.3671 62.1016C76.5723 62.3067 76.6875 62.5849 76.6875 62.875C76.6875 63.1651 76.5723 63.4433 76.3671 63.6484C76.162 63.8535 75.8838 63.9688 75.5938 63.9688H70.125C69.8349 63.9688 69.5567 63.8535 69.3516 63.6484C69.1465 63.4433 69.0312 63.1651 69.0312 62.875ZM65.75 67.25C65.75 66.9599 65.8652 66.6817 66.0704 66.4766C66.2755 66.2715 66.5537 66.1562 66.8438 66.1562H66.8554C67.1455 66.1562 67.4237 66.2715 67.6288 66.4766C67.8339 66.6817 67.9492 66.9599 67.9492 67.25V67.2617C67.9492 67.5517 67.8339 67.8299 67.6288 68.0351C67.4237 68.2402 67.1455 68.3554 66.8554 68.3554H66.8438C66.5537 68.3554 66.2755 68.2402 66.0704 68.0351C65.8652 67.8299 65.75 67.5517 65.75 67.2617V67.25ZM69.0312 67.25C69.0312 66.9599 69.1465 66.6817 69.3516 66.4766C69.5567 66.2715 69.8349 66.1562 70.125 66.1562H75.5938C75.8838 66.1562 76.162 66.2715 76.3671 66.4766C76.5723 66.6817 76.6875 66.9599 76.6875 67.25C76.6875 67.5401 76.5723 67.8183 76.3671 68.0234C76.162 68.2285 75.8838 68.3438 75.5938 68.3438H70.125C69.8349 68.3438 69.5567 68.2285 69.3516 68.0234C69.1465 67.8183 69.0312 67.5401 69.0312 67.25Z" fill="#A51535"/>
                <defs>
                <filter id="filter0_d_2002_601" x="0" y="0" width="148" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="15"/>
                <feGaussianBlur stdDeviation="22"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0588235 0 0 0 0 0.109804 0 0 0 0.12 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2002_601"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2002_601" result="shape"/>
                </filter>
                </defs>
                </svg>

                <svg  className="absolute top-[440px] md:top-[520px] xl:top-[440px] -left-[75px]"   width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2002_613)">
                <circle cx="74" cy="59" r="30" fill="#FBFBFB"/>
                </g>
                <path d="M74.0625 48.0906C74.2005 48.0304 74.3494 47.9993 74.5 47.9993C74.6506 47.9993 74.7995 48.0304 74.9375 48.0906C80.3305 50.4479 85.4747 53.3376 90.2937 56.7167C90.4636 56.8358 90.596 57.0007 90.6757 57.1922C90.7553 57.3838 90.7788 57.594 90.7435 57.7984C90.7082 58.0028 90.6155 58.1929 90.4762 58.3466C90.3369 58.5003 90.1568 58.6113 89.9569 58.6665C84.9539 60.0482 80.1129 61.9608 75.5165 64.3715L75.5121 64.3744C75.3458 64.4619 75.181 64.5479 75.0162 64.6369C74.8576 64.7217 74.6806 64.766 74.5007 64.766C74.3209 64.766 74.1438 64.7217 73.9852 64.6369C72.0138 63.5848 69.9958 62.6223 67.9375 61.7523V61.4256C67.9375 61.2346 68.0352 61.064 68.1883 60.9721C70.3895 59.6382 72.654 58.4117 74.974 57.2971C75.2354 57.1714 75.4362 56.947 75.5322 56.6732C75.6282 56.3995 75.6115 56.0988 75.4858 55.8373C75.3601 55.5758 75.1357 55.375 74.8619 55.279C74.5882 55.183 74.2875 55.1997 74.026 55.3254C71.6428 56.4706 69.3165 57.7307 67.0552 59.1011C66.7335 59.2962 66.456 59.5562 66.2403 59.8646C66.0246 60.1729 65.8755 60.5228 65.8025 60.8919C63.5876 60.0396 61.3322 59.2965 59.0446 58.665C58.8446 58.6098 58.6645 58.4989 58.5252 58.3452C58.3859 58.1915 58.2932 58.0013 58.2579 57.7969C58.2226 57.5925 58.2461 57.3823 58.3258 57.1908C58.4054 56.9993 58.5379 56.8343 58.7077 56.7152C63.5263 53.3367 68.6701 50.4475 74.0625 48.0906Z" fill="#A51535"/>
                <path d="M76.0458 66.5648C79.6278 64.651 83.3682 63.0497 87.2254 61.7785C87.4208 63.8406 87.5462 65.9246 87.5972 68.026C87.6029 68.2463 87.5419 68.4632 87.4222 68.6482C87.3025 68.8332 87.1297 68.9778 86.9264 69.0629C82.7924 70.7894 78.8342 72.9099 75.1066 75.395C74.927 75.5147 74.7159 75.5787 74.4999 75.5787C74.284 75.5787 74.0729 75.5147 73.8933 75.395C70.1661 72.91 66.2084 70.7895 62.0749 69.0629C61.8717 68.9781 61.6987 68.8339 61.5788 68.6491C61.4588 68.4644 61.3974 68.2477 61.4027 68.0275C61.4537 65.9246 61.5791 63.8421 61.7745 61.7771C63.1177 62.2204 64.4433 62.7017 65.7499 63.2208V65.0729C65.4348 65.2544 65.17 65.5117 64.9793 65.8213C64.7886 66.131 64.6782 66.4833 64.6579 66.8464C64.6376 67.2095 64.7082 67.5719 64.8632 67.9008C65.0183 68.2298 65.2528 68.5149 65.5458 68.7304C65.4145 69.2846 65.222 69.8285 64.9668 70.3492C65.626 70.6598 66.2808 70.9821 66.9297 71.3117C67.2955 70.5676 67.5655 69.7801 67.7333 68.9681C68.1021 68.8041 68.4183 68.5413 68.647 68.2088C68.8757 67.8762 69.0079 67.4869 69.029 67.0838C69.0502 66.6808 68.9594 66.2797 68.7667 65.9251C68.5741 65.5704 68.2871 65.276 67.9374 65.0744V64.1337C69.6409 64.8779 71.3145 65.6889 72.9541 66.5648C73.4298 66.8188 73.9607 66.9517 74.4999 66.9517C75.0392 66.9517 75.5701 66.8188 76.0458 66.5648Z" fill="#A51535"/>
                <path d="M63.5071 72.3821C64.1196 71.7711 64.6052 71.0842 64.9654 70.3477C65.626 70.6598 66.2808 70.9821 66.9298 71.3131C66.4526 72.2823 65.819 73.1663 65.0543 73.9294C64.847 74.1226 64.5728 74.2278 64.2894 74.2228C64.0061 74.2178 63.7357 74.103 63.5353 73.9026C63.3349 73.7022 63.2201 73.4318 63.2151 73.1485C63.2101 72.8651 63.3153 72.5909 63.5085 72.3836L63.5071 72.3821Z" fill="#A51535"/>
                <defs>
                <filter id="filter0_d_2002_613" x="0" y="0" width="148" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="15"/>
                <feGaussianBlur stdDeviation="22"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0588235 0 0 0 0 0.109804 0 0 0 0.12 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2002_613"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2002_613" result="shape"/>
                </filter>
                </defs>
                </svg>

              </div>
              {/* konten */}
              <div>
                  
                  <div className="space-y-[15px]">
                    <div>
                      <h1 className="text-xl xl:text-2xl font-bold mb-[8px]"><span className="text-primary mr-[10px]">#1</span> Register Account</h1>
                      <p className="text-konten text-sm xl:text-base">Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.</p>
                    </div>

                    <div>
                      <h1 className="text-xl xl:text-2xl font-bold mb-[8px]"><span className="text-primary mr-[10px]">#2</span> Select the Type</h1>
                      <p className="text-konten text-sm xl:text-base">Choose from a variety of IT certification options tailored to your career goals and interests. Select the certification that aligns with your expertise.</p>
                    </div>

                    <div>
                      <h1 className="text-xl xl:text-2xl font-bold mb-[8px]"><span className="text-primary mr-[10px]">#3</span> Register and Pay</h1>
                      <p className="text-konten text-sm xl:text-base">Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.</p>
                    </div>

                    <div>
                      <h1 className="text-xl xl:text-2xl font-bold mb-[8px]"><span className="text-primary mr-[10px]">#4</span> Take Test</h1>
                      <p className="text-konten text-sm xl:text-base">Prepare for your certification exam and schedule a convenient time to take the test online. </p>
                    </div>

                    <div>
                      <h1 className="text-xl xl:text-2xl font-bold mb-[8px]"><span className="text-primary mr-[10px]">#5</span> Get the certificate</h1>
                      <p className="text-konten text-sm xl:text-base">Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.</p>
                    </div>
                  
                  </div>
                  

              </div>
              {/* akhir konten */}
          </div>
        </div>
      </div>
      {/* Akhir Dari How Sagara Work */}

      {/* Bagian menu pilihan course */}
      <div className='pilihan-menu-course'>
        <div className="flex flex-col justify-center items-center mb-[45px] menu1">
          <div className="w-[70px] h-1 bg-primary mb-[42px] rounded"></div>
          <h1 className="text-primary text-3xl xl:text-[40px]">Empower Yourself with</h1>
          <h1 className="font-bold text-primary text-3xl xl:text-[40px]">Our Certification</h1>
        </div>

        <div>
          <TabMenu />
        </div>
      </div>
      {/* AKhir Bagian menu pilihan course */}
      </Container>
      
    </main>
  )
}

export default MainHome
