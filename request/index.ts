import axios from 'axios'
import { ArticleResponse, SiteResponse } from '../types'

export function getArticles (params = {}): Promise<ArticleResponse> {
  return axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/articles`, {
    params
  }).then(res => res.data)
}

export function getSites (params = {}): Promise<SiteResponse> {
  return axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/sites`, {
    params
  }).then(res => res.data)
}