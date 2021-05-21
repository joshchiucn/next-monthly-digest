import React, { FunctionComponent, useState } from 'react'
import { GetStaticProps } from 'next'
import { getSites } from '../request'

import PageHeader from '../components/page-header'
import { SiteItem } from '../types/index'
import Pagination from '../components/pagination'
const Sites: FunctionComponent<{ data: SiteItem[], rowCount: number }> = ({ data, rowCount }) => {
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
    const {result} = await getSites({
      page
    })
    setRows(result)
  }
  const onSearchChange = (event) => {
    setSearch(event.target.value)
  }
  const onClickSearch = async () => {
    setPage(1)
    const {result, count} = await getSites({
      page: 1,
      filter: search
    })
    setRows(result)
    setCount(count)
  }
  return <>
    <PageHeader search={search} onSearchChange={onSearchChange} onClickSearch={onClickSearch}/>
    <main className="sites text-left">
      <ul>
        {
          rows.map((site, index) => (
            <li key={index} className="p-4">
              <a href={site.link} className="text-gray-900 hover:text-red-600 font-bold text-xl">{site.name}</a>
              <p className="mt-2 text-gray-500 text-sm">{site.description}</p>
            </li>
          ))
        }
      </ul>
      <Pagination current={page} pageSize={10} total={count} onClickPrev={onClickPrev} onClickNext={onClickNext}></Pagination>
    </main>
  </>
}

export const getStaticProps: GetStaticProps = async () => {
  const { result, count } = await getSites()
  return {
    props: {
      rowCount: count,
      data: result
    },
    revalidate: 1
  }
}

export default Sites