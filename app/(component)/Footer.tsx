import Image from 'next/image'
import React from 'react'
import logo from "../../assets/logo 2.png";
import Container from './Container';
import phone from "../../assets/icons8-phone-64.png";
import mail from "../../assets/icons8-mail-24.png";
import location from "../../assets/icons8-location-50.png"

const Footer = () => {
  return (
    <div className='bg-footer mt-10 text-white'>
      <Container>
        <div className='flex flex-col w-full items-center justify-center gap-10 md:gap-20 xl:gap-5 md:flex-row md:justify-between pt-[71px] pb-[145px]'>

            <div className='space-y-5 md:w-[30%] xl:w-[25%]'>
                <Image className='w-[224px] h-[80px]' src={logo} width={1920} height={1080} alt="" />
                <p className='text-sm text-center md:text-left '>Plan, build, grow digital products. Continuously delivering impact.</p>
                {/* All Sosmed */}
                <div className='flex items-center justify-center md:justify-start gap-3'>
                    <svg className='invert' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>

                    <svg className='invert' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                        <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                    </svg>

                    <svg className='invert' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                    </svg>

                    <svg className='invert' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                    </svg>
                {/* Akhir All Sosmed */}
                </div>
            </div>

            <div className='flex flex-col items-center justify-center md:items-start gap-12 md:gap-16 xl:gap-10 md:flex-row md:w-[70%] xl:w-[60%] md:justify-between'>

                <div>
                    <h1 className='font-bold text-2xl md:text-xl mb-8 text-center md:text-justify'>Pages</h1>
                    <div className='space-y-5 md:text-xs xl:text-sm text-center md:text-left'>
                        <p>IT Certification</p>
                        <p>Careers</p>
                        <p>FAQ</p>
                        <p>Terms & Conditions</p>  
                    </div>
                    
                </div>

                <div>
                    <h1 className='font-bold text-2xl md:text-xl mb-8 text-center md:text-justify'>Careers</h1>
                    <div className='space-y-5 md:text-xs xl:text-sm text-center md:text-left'>
                        <p>Front End Developer</p>
                        <p>Back End Developer</p>
                        <p>Quality Assurance</p>
                        <p>UI/UX Design</p>  
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-2xl md:text-xl mb-8 text-center md:text-justify'>Contact</h1>
                    <div className='space-y-5 md:text-xs xl:text-sm'>
                            <div className='flex flex-col md:flex-row items-center gap-1'>
                                <Image className='invert' src={phone} alt="" width={24} height={24} />
                                <p>+62 856-4097-7356</p>
                            </div>

                            <div className='flex flex-col md:flex-row items-center gap-1'>
                                <Image className='invert' src={mail} alt="" width={24} height={24} />
                                <p>consult@sagara.asia</p>
                            </div>

                            <div className='flex flex-col md:flex-row items-center gap-1'>
                                <Image className='invert' src={location} alt="" width={24} height={24} />
                                <p>South Jakarta and Bandung, Indonesia.</p>
                            </div>
                        
                    </div>
                </div>

            </div>  
        </div>

        <p className='text-center py-[27px]'>Copyright © 2022 PT. Sagara Asia Teknologi</p>
      </Container>
      
    </div>
  )
}

export default Footer
