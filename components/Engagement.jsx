import React from 'react'
import Image from 'next/image'

const images = [
  '/cricket.png',
  '/football.png',
  '/basketball.png',
  '/f1.png'
]
const ENGAGEMENT_PAGE = [
  { title: 'Cricket', desc: 'Bowl your way to fandom rewards' },
  { title: 'Football', desc: 'Score big with Fan rewards' },
  { title: 'Basketball', desc: 'Slam Dunk your fandom status' },
  { title: 'F1', desc: 'Full throttle to fan rewards' },
]

const Engagement = () => {
  return (
    <div id='engagement' className='relative md:w-[100vw] h-[100vh] w-[125vw] flex flex-col justify-center items-center'>

      <div className='rounded-3xl md:w-[80%] md:ml-0 w-[90%] h-[20%] flex md:justify-between justify-center items-center bg-[#1C1C25]'>
        <img className='relative md:flex hidden self-start rounded-[23px_0px] w-[75px] h-[75px]' src="./engagement-back.png" alt="eng" />
        <div className='flex flex-col text-white'>
          <p className='flex justify-center font-light text-[34px]'>Fan Engagement</p>
          <p className='flex justify-center text-[#ffffff9f] text-[14px]'>Play fantasy games for your favorite sports</p>
        </div>
        <img className='relative md:flex hidden self-end h-[100%] w-[4%] rounded-[0px_23px_23px_0px]' src="./engagement-back-2.png" alt="eng" />
      </div>
      <div className='mt-5 gap-2 flex md:flex-row md:flex-nowrap flex-wrap h-auto md:w-[75%] justify-center'>
        {
          ENGAGEMENT_PAGE.map((data, indx) => {
            return (
              <div key={indx} className='flex bg-[#1C1C25] md:w-[50%] md:h-[100%] w-[50vw] h-[15vh] rounded-lg'>
                <div className='w-[50%] h-[100%]'>
                  <p className='p-2 mt-1 text-[#EE5E20] font-bold text-[18px]'>{data.title}</p>
                  <p className='max-w-[250px] text-[#ffffff9f] p-2 pt-0 text-[11px]'>{data.desc}</p>
                </div>
                <div className='w-[50%] h-[100%]'>
                  <Image src={images[indx]} alt={data.title} width={155} height={100} className='w-[100%] h-[100%] rounded-lg' />
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='mt-8 flex gap-4'>
        <button className="flex items-center justify-center border-solid border border-[#EE5E20] hover:bg-gradient-to-br hover:from-[#EE203B] hover:to-[#EE5E20] hover:text-white text-[#EE5E20]  rounded-full cursor-pointer text-[15px] font-semibold md:px-[80px] px-[60px] py-[6px]">Play Now</button>
        <button className="flex items-center justify-center bg-[#1C1C25] text-white rounded-full cursor-pointer text-[15px] md:px-[60px] px-[50px] py-[6px]">Download App</button>
      </div>

    </div>
  )
}

export default Engagement