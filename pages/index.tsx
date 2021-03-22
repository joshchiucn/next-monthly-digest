import React, { FunctionComponent } from 'react'
import MonthItem from '../components/month-item/index'
import styles from '../styles/Home.module.scss'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())
const Articles: FunctionComponent = () => {
  const result = useSWR('/api/articles', fetcher)
  const { data, error } = result
  if (error) {
    return <div>something went wrong</div>
  } else if (data) {
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
  } else {
    return null
  }
}

export default Articles