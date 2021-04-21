import React, { FunctionComponent, useState } from 'react'
import { GetStaticProps } from 'next'
import Article from '../components/item/index'
import { Item } from '../types/index'
import Pagination from '../components/pagination'
import styles from '../styles/Home.module.scss'
const Articles: FunctionComponent<{ data: Item[], rowCount: number }> = ({ data, rowCount }) => {
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState(data)
  const [count, setCount] = useState(rowCount)
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
    const {result} = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/articles?page=${page}`).then(res => res.json())
    setRows(result)
  }
  const onClickTag = async (tag: string) => {
    setPage(1)
    const {result, count} = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/articles?page=1&filter=${tag}+in:tags`).then(res => res.json())
    setRows(result)
    setCount(count)
  }
  const onClickSource = async (source: string) => {
    setPage(1)
    const {result, count} = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/articles?page=1&filter=${source}+in:source`).then(res => res.json())
    setRows(result)
    setCount(count)
  }
  return (
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {result: data, count: rowCount} = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/articles`).then(res => res.json())
  return {
    props: {
      data,
      rowCount
    },
    revalidate: 1
  }
}

export default Articles