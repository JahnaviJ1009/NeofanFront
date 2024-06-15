import axios from "axios";

const api = axios.create(
  {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers:{
      Authorization:`Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`
    }
  }
)

export const fetchArticles=async()=> api.get('/api/articles?populate=*')

export const fetchArticleBySlug=async(slugName)=>api.get(`/api/articles?filters[slug][$eq]=${slugName}&populate=*`)