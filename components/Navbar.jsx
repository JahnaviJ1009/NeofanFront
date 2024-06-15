import { Box, Drawer } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Navbar() {
  const [visible, setVisible] = useState(false)
  const NAV_LINKS = [
    { href: '#engagement', key: 'engagement', label: 'Fan Engagement' },
    { href: '#team', key: 'team', label: 'For Your Team' },
    { href: '#play', key: 'how_to_play', label: 'How To Play' },
    { href: '/Blog', key: 'blogs ', label: 'Blogs' },
    { href: '/About', key: 'about_us', label: 'About Us' },
  ];
  return (
    <>
      <nav className='md:flex hidden items-center justify-between ml-8 mt-7 min-w-[95vw] px-9  py-2 fixed z-30 backdrop-blur-sm bg-[#0000001c] rounded-full'>
        <div className="flex items-center justify-center gap-8">
          <Link href='/' className="flex items-center flex-row">
            <Image src='/logo.png' alt="logo" width='35' height='38' />
            <span className="text-white text-[30px] ml-2"><strong>NEOFAN</strong></span>
          </Link>
          <ul className="h-full gap-12 flex justify-evenly">
            {NAV_LINKS.map((link, indx) => (
              <Link href={link.href} key={indx} className="scroll-smooth text-[12px] text-white flex items-center justify-between cursor-pointer ">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <span className="text-[#ffffff9f] text-[14px]">Register</span>
          <button className="flex items-center justify-center bg-gradient-to-br from-[#EE203B] to-[#EE5E20] text-[14px] px-4 py-[.3rem] text-white  rounded-full cursor-pointer" >Play Now !</button>
        </div>
      </nav>
      <nav className="md:hidden flex">
        <div className="flex justify-between fixed py-2 px-4 w-full bg-[#100F16] z-30">
          <Link href='/' className="flex flex-row ml-5">
            <Image src='/logo.png' alt="logo" width='35' height='38' />
            <span className="text-white text-[30px] ml-2"><strong>NEOFAN</strong></span>
          </Link>
          <button onClick={() => setVisible(true)}>
            <img src='/menu.png' className="w-[8vw] h-[5vh] p-1" />
          </button>
          <Drawer sx={{ '.MuiDrawer-paper': { backgroundColor: '#100F16' } }} anchor="right" open={visible} onClose={() => setVisible(false)}>
            <Box sx={{ width: '250px' }}>
              <ul className="h-full gap-6 flex flex-col justify-evenly p-5 text-white text-[20px]">
                <Link href='/' onClick={()=>setVisible(false)} className="text-[30px] m-0 text-[#EE5E20] tracking-wider">NeoFan</Link>
                {NAV_LINKS.map((link, indx) => (
                  <Link href={link.href} key={indx} onClick={()=>setVisible(false)} className="scroll-smooth flex items-center justify-between cursor-pointer ">
                    {link.label}
                  </Link>
                ))}
              </ul>
            </Box>
          </Drawer>
        </div>
      </nav>
    </>
  )
}

export default Navbar