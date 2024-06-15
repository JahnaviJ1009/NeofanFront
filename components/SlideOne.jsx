import React from 'react'

const Slide_One_Button=[
  'Multi sports & leagues',
  'FIAT + Crypto as CEA',
  'User-friendly Experience',
  'Market place for NFTs',
  'Live Scores & User analytics'
];

const SlideOne = () => {
  return (
    <div className='w-[100%] h-[100%] rounded-3xl p-[50px]' style={{ backgroundImage: 'url(/slide-1.png)', backgroundSize: '100% 100%' }}>

      <div className='md:text-[50px] md:mt-0 mt-2 text-[25px]'>What we offer</div>

      <div className='md:max-w-[590px] max-w-[65%] md:text-[11px] text-[9px] md:tracking-wider font-[100] md:leading-4 text-[#ffffff9f] text-justify mt-2'>NeoFan is the perfect white-labeled application for fantasy gaming. Our app will offer (team name) a customizable experience tailored to your needs. Our advanced features, competitive pricing, and branding options make us the ideal choice for your fans. </div>

      <div className='md:max-w-[590px] max-w-[65%] md:text-[11px] text-[9px] md:tracking-wider font-[100] md:leading-4 text-[#ffffff9f] text-justify md:mt-4'>Our app is designed to provide a unique, true fantasy gaming experience. With our customizable options, your fans can create a team on the game that is sure to make their gaming experience one of a kind. </div>

      <div className='md:max-w-[590px] max-w-[65%] md:text-[12px] text-[10px] h-[10%] md:tracking-wider md:leading-5 flex justify-center items-center md:mt-4'> Fully customizable white-labeled web and mobile app that includes</div>

      <div className='md:max-w-[650px] max-w-[70%] md:text-[12px] text-[8px] md:h-[15%] flex justify-center items-center md:mt-4 md:gap-3 gap-1 md:flex-nowrap flex-wrap'>
        {
          Slide_One_Button.map((data, indx) => {
            return (
              <div key={indx} className='border-[#ffffff9f] md:w-[110px] border-[0.5px] p-3 rounded-xl capitalize'><center className='font-light'>{data}</center> </div>
            )
          })
        }
      </div>
      <div className='md:max-w-[650px] max-w-[65%] flex justify-center md:mt-6 mt-3'>
        <button className="flex items-center justify-center bg-gradient-to-br from-[#EE203B] to-[#EE5E20] text-white  rounded-xl cursor-pointer text-[14px] px-6 py-2" >Learn More</button>
      </div>

    </div>
  )
}

export default SlideOne