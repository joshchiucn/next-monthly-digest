import React, { FunctionComponent, useState } from 'react'
import { GetStaticProps } from 'next'
import Article from '../components/item/index'
import { Item } from '../types/index'
import Pagination from '../components/pagination'
import styles from '../styles/Home.module.scss'
const Articles: FunctionComponent<{ data: Item[], count: number }> = ({ data, count }) => {
  const [page, setPage] = useState(1)
  return (
    <main>
      <ul className={styles['month-list']}>
        {
          data.map((item, index) => (
            <li key={index} className="month">
              <Article data={item}/>
            </li>
          ))
        }
      </ul>
      <Pagination current={1} pageSize={10} total={count}></Pagination>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {result: data, count} = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/articles`).then(res => res.json())
  return {
    props: {
      data,
      count
    },
    revalidate: 1
  }
}

export default Articles