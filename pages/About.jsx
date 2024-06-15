import AboutUs from '@/components/AboutUs'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
        <link rel='icon' href='/logo.png'/>
      </Head>
      <AboutUs />
    </Layout>
  )
}

export default About