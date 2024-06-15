import Engagement from '@/components/Engagement';
import Landing from '@/components/Landing';
import Layout from '@/components/Layout';
import Play from '@/components/Play';
import Team from '@/components/Team';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Head>
        <title>NeoFan</title>
        <link rel='icon' href='/logo.png'/>
      </Head>
      <main>
        <Layout>
          <Landing />
          <Engagement />
          <Team />
          <Play />
        </Layout>
      </main>
    </div>
  );
};

export default Home;