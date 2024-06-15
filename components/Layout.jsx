import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children, showBorder=true }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer showBorder={showBorder}/>
    </div>
  )
}

export default Layout