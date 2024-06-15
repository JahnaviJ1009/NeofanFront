import React from 'react'
const Slide_Two_Button=[
  {title:'Tracking',src:'/Tracking.png'},
  {title:'Challenges',src:'/Challenges.png'},
  {title:'Levels',src:'/Levels.png'},
  {title:'Rewards',src:'/Rewards.png'},
  {title:'Leaderboard',src:'/Leaderboard.png'},
  {title:'Competiton',src:'/Competiton.png'}
];
const SlideTwo = () => {
  return (
    <div className='w-[100%] h-[100%] rounded-3xl p-[50px]' style={{ backgroundImage: 'url(/slide-2.png)', backgroundSize: '100% 100%' }}>
      <div className='md:text-[50px] md:mt-0 mt-2 text-[25px]'>NeoFan White-Label</div>

      <div className='md:max-w-[590px] max-w-[65%] md:text-[11px] text-[9px] md:tracking-wider font-[100] md:leading-4 text-[#ffffff9f] text-justify mt-2'>NeoFan is a fantasy gaming and a fan engagement platform built on blockchain. We are the bridge to bring the fan experience from the stadiums to your fans! NFTs and Fan Tokens, distributed as a reward for participating, can be redeemed to...</div>

      <div className='md:max-w-[590px] max-w-[65%] md:text-[12px] text-[10px] h-[10%] md:tracking-wider md:leading-5 mt-4'>WIN A <span className='text-[#EE5E20] font-bold'>TRUE FAN EXPERIENCE!</span></div>

      <div className='flex flex-wrap md:max-w-[600px] max-w-[70%] md:gap-2 gap-1 md:mt-5'>
        {
          Slide_Two_Button.map((data,indx)=>{
            return(
            <div className='md:w-[190px] w-[120px] h-[50px] bg-[#ffffff1a] rounded-lg flex items-center md:gap-2'>
              <img src={data.src} alt="data" className='w-[24px] h-[24px] ml-3' />
              <div className='md:text-[12px] text-[9px] text-white font-thin ml-2 tracking-widest'>{data.title}</div>
            </div>
            )
          })
        }
      </div>
      <div className='max-w-[650px] flex justify-center mt-6'>
        <button className="flex items-center justify-center bg-white text-black rounded-xl cursor-pointer text-[14px] px-6 py-2" >Contact Now</button>
      </div>
    </div>
  )
}

export default SlideTwo