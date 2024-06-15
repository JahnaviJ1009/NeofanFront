'use client'

import Image from 'next/image';
import { useState } from 'react'
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
const Team = () => {
  const [position, setPositions] = useState([1, 2, 3]);

  const handleNextClick = () => {

    if (position[0] === 1) {
      setPositions([2, 1, 3])
    } else if (position[1] === 1) {
      setPositions([3, 2, 1])
    }
  };

  const handlePrevClick = () => {

    if (position[1] === 1) {
      setPositions([1, 2, 3])
    } else if (position[2] === 1) {
      setPositions([2, 1, 3])
    }
  }
  const isNextDisabled = position[2] === 1;
  const isPrevDisabled = position[0] === 1;

  return (
    <div id='team' className='relative md:w-[100vw] w-[125vw] h-[100vh] flex flex-col justify-center items-center'>
      
      <div className='rounded-3xl md:w-[80%] w-[100%] h-[65%] flex justify-center items-center text-white bg-[#1C1C25] transition-transform duration-[2s] mt-9'>
        {/* Content of Slide 1 */}
        {position[0] === 1 && (
          <SlideOne/>
        )}

        {/* Content of Slide 2 */}
        {position[1] === 1 && (
          <SlideTwo/>
        )}

        {/* Content of Slide 3 */}
        {position[2] === 1 && (
          <SlideThree/>
        )}
      </div>

      <div className='w-[80%] h-[6%] flex md:justify-between justify-center flex-row p-4'>
        <div className='md:flex hidden items-center p-4'>
          <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-br from-[#EE203B] to-[#EE5E20]' style={{ order: position[0], transform: `translateX(${position[0] * 20}px)`, transition: 'transform 0.5s ease, order 0.5s ease' }}></div>
          <div className='w-[10px] h-[10px] rounded-full bg-[#1C1C25]' style={{ order: position[1], transform: `translateX(${position[1] * 20}px)`, transition: 'transform 0.5s ease, order 0.5s ease' }}></div>
          <div className='w-[10px] h-[10px] rounded-full bg-[#1C1C25]' style={{ order: position[2], transform: `translateX(${position[2] * 20}px)`, transition: 'transform 0.5s ease, order 0.5s ease' }}></div>
        </div>
        <div className='flex gap-4 items-center p-4' >
          <div className='w-[25px] h-[25px] cursor-pointer flex items-center' onClick={!isPrevDisabled ? handlePrevClick : null}>
            {
              !isPrevDisabled ?
                <Image src={'/vector.png'} alt='' width={25} height={25} style={{ rotate: '180deg' }} />
                :
                <Image src={'/vector-blur.png'} alt='' width={25} height={25} />
            }
          </div>

          <div className='w-[25px] h-[25px] cursor-pointer flex items-center' onClick={!isNextDisabled ? handleNextClick : null}>
            {
              !isNextDisabled ?
                <Image src={'/vector.png'} alt='' width={25} height={25} />
                :
                <Image src={'/vector-blur.png'} alt='' style={{ rotate: '180deg' }} width={25} height={25} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team