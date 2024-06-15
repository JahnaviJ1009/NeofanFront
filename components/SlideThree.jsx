import React from 'react'
const SlideThree = () => {
  return (
    <>
    <div className='w-[100%] h-[100%] rounded-3xl md:flex hidden' style={{ backgroundImage: 'url(/slide-3.png)', backgroundSize: '100% 100%' }}>
      <div className='absolute right-[13%] mt-8'>
        <p className='text-[15px] font-[50] tracking-widest'>dexwin<span className='font-semibold'>.bet</span></p>
        <p className='text-[28px] w-[400px] font-extrabold leading-8 mt-3 uppercase'>start betting on all <span className='text-[#00ccff]'>basketball leagues</span> with</p>
        <div className='mt-1 flex items-center'>
          <span className='w-[35px] h-[35px]' style={{ backgroundImage: 'url(/usdc-logo.png)', backgroundSize: '35px 35px' }} />
          <span className='text-[45px] font-bold uppercase ml-1'>usdc</span>
          <span className='w-[35px] h-[35px] ml-5' style={{ backgroundImage: 'url(/usdt-logo.png)', backgroundSize: '35px 35px' }} />
          <span className='text-[45px] font-bold uppercase ml-1'>usdt</span>
        </div>
        <hr className='w-[70%] mt-2 ml-1 border-[#656565] mb-3' />
        <div className='leading-7 ml-2 text-[20px] font-medium uppercase text-justify'>
          <p>best live odds!</p>
          <p>single step sign up!</p>
          <p>instant deposit / withdraw!</p>
          <p>exclusive betting markets!</p>
        </div>
        <div className='max-w-[650px] flex mt-4'>
          <button className="flex items-center bg-[#067afc] text-white  rounded-full cursor-pointer text-[14px] px-6 py-2 uppercase font-semibold tracking-wider" >Launch dexwin</button>
        </div>
      <p className='uppercase mt-5 text-[13px] tracking-widest font-thin'>more sport & gaming bets-coming soon!</p>
      </div>
    </div>
    <div className='w-[100%] h-[100%] rounded-3xl md:hidden flex'>
      <div className='p-[25px]'>
        <p className='text-[15px] font-[50] tracking-widest'>dexwin<span className='font-semibold'>.bet</span></p>
        <p className='text-[28px] w-[400px] font-extrabold leading-8 mt-3 uppercase'>start betting on all <span className='text-[#00ccff]'>basketball leagues</span> with</p>
        <div className='mt-1 flex items-center'>
          <span className='w-[35px] h-[35px]' style={{ backgroundImage: 'url(/usdc-logo.png)', backgroundSize: '35px 35px' }} />
          <span className='text-[45px] font-bold uppercase ml-1'>usdc</span>
          <span className='w-[35px] h-[35px] ml-5' style={{ backgroundImage: 'url(/usdt-logo.png)', backgroundSize: '35px 35px' }} />
          <span className='text-[45px] font-bold uppercase ml-1'>usdt</span>
        </div>
        <hr className='w-[70%] mt-2 ml-1 border-[#656565] mb-3' />
        <div className='leading-7 ml-2 text-[20px] font-medium uppercase text-justify'>
          <p>best live odds</p>
          <p>single step sign up!</p>
          <p>instant deposit / withdraw!</p>
          <p>exclusive betting markets!</p>
        </div>
        <div className='max-w-[650px] flex mt-4'>
          <button className="flex items-center bg-[#067afc] text-white  rounded-full cursor-pointer text-[14px] px-6 py-2 uppercase font-semibold tracking-wider" >Launch dexwin</button>
        </div>
      <p className='uppercase mt-5 text-[13px] tracking-widest font-thin'>more sport & gaming bets-coming soon!</p>
      </div>
    </div>
    </>
  )
}

export default SlideThree