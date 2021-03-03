import React, { FunctionComponent } from 'react'
import MonthItem from '../components/month-item/index'
import data from '../data'
import styles from '../styles/Home.module.scss'
const Articles: FunctionComponent = () => (
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

export default Articles