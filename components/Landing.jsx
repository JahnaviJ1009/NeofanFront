import React from 'react'

const Landing = () => {
  return (
    <>
      <img className='md:flex hidden absolute w-[20%] h-[180%] z-20' src="/top-bottom-border.png" alt="" />
      <img className='md:flex hidden absolute right-0 w-[20%] h-[180%] z-20 scale-x-[-1]' src="/top-bottom-border.png" alt="" />

      <video autoPlay muted loop className='min-w-[100%] absolute right-0 bottom-0 min-h-[100%] md:flex hidden' style={{background: 'linear-gradient(180deg, transparent, transparent, transparent, #100F16 670px)'}}>
        <source src="/landing-video.mp4" type="video/mp4"/>
      </video>

      <div className='md:flex hidden absolute z-10 w-[100%] h-[100%]' style={{background: 'linear-gradient(180deg, transparent, transparent, transparent, #100F16 670px)'}}></div>

      <div className="relative flex justify-center items-center md:w-[100vw] w-[125vw] h-[100vh] md:pt-0 pt-[10vh]">
        <div className='text-white md:text-[55px] text-[45px] flex justify-center flex-col my-0 w-[100%]'>
          <p className='mb-0 text-center font-medium'>The Ultimate Fan Experience</p>
          <p className='text-center font-medium mt-0 mb-1'>With <span className='text-[#EE5E20] font-medium'>NEOFAN</span></p>
          <div className='text-[13px] text-[#ffffff9f] flex justify-center'>Winning starts with next-level fandom - play fantasy games,</div>
          <div className='text-[13px] text-[#ffffff9f] flex justify-center'>experience fan engagement events and win prizes for your fandom.</div>
          <div className="flex justify-center items-center gap-4 mt-9">
        <button className="flex items-center justify-center bg-gradient-to-br from-[#EE203B] to-[#EE5E20] text-white  rounded-full cursor-pointer text-[14px] px-6 py-2" >Register Now !</button>
          <span className="text-[#ffffff9f] text-[14px] cursor-pointer">Learn More</span>
          </div>
        </div>
        <p />
      </div>
    </>
  )
}

export default Landing