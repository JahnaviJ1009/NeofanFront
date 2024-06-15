import { fetchArticleBySlug, fetchArticles } from '@/api'
import ArticleView from '@/components/ArticleView'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const Article = ({article,articles}) => {
  return (
    <Layout showBorder={false}>
      <Head>
        <title>Article</title>
        <link rel='icon' href='/logo.png'/>
      </Head>
      <ArticleView data={article} articles={articles} />
    </Layout>
  )
}

export const getServerSideProps = async(context) =>{
  const {params} = context;
  const {data:articles}= await fetchArticles()
  const {data:article}= await fetchArticleBySlug(params.Article)
  return {
    props:{
      article:article.data[0],
      articles:articles.data.slice(0, 3)
    }
  }
}

export default Article