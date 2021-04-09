import React, { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'
import Article from '../components/item/index'
import { Item } from '../types/index'
import styles from '../styles/Home.module.scss'

const Articles: FunctionComponent<{ data: Item[] }> = ({ data }) => {
  return (
    <div>
      <ul className={styles['month-list']}>
        {
          data.map((item, index) => (
            <li key={index} className="month">
              <Article data={item}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/articles`).then(res => res.json())
  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default Articles