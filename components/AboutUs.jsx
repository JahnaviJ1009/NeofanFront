'use client'
import React, { useState } from 'react'
import axios from 'axios';
const AboutUs = () => {
  const [formData, handleData] = useState({name:'',email:'',phone:'',message:''})
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('STRAPI_API_ENDPOINT', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
  const handleChange =(e)=>{
    handleData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <>
      <img className='absolute md:flex hidden left-0 w-[20%] h-[120%] z-20' src="/top-bottom-border.png" alt="" />
      <img className='absolute md:flex hidden right-0 w-[20%] h-[120%] z-20 scale-x-[-1]' src="/top-bottom-border.png" alt="" />

      <div className='relative md:w-[100vw] w-[125vw] h-auto flex md:pt-[15vh] pt-[10vh] justify-center'>
        <div className="md:w-[70%] w-[90%] md:text-[12px] text-[15px] h-auto border border-[#1c1b22] rounded-lg pb-2">
          <p className='p-5 pb-3 md:text-[20px] text-[25px] text-white capitalize'>how we started</p>
          <p className='pl-5 max-w-[95%] text-justify text-[#ffffff9f] capitalize'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde debitis officiis dicta corrupti repellat adipisci consequatur! Obcaecati culpa, quia doloribus non quos expedita voluptates aperiam ad possimus. Molestiae deleniti tempora doloremque. Incidunt obcaecati reiciendis dolores quibusdam natus quis magni fugit quod, cumque libero fuga praesentium quisquam laborum facere nobis aspernatur aut facilis officia tempora sequi
          </p>
          <p className='pl-5 mt-5 max-w-[95%] text-justify text-[#ffffff9f] capitalize'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde debitis officiis dicta corrupti repellat adipisci consequatur! Obcaecati culpa, quia doloribus non quos expedita voluptates aperiam ad possimus. Molestiae deleniti tempora doloremque. Incidunt obcaecati reiciendis dolores quibusdam natus quis magni fugit quod, cumque libero fuga praesentium quisquam laborum facere nobis aspernatur aut facilis officia tempora sequi
          </p>
        </div>
      </div>

      <div className='relative md:w-[100vw] w-[125vw] h-auto flex justify-center mt-2'>
        <div className="md:w-[70%] w-[90%] h-auto border border-[#1c1b22] rounded-lg">
          <p className='p-5 pb-3 md:text-[20px] text-[25px] text-white capitalize'>gallery</p>
          <div className='w-[90%] h-[50vh] bg-[#1C1C25] rounded-2xl mx-auto'></div>
          <div className='w-[92%] md:flex-nowrap h-auto flex flex-wrap justify-between flex-row mx-auto mt-3 pb-2 gap-y-2'>
            {
              Array.from({ length: 4 }).map((_, indx) => (
                <div key={indx} className='md:w-[24%] w-[49%] md:h-[30vh] h-[20vh] rounded-2xl bg-[#1C1C25]'></div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='relative md:w-[100vw] w-[125vw] h-auto flex justify-center mt-2'>
        <div className="md:w-[70%] w-[90%] h-auto border border-[#1c1b22] rounded-lg pb-3">
          <p className='p-5 pb-3 md:text-[20px] text-[25px] text-white capitalize'>Events</p>
          <div className='w-[90%] h-[60vh] bg-[#1C1C25] rounded-2xl mx-auto'></div>
        </div>
      </div>

      <div className='relative md:w-[100vw] w-[125vw] h-auto flex justify-center mt-2'>

        <div className="md:w-[70%] w-[100%] h-full">
          <p className='p-5 pb-3 md:text-[20px] text-[25px] text-white capitalize'>contact us</p>
          <div className='w-full h-[80%] bg-[#1C1C25] rounded-2xl mx-auto flex justify-end' style={{ backgroundImage: 'url(/contact-us.png)', backgroundRepeat: 'no-repeat', backgroundSize: '50% 100%' }}>

            <form className='w-[50%] h-full p-4 flex flex-col' method='post' onSubmit={handleSubmit}>
              <div className="flex md:flex-row flex-col w-full h-auto gap-2">
                <input value={formData.name} type="text" placeholder='Enter your Name' className='border border-[#47474c] bg-transparent md:w-[50%] h-[40px] pl-4 text-[12px] rounded-full text-white focus:outline-0 focus:border-white' required name='name' onChange={handleChange}/>
                <input value={formData.phone} type="text" placeholder='Enter your Phone No' className='border border-[#47474c] bg-transparent md:w-[50%] h-[40px] pl-4 text-[12px] rounded-full text-white focus:outline-0 focus:border-white' name='phone' required onChange={handleChange}/>
              </div>
              <div className='flex gap-2 flex-col mt-2'>
                <input value={formData.email} type="email" placeholder='Enter your Email Address' className='border border-[#47474c] bg-transparent w-full h-[40px] pl-4 text-[12px] rounded-full text-white focus:outline-0 focus:border-white' name='email' required onChange={handleChange}/>
                <textarea cols="2" rows="10" value={formData.message} placeholder='Enter your Message' className='border border-[#47474c] bg-transparent w-full pl-4 pt-2 text-[12px] rounded-2xl text-white focus:outline-0 focus:border-white resize-none' name='message' required onChange={handleChange}></textarea>
                <button className="flex items-center md:w-[32%] w-[60%] justify-center bg-gradient-to-br from-[#EE203B] to-[#EE5E20] md:text-[14px] text-[12px] px-4 py-[.3rem] text-white rounded-lg cursor-pointer mx-auto " type="submit" >Send Message</button>
              </div>
            </form>

          </div>
        </div>

      </div>


    </>
  )
}

export default AboutUs