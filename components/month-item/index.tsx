import React, { FunctionComponent } from 'react'
import Time from '../time/index'
import Item from '../item/index'
import { Item as ArticleItem, MonthData } from '../../types/index'
interface MonthItemProps {
  months: MonthData
}
const MonthItem: FunctionComponent<MonthItemProps> = ({ months }) => {
  return <div className="month-item p-4">
    <Time time={months.time}/>
    <ul className="article-list">
      {
        months.data.map((item: ArticleItem, index) => {
          return <li key={index}>
            <Item data={item}/>
          </li>
        })
      }
    </ul>
  </div>
}
export default MonthItem