import React, { FunctionComponent } from 'react'
import MonthItem from '../components/month-item/index'
import { MonthData } from '../types/index'
import styles from '../styles/Home.module.scss'

const Articles: FunctionComponent<{ data: MonthData[] }> = ({ data }) => {
  return (
    <div>
      <ul className={styles['month-list']}>
        {
          data.map((item, index) => (
            <li key={index} className="month">
              <MonthItem months={item}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export async function getServerSideProps () {
  const data = await fetch(`${process.env.DOMAIN}/api/articles`).then(res => res.json())
  return {
    props: {
      data
    }
  }
}

export default Articles