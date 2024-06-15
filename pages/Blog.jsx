import { fetchArticles } from '@/api'
import Blogs from '@/components/Blogs'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const Blog = ({articles}) => {
  return (
    <Layout showBorder={false}>
      <Head>
        <title>Blogs</title>
        <link rel='icon' href='/logo.png'/>
      </Head>
      <Blogs blogsArticle={articles}/>
    </Layout>
  )
}

export const getServerSideProps = async() =>{
  const {data:articles}= await fetchArticles()
  return {
    props:{
      articles:articles.data
    }
  }
}

export default Blog