import Layout from '@/components/Layout'
import TermsAndCondition from '@/components/TermsAndCondition'
import Head from 'next/head'
import React from 'react'

const TC = () => {
  return (
    <Layout showBorder={false}>
      <Head>
        <title>T&C</title>
        <link rel='icon' href='/logo.png'/>
      </Head>
      <TermsAndCondition/>
    </Layout>
  )
}

export default TC