import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Social_media=[
  {src:'/instagram.png',resolution:'28px'},
  {src:'/twitter.png',resolution:'26px'},
  {src:'/facebook.png',resolution:'25px'}
];
const Footer_Options=[
  {src:'/About',title:'About Us'},
  {src:'/T&C',title:'T&C'},
  {src:'/privacy',title:'Privacy Policy'},
  {src:'/points',title:'Points System'},
];
const Footer = ({ showBorder }) => {
  return (
    <div id='play' className='relative md:w-[100vw] w-[125vw] h-[45vh] flex flex-col justify-end items-center'>
      {showBorder && (
        <>
          <img className='absolute md:flex hidden left-0 bottom-0 w-[20%] h-[300%] z-[-20] scale-y-[-1]' src="/top-bottom-border.png" alt="" />
          <img className='absolute md:flex hidden right-0 bottom-0 w-[20%] h-[300%] z-[-20] scale-y-[-1] scale-x-[-1]' src="/top-bottom-border.png" alt="" />
        </>
      )
      }

      <div className='md:w-[80%] w-[100%] md:h-[80%] rounded-2xl bg-[#1C1C25] bg-right-bottom flex flex-row justify-between items-start' style={{ backgroundImage: 'url(/footer-back.png)', backgroundSize: '20% 90%', backgroundRepeat: 'no-repeat' }}>
        <div className="flex items-center flex-row ml-8 mt-5">

          <div className='flex flex-col'>

            <div className='flex flex-row items-center ml-2'>
              <Image src='/logo.png' alt="logo" width='35' height='38' />
              <span className="text-white text-[30px] ml-2 tracking-wider"><strong>NEOFAN</strong></span>
            </div>

            <div className='text-[#ffffff9f] text-justify md:tracking-wider md:text-[12px] text-[14px] mt-2'>
              NOT YOUR USUAL FANTASY GAME
            </div>

            <div className='flex flex-row gap-3 items-center mt-5'>
              {Social_media.map((data, indx) => {
                return (
                  <img src={data.src} alt={indx} key={indx} className={`w-[${data.resolution}s] h-[${data.resolution}]`} />
                )
              })}
            </div>

            <div className='flex flex-wrap md:max-w-[50%] text-[#ffffff9f] md:text-[12px] text-[14px] gap-2 mt-5 md:mb-0 mb-2'>
              {
                Footer_Options.map((item, inx) => {
                  return (
                    <Link className='w-[100px]' key={inx} href={item.src}>{item.title}</Link>
                  )
                })
              }
            </div>

          </div>

        </div>

        <div className='flex flex-row gap-3 h-[15%] mt-5' >
          <img className='md:w-auto md:h-auto w-[40%] h-[80%]' src="/GooglePlay.png" alt="GooglePlay" />
          <img className='md:w-auto md:h-auto w-[40%] h-[85%]' src="/AppStore.png" alt="GooglePlay" />
        </div>

      </div>

    </div>
  )
}

export default Footer