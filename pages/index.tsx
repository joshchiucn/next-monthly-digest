import React, { FunctionComponent, useState } from 'react'
import { GetStaticProps } from 'next'
import { getArticles } from '../request'
import PageHeader from '../components/page-header'
import Article from '../components/item/index'
import { Item } from '../types/index'
import Pagination from '../components/pagination'
import styles from '../styles/Home.module.scss'
const Articles: FunctionComponent<{ data: Item[], rowCount: number }> = ({ data, rowCount }) => {
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState(data)
  const [count, setCount] = useState(rowCount)
  const [search, setSearch] = useState('')
  const onClickPrev = () => {
    const newPage = page - 1
    setPage(newPage)
    handlePageChange(newPage)
  }
  const onClickNext = () => {
    const newPage = page + 1
    setPage(newPage)
    handlePageChange(newPage)
  }
  const handlePageChange = async (page: number) => {
    const {result} = await getArticles({
      page
    })
    setRows(result)
  }
  const onClickTag = async (tag: string) => {
    setPage(1)
    const search = `${tag} in:tags`
    const {result, count} = await getArticles({
      page: 1,
      filter: search
    })
    setSearch(search)
    setRows(result)
    setCount(count)
  }
  const onClickSource = async (source: string) => {
    setPage(1)
    const search = `${source} in:source`
    const {result, count} = await getArticles({
      page: 1,
      filter: search
    })
    setSearch(search)
    setRows(result)
    setCount(count)
  }
  const onSearchChange = (event) => {
    setSearch(event.target.value)    
  }
  const onClickSearch = async () => {
    setPage(1)
    const {result, count} = await getArticles({
      page: 1,
      filter: search
    })
    setRows(result)
    setCount(count)
  }
  return (
    <>
      <PageHeader search={search} onSearchChange={onSearchChange} onClickSearch={onClickSearch}/>
      <main>
        <ul className={styles['month-list']}>
          {
            rows.map((item, index) => (
              <li key={index} className="month">
                <Article data={item} onClickTag={onClickTag} onClickSource={onClickSource}/>
              </li>
            ))
          }
        </ul>
        <Pagination current={page} pageSize={10} total={count} onClickPrev={onClickPrev} onClickNext={onClickNext}></Pagination>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {result: data, count: rowCount} = await getArticles()
  return {
    props: {
      data,
      rowCount
    },
    revalidate: 1
  }
}

export default Articles