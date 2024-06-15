import React from 'react'
// import getPlaylistItems from '@/components/api/youtube' 
const Play = () => {
  return (
    <div id='play'  className='relative md:w-[100vw] w-[125vw] h-[100vh] flex flex-col justify-center items-center'>

      <div className='rounded-3xl md:w-[75%] w-[90%] h-[15%] flex md:justify-between justify-center items-center bg-[#1C1C25] mt-[80px]'>
        <img className='relative md:flex hidden self-start rounded-[23px_0px] w-[120px] h-[25px]' src="./play-back.png" alt="eng" />
        <div className='absolute flex flex-col text-white md:ml-9'>
          <p className='text-center md:flex font-light text-[34px] '>How to play</p>
          <p className='flex justify-center text-[#ffffff9f] text-[14px]'>Play fantasy games for your favorite sports</p>
        </div>
        <img className='relative md:flex hidden self-end h-[100%] w-[4%] rounded-[0px_23px_23px_0px]' src="./engagement-back-2.png" alt="eng" />
      </div>

      <div className="md:w-[75%] w-[100%] h-[65%] flex justify-center md:flex-row flex-col mt-4 px-4">

        <div className="md:w-[80%] w-[100%] h-[100%]">
          <iframe className='rounded-xl' width="100%" height="100%" src="https://www.youtube.com/embed/d_Xbd2I5Zxk?si=p7gPRlQ9_VJBhZT8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <div className='md:w-[20%] w-[100%] h-[100%] md:ml-2 mt-2 object-cover flex md:flex-col gap-2'>
          <div className='w-[100%] md:h-[33%] h-[50%]'>
            <iframe className='rounded-xl' width="100%" height="100%" src="https://www.youtube.com/embed/Sibu_Z0CsoI?si=DRsOCYg8ptrGapqT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='w-[100%] md:h-[33%] h-[50%]'>
            <iframe className='rounded-xl' width="100%" height="100%" src="https://www.youtube.com/embed/lM8h5Mm6ODo?si=D2o9nrLXiFliopgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='w-[100%] md:h-[33%] h-[50%]'>
            <iframe className='rounded-xl' width="100%" height="100%" src="https://www.youtube.com/embed/Sibu_Z0CsoI?si=DRsOCYg8ptrGapqT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Play